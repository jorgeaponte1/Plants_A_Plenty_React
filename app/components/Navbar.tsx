"use client"
// import { useSession } from "next-auth/client"
import React, { useState } from "react"
import { Sansita_Swashed } from "next/font/google"
import { BsCart2 } from "react-icons/bs"

const sansita_swashed = Sansita_Swashed({
  subsets: ["latin"],
  variable: "--font-sansita_swashed",
  weight: ["800"],
})

function Navbar() {
  //   const session = useSession()
  const [loggedIn, setLoggedIn] = useState(true)
  const [items, setItems] = useState(5)

  return (
    <header className="absolute top-0 right-0 my-0 mx-8 w-full">
      <nav
        className={`w-full h-20 flex items-center justify-between fixed bg-[linear-gradient(to_bottom,#000,#0003_70%,#0000)] transition-[background-color] duration-[0.5s] z-[1] mx-auto my-0 py-7 border-b-[rgba(251,216,158,1)] border-b border-solid left-0 ${sansita_swashed.variable} font-sansita_swashed font-medium hover:bg-black`}
      >
        {/* Logo */}
        <div className="xl:text-4xl sm:text-2xl font-medium text-[wheat] xl:ml-12 ml-5">
          <a href="#">
            <h2 className="mr-5">Plants A Plenty</h2>
          </a>
        </div>

        {/* NavMenu */}
        <ul className="hidden lg:flex lg:gap-4 lg:justify-center text-[wheat] text-sm xl:text-lg mr-3">
          <li
            id="resp"
            className="hover:text-[rgb(135,161,93)] float-left text-left tracking-[2px] font-[bold] transition-all duration-[0.3s] ease-linear"
          >
            <a href="#hero">HOME</a>
          </li>
          <li
            id="resp"
            className="hover:text-[rgb(135,161,93)] float-left text-left tracking-[2px] font-[bold] transition-all duration-[0.3s] ease-linear"
          >
            <a href="#trending">SHOP</a>
          </li>
          <li
            id="resp"
            className="hover:text-[rgb(135,161,93)] float-left text-left tracking-[2px] font-[bold] transition-all duration-[0.3s] ease-linear"
          >
            <a href="#maintenance">CARE</a>
          </li>
          <li
            id="resp"
            className="hover:text-[rgb(135,161,93)] float-left text-left tracking-[2px] font-[bold] transition-all duration-[0.3s] ease-linear"
          >
            <a href="#review">TESTIMONIAL</a>
          </li>
          <li
            id="resp"
            className="hover:text-[rgb(135,161,93)] float-left text-left tracking-[2px] font-[bold] transition-all duration-[0.3s] ease-linear"
          >
            <a href="#monthly-sub">SUBSCRIPTION</a>
          </li>
          <li
            id="resp"
            className="hover:text-[rgb(135,161,93)] float-left text-left tracking-[2px] font-[bold] transition-all duration-[0.3s] ease-linear"
          >
            <a href="#contact">CONTACT</a>
          </li>
        </ul>

        {/* LogIn/LogOut */}
        <div className="flex items-center gap-3">
          {/* LogIn/LogOut */}
          <div className="pl-2">
            <ul className="hidden lg:flex">
              {loggedIn ? (
                <li>
                  <a
                    href="/logout/"
                    className="bg-[rgb(240,215,176)] text-black no-underline uppercase mt-5 px-[2.5em] py-[1em] rounded-xl hover:bg-[rgb(135,161,93)] text-sm font-serif font-semibold"
                  >
                    LOGOUT
                  </a>
                </li>
              ) : (
                <li>
                  <a
                    href="/login/"
                    className="bg-[rgb(240,215,176)] text-black no-underline uppercase mt-5 px-[1.5em] py-[1em] rounded-xl hover:bg-[rgb(135,161,93)] text-sm font-serif font-semibold"
                  >
                    LOGIN/SIGNUP
                  </a>
                </li>
              )}
            </ul>
          </div>
          {/* Cart */}
          <div className="relative ml-3 mr-7">
            <button
              id="cartbtn"
              className="text-center bg-transparent border-none cursor-pointer"
            >
              <BsCart2 className="text-[rgb(240,215,176)] h-6 w-6" />
            </button>
            {/* Cart Notification */}
            <div className="absolute flex justify-center items-center w-7 h-7 text-black bg-[rgb(240,215,176)] rounded-full -top-5 -right-4 font-sans">
              {items}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
