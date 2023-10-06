"use client"

import { useState, useEffect } from "react"
import { signIn, useSession } from "next-auth/react"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"

export default function Login() {
  const { status, data: session } = useSession()

  const router = useRouter()
  const [data, setData] = useState({
    email: "",
    password: "",
  })

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      router.push("/")
    }
  })

  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    signIn("credentials", { ...data, redirect: false }).then(callback => {
      if (callback?.error) {
        toast.error(callback.error)
      }

      if (callback?.ok && !callback?.error) {
        toast.success("Logged in successfully!")
      }
    })
  }

  return (
    <>
      <div className="flex flex-row h-screen">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-1/2 sm:max-w-sm">
            <Image
              src="/badge.webp"
              width={100}
              height={100}
              alt="Company Logo"
              className="mx-auto w-auto"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-3 text-center text-sm text-gray-500">
              Not a member?{" "}
              <a
                href="/register"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Register for a new account.
              </a>
            </p>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={loginUser}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={data.email}
                    onChange={e => setData({ ...data, email: e.target.value })}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={data.password}
                    onChange={e =>
                      setData({ ...data, password: e.target.value })
                    }
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
            <div className="mt-10">
              <div className="flex flex-row justify-center">
                <span className="text-center text-sm text-gray-500 font-medium">
                  Or continue with{" "}
                </span>
              </div>
              <div className="mt-6 flex flex-row justify-between">
                <button
                  onClick={() => signIn("github")}
                  className="bg-black text-white text-sm rounded-lg py-[6px] px-3 flex flex-row justify-center gap-x-2 w-5/12"
                >
                  <FaGithub className="h-[20px] w-[20px]" />
                  Github
                </button>

                <button
                  onClick={() => signIn("google")}
                  className="bg-[#4285F4] text-white text-sm rounded-lg py-[6px] px-3 flex flex-row justify-center gap-x-2 w-5/12"
                >
                  <FcGoogle className="h-[20px] w-[20px] bg-white" />
                  Google
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-1/2 hidden lg:flex">
          <Image src="/featured.webp" fill={true} alt="plant" />
        </div>
      </div>
    </>
  )
}
