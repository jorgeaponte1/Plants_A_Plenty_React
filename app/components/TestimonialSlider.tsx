"use client"

import React, { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image"
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

import { testimonialData } from "@/lib/testimonialData"

function TestimonialSlider() {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      autoplay={{
        delay: 7500,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      loop={true}
      pagination={true}
      modules={[Autoplay, EffectCoverflow, Pagination]}
      className="mySwiper bg-[rgba(7,96,78,1)] lg:h-[500px] lg:my-10 h-auto mt-10"
    >
      {testimonialData.map((testimonial, index) => (
        <SwiperSlide key={index} className="bg-white h-full">
          <div className="flex flex-col justify-center items-center lg:flex-row h-full lg:pt-0 pt-5">
            <Image
              src={testimonial.image}
              width={400}
              height={400}
              alt={`Image of ${testimonial.name}`}
              className="pl-5"
            />
            <div className="flex flex-col gap-y-10 lg:m-10 m-5 lg:mr-32">
              <div className="text-3xl font-serif font-semibold">
                {testimonial.name}
              </div>
              <p className="text-2xl">{testimonial.message}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default TestimonialSlider
