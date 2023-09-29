import React from "react"
import { Sansita_Swashed } from "next/font/google"
import TestimonialSlider from "./TestimonialSlider"

const sansita_swashed = Sansita_Swashed({
  subsets: ["latin"],
  variable: "--font-sansita_swashed",
  weight: ["700"],
})

function Testimonial() {
  return (
    <section
      id="testimonial"
      className="lg:w-4/5 pt-10 min-h-[auto] flex flex-col gap-y-8 lg:gap-x-16 justify-center mx-auto items-center lg:px-5 px-10"
    >
      <h2
        className={`${sansita_swashed.variable} font-sansita_swashed text-center text-6xl`}
      >
        What our customers are saying
      </h2>
      <div
        id="testimonial"
        className="w-full bg-[rgba(7,96,78,1)] mx-auto mt-12 mb-10 rounded-[5px] border-[5px] border-solid border-[wheat] px-5"
      >
        <TestimonialSlider />
      </div>
    </section>
  )
}

export default Testimonial
