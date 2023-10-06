import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next"
import {
  getServerSession,
  type NextAuthOptions,
  type SessionStrategy,
} from "next-auth"
import prisma from "./prismadb"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import bcrypt from "bcrypt"

export const config: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
        username: {
          label: "Username",
          type: "text",
          placeholder: "John Smith",
        },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("Credentials are missing")
        }

        // check to see if email and password is there
        if (!credentials.email || !credentials.password) {
          throw new Error("Please enter an email and password")
        }

        // check to see if user exists
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        })

        // if no user was found
        if (!user || !user?.hashedPassword) {
          throw new Error("No user found")
        }

        // check to see if password matches
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        )

        // if password does not match
        if (!passwordMatch) {
          throw new Error("Incorrect password")
        }

        return user
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      // if (account) {
      //   console.log(account.userId)
      //   token.accessToken = account.access_token
      //   token.id = user.id
      //   console.log(account.userId)
      // }
      return { ...token, ...user }
    },
    async session({ session, token, user }) {
      // Add property to session, like an access_token from a provider.
      session.user = token as any
      // console.log(session)
      // session.id = token.id
      return session
    },
  },
  secret: process.env.SECRET,
  session: {
    strategy: "jwt" as SessionStrategy,
  },
  debug: process.env.NODE_ENV === "development",
  adapter: PrismaAdapter(prisma),
} satisfies NextAuthOptions

// Use it in server contexts
export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, config)
}
