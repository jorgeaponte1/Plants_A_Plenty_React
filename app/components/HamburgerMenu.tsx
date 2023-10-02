import React from "react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet"
import { RxHamburgerMenu } from "react-icons/rx"

function HamburgerMenu() {
  return (
    <div className="lg:hidden flex lg:gap-4 lg:justify-center text-[wheat] text-sm xl:text-lg mr-3">
      <Sheet>
        <SheetTrigger asChild>
          <button>
            <RxHamburgerMenu size={28} />
          </button>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          {/*           <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <div className="text-right">Name</div>
              <div>Email</div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <div className="text-right">Username</div>
              <div>Password</div>
            </div>
          </div> */}
          <div>
            <ul className="flex flex-col gap-4 lg:justify-center text-black text-sm xl:text-lg mt-4">
              <li
                id="home"
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
          </div>
          <SheetFooter>
            <SheetClose asChild></SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default HamburgerMenu
