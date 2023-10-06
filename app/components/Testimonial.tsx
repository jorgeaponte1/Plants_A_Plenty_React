import React from "react"
import TestimonialSlider from "./TestimonialSlider"

function Testimonial() {
  return (
    <section
      id="testimonial"
      className="w-full min-h-[auto] flex flex-col gap-y-8 lg:gap-x-16 justify-center items-center"
    >
      <h2 className="font-sansita_swashed font-bold text-center text-5xl sm:text-6xl">
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
