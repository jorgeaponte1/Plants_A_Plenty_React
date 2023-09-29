import React from "react"
import { IconType } from "react-icons"
import {
  BiLogoFacebookCircle,
  BiLogoTwitter,
  BiLogoGooglePlusCircle,
  BiLogoYoutube,
} from "react-icons/bi"

function Footer() {
  function renderIcon(IconComponent: IconType) {
    return (
      <li className="mx-3">
        <a
          href="#"
          className="transition-colors duration-400 ease-in-out hover:text-[aqua]"
        >
          <IconComponent className="text-white text-lg w-6 h-6 hover:text-[aqua] transition-colors duration-400 ease-in-out" />
        </a>
      </li>
    )
  }

  return (
    <footer className="bg-[#111] h-auto w-full text-white border-[5px] border-solid border-[wheat]">
      <div
        id="contact"
        className="flex items-center justify-center flex-col text-center"
      >
        <h3 className="capitalize text-4xl my-8 font-serif">Plants A Plenty</h3>
        <p className="my-4 mx-10 text-xl text-[#cacdd2]">
          Looking for a convenient and hassle-free way to bring the beauty of
          nature into your home or workspace? Check out our online plant shop!
          We offer a wide variety of high-quality indoor and outdoor plants,
          including succulents, herbs, and flowering plants, as well as stylish
          planters and accessories to help you create the perfect green oasis.
          Our team is dedicated to providing excellent customer service and
          expert advice, so whether you&apos;re a seasoned plant parent or a
          first-time buyer, we&apos;re here to help. Shop now and discover the
          joys of gardening from the comfort of your own home!
        </p>
        <ul className="flex flex-row items-center justify-center mt-4 mb-12">
          {renderIcon(BiLogoFacebookCircle)}
          {renderIcon(BiLogoTwitter)}
          {renderIcon(BiLogoGooglePlusCircle)}
          {renderIcon(BiLogoYoutube)}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
