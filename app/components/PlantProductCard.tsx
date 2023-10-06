"use client"

import React, { useRef, useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  //CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Tilt } from "react-tilt"

import "swiper/css"
import "swiper/css/pagination"

import { Pagination } from "swiper/modules"

import plantImages from "@/lib/plantImages"

export type Plant = {
  id: string
  name: string
  price: number
  image: string
  description: string
}

type PlantProductCardProps = {
  plants: Plant[] // Accept plants as a prop
  onPlantClick: (plant: Plant) => void
}

function PlantProductCard({ plants, onPlantClick }: PlantProductCardProps) {
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

  const localImagesMap: { [key: string]: string } = plantImages.reduce<{
    [key: string]: string
  }>((acc, curr) => {
    acc[curr.name] = curr.image
    return acc
  }, {})

  // Update plants with local images
  const updatedPlants = plants.map(plant => ({
    ...plant,
    image: localImagesMap[plant.name] || plant.image, // Fallback to server image if local not found
  }))

  return (
    <Swiper
      slidesPerView={1} // default to 1 slide per view for very small screens
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      grabCursor={true}
      modules={[Pagination]}
      className="mySwiper sm:mb-10 mb-5"
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
      {updatedPlants.map(
        (
          plant,
          index // changed the mapping callback arguments
        ) => (
          <SwiperSlide
            key={index} // Use the index as a key here
            onClick={() => onPlantClick(plant)} // Use 'plant' instead of 'plants' in the callback
            className="mb-10 hover:opacity-1 relative"
          >
            {/* Overlay: Positioned on top of the card */}
            <div className="absolute inset-0 bg-gray-400 opacity-0 hover:opacity-90 flex justify-center items-center transition-opacity">
              <span className="text-[wheat] text-2xl font-bold font-serif">
                Click for more info
              </span>
            </div>
            <Tilt options={defaultOptions}>
              <Card className="w-full hover:text-[#27ae60]" key={index}>
                <CardHeader>
                  <CardTitle className="">{plant.name}</CardTitle>{" "}
                  {/* Use 'plant' */}
                </CardHeader>
                <CardContent className="flex justify-center">
                  <Image
                    src={plant.image} // Use 'plant'
                    width={400}
                    height={400}
                    alt={`Image of ${plant.name}`} // Use 'plant'
                  />
                </CardContent>
                <CardDescription className="text-3xl font-serif text-center text-black ml-6 mb-3">
                  ${plant.price.toFixed(2)} {/* Use 'plant' */}
                </CardDescription>
                {/* ... (rest of your card) */}
              </Card>
            </Tilt>
          </SwiperSlide>
        )
      )}

      {/* </div> */}
    </Swiper>
  )
}

export default PlantProductCard
