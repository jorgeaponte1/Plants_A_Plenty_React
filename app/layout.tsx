import "./globals.css"
import type { Metadata } from "next"
import { Sansita_Swashed } from "next/font/google"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { Providers } from "./providers"

const sansita_swashed = Sansita_Swashed({
  subsets: ["latin"],
  variable: "--font-sansita_swashed",
  weight: ["400", "700", "800"],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sansita_swashed.variable}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
