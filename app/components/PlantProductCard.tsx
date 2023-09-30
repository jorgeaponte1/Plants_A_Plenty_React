"use client"

import React, { useRef, useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Tilt } from "react-tilt"

import "swiper/css"
import "swiper/css/pagination"

import { Pagination } from "swiper/modules"

type Plant = {
  name: string
  price: number
  image: string
}

let plants: Plant[] = [
  { name: "Pothos", price: 35, image: "/pothos.jpg" },
  { name: "Birds of Paradise", price: 125, image: "/birds-of-paradise.jpg" },
  { name: "Snake Plant", price: 25, image: "/snake-plant.jpg" },
  { name: "Fiddle Fig", price: 70, image: "/fiddle-fig.jpg" },
  { name: "String of Pearls", price: 25, image: "/string-of-pearls.jpg" },
  { name: "ZZ Plant", price: 35, image: "/zz-plant.jpg" },
  { name: "Ponytail Palm", price: 65, image: "/ponytail-palm.jpg" },
  { name: "Aloe Vera", price: 10, image: "/aloe-vera.jpg" },
  { name: "ZZ Plant", price: 45, image: "/zz-plant.jpg" },
  { name: "Cactus", price: 30, image: "/cactus.jpg" },
]

function PlantProductCard() {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  }

  return (
    <Swiper
      slidesPerView={1} // default to 1 slide per view for very small screens
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
      breakpoints={{
        640: {
          // for viewport widths of 640px and above (sm and above)
          slidesPerView: 2, // set 2 slides per view
        },
        960: {
          // for viewport widths of 960px and above (lg and above)
          slidesPerView: 2, // set 2 slides per view
        },
        1200: {
          // for viewport widths of 1200px and above (xl and above)
          slidesPerView: 3, // set 3 slides per view
        },
      }}
    >
      {/* <div className="flex flex-row gap-x-3"> */}
      {plants.map((plant, index) => (
        <SwiperSlide key={index}>
          <Tilt options={defaultOptions}>
            <Card className="w-full hover:text-[#27ae60]" key={index}>
              <CardHeader>
                <CardTitle className="">{plant.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Image
                  src={plant.image}
                  width={400}
                  height={400}
                  alt={`Image of ${plant.name}`}
                />
              </CardContent>
              <CardDescription className="text-3xl font-serif text-black ml-6 mb-3">
                ${plant.price.toFixed(2)}
              </CardDescription>
              <CardFooter className="flex xl:flex-row flex-col justify-between w-full lg:text-3xl text-2xl font-serif gap-6">
                <button className="bg-[#F4F1EB] text-black px-5 py-2 xl:rounded-3xl rounded-full hover:bg-gray-200">
                  Add to Cart
                </button>
                <button className="bg-[#F4F1EB] text-black px-5 py-2 xl:rounded-3xl rounded-full hover:bg-gray-200">
                  Buy Now
                </button>
              </CardFooter>
            </Card>
          </Tilt>
        </SwiperSlide>
      ))}
      {/* </div> */}
    </Swiper>
  )
}

export default PlantProductCard
