// import { useSession } from "next-auth/client"
import React from "react"
import LoginButton from "./LoginButton"
import SideCart from "./SideCart"
import HamburgerMenu from "./HamburgerMenu"

const links = [
  { href: "#hero", label: "HOME" },
  { href: "#trending", label: "SHOP" },
  { href: "#care", label: "CARE" },
  { href: "#testimonial", label: "TESTIMONIAL" },
  { href: "#subscription", label: "SUBSCRIPTION" },
  { href: "#contact", label: "CONTACT" },
]

function Header() {
  return (
    <header className="absolute top-0 right-0 my-0 mx-8 w-full">
      <nav className="w-full h-20 flex items-center justify-between fixed bg-[linear-gradient(to_bottom,#000,#0003_70%,#0000)] transition-[background-color] duration-[0.5s] z-10 mx-auto my-0 py-7 border-b-[rgba(251,216,158,1)] border-b border-solid left-0 font-medium hover:bg-black">
        {/* Logo */}
        <div className="xl:text-4xl sm:text-2xl font-medium text-[wheat] xl:ml-12 ml-5">
          <a href="#">
            <h2 className="mr-5 font-sansita_swashed font-extrabold">
              Plants A Plenty
            </h2>
          </a>
        </div>
        {/* NavMenu */}
        <div className="flex flex-row sm:justify-evenly justify-end lg:items-center items-stat">
          <ul className="hidden lg:flex lg:gap-4 lg:justify-center text-[wheat] text-sm xl:text-lg pr-3 xl:pr-6">
            {links.map(link => (
              <li
                key={link.label}
                id="resp"
                className="hover:text-[rgb(135,161,93)] float-left text-left tracking-[2px] font-[bold] transition-all duration-[0.3s] ease-linear"
              >
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <div className="z-50">
            <HamburgerMenu />
          </div>
          {/* LogIn/LogOut/Cart */}
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex">
            <LoginButton />
          </div>
          <SideCart />
        </div>
      </nav>
    </header>
  )
}

export default Header
