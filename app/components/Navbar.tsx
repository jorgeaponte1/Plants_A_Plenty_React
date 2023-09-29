// import { useSession } from "next-auth/client"
import React from "react"
import { Sansita_Swashed } from "next/font/google"
import LoginButton from "./LoginButton"
import SideCart from "./SideCart"
import HamburgerMenu from "./HamburgerMenu"

const sansita_swashed = Sansita_Swashed({
  subsets: ["latin"],
  variable: "--font-sansita_swashed",
  weight: ["800"],
})

function Navbar() {
  return (
    <header className="absolute top-0 right-0 my-0 mx-8 w-full">
      <nav
        className={`w-full h-20 flex items-center lg:justify-around justify-between fixed bg-[linear-gradient(to_bottom,#000,#0003_70%,#0000)] transition-[background-color] duration-[0.5s] z-[1] mx-auto my-0 py-7 border-b-[rgba(251,216,158,1)] border-b border-solid left-0 ${sansita_swashed.variable} font-sansita_swashed font-medium hover:bg-black`}
      >
        {/* Logo */}
        <div className="xl:text-4xl sm:text-2xl font-medium text-[wheat] xl:ml-12 ml-5">
          <a href="#">
            <h2 className="mr-5">Plants A Plenty</h2>
          </a>
        </div>

        {/* NavMenu */}
        <div className="flex flex-row sm:justify-evenly justify-end lg:items-center items-stat">
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
              <a href="#care">CARE</a>
            </li>
            <li
              id="resp"
              className="hover:text-[rgb(135,161,93)] float-left text-left tracking-[2px] font-[bold] transition-all duration-[0.3s] ease-linear"
            >
              <a href="#testimonial">TESTIMONIAL</a>
            </li>
            <li
              id="resp"
              className="hover:text-[rgb(135,161,93)] float-left text-left tracking-[2px] font-[bold] transition-all duration-[0.3s] ease-linear"
            >
              <a href="#subscription">SUBSCRIPTION</a>
            </li>
            <li
              id="resp"
              className="hover:text-[rgb(135,161,93)] float-left text-left tracking-[2px] font-[bold] transition-all duration-[0.3s] ease-linear"
            >
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
          <HamburgerMenu />

          {/* LogIn/LogOut */}
          <div className="flex items-center gap-3">
            {/* LogIn/LogOut */}
            <LoginButton />
            <SideCart />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
