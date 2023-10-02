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

export type Plant = {
  name: string
  price: number
  image: string
  description: string
}

type PlantProductCardProps = {
  onPlantClick: (plant: Plant) => void
}

let plants: Plant[] = [
  {
    name: "Pothos",
    price: 35,
    image: "/pothos.jpg",
    description:
      "The Pothos, also known as Devil's Ivy, is a popular and easy-to-grow houseplant that adds a touch of greenery to any space. Its heart-shaped leaves come in various shades of green, and some varieties feature marbled white or yellow patterns. Pothos plants are known for their fast-growing, trailing vines, making them perfect for hanging baskets, shelves, or as an eye-catching centerpiece.",
  },
  {
    name: "Birds of Paradise",
    price: 125,
    image: "/birds-of-paradise.jpg",
    description:
      "The Birds of Paradise, also known as Strelitzia reginae, is a stunning and exotic houseplant known for its striking, crane-like flowers and large, paddle-shaped leaves. With its vibrant orange and blue blooms resembling the plumage of a tropical bird, this plant brings a touch of the tropics to any indoor space.",
  },
  {
    name: "Snake Plant",
    price: 25,
    image: "/snake-plant.jpg",
    description:
      "Snake Plant, also known as Sansevieria or Mother-in-Law's Tongue, is a popular and low-maintenance houseplant that boasts striking, sword-like leaves with beautiful patterns. Its architectural shape and vibrant green foliage add a touch of modern elegance to any space, making it a favorite among interior designers and plant enthusiasts alike.",
  },
  {
    name: "Fiddle Fig",
    price: 70,
    image: "/fiddle-fig.jpg",
    description:
      "The Fiddle Fig, also known as Fiddle Leaf Fig or Ficus Lyrata, is a stunning and highly sought-after houseplant, loved for its large, violin-shaped leaves that add a touch of lush greenery to any space. With its impressive size and bold foliage, the Fiddle Fig has become a statement piece in modern interiors, making it a must-have for plant enthusiasts and design-conscious individuals alike.",
  },
  {
    name: "String of Pearls",
    price: 25,
    image: "/string-of-pearls.jpg",
    description:
      "The String of Pearls, also known as Senecio rowleyanus, is a delightful and unique succulent that adds a touch of whimsy and elegance to any indoor space. This eye-catching plant is characterized by its slender, trailing stems adorned with small, round leaves resembling a string of charming green pearls.",
  },
  {
    name: "Ponytail Palm",
    price: 65,
    image: "/ponytail-palm.jpg",
    description:
      "The Ponytail Palm, scientifically known as Beaucarnea recurvata, is an eye-catching and low-maintenance plant that brings an exotic touch to any indoor space. With its distinctive swollen base, slender trunk, and long, cascading leaves resembling a ponytail, this plant is both intriguing and stylish.",
  },
  {
    name: "Aloe Vera",
    price: 10,
    image: "/aloe-vera.jpg",
    description:
      "Aloe Vera, known scientifically as Aloe barbadensis miller, is a perennial succulent plant valued not only for its attractive appearance but also for its numerous health benefits. With a rich history spanning thousands of years, Aloe Vera has long been revered for its soothing, healing, and medicinal properties.",
  },
  {
    name: "ZZ Plant",
    price: 45,
    image: "/zz-plant.jpg",
    description:
      "The ZZ Plant, scientifically known as Zamioculcas zamiifolia, is a popular houseplant renowned for its stunning, glossy foliage and remarkable resilience. With its lush, green leaves and low-maintenance care requirements, the ZZ Plant is an ideal choice for both seasoned plant enthusiasts and beginners alike.",
  },
  {
    name: "Cactus",
    price: 30,
    image: "/cactus.jpg",
    description:
      "The Cactus, a symbol of resilience and adaptation, has long been a favorite choice for indoor gardeners. With their unique shapes, textures, and sizes, cacti bring a touch of the desert's beauty into your home while requiring minimal care. These striking plants are not only fascinating to look at but are also known for their ability to thrive in a variety of environments.",
  },
]

function PlantProductCard({ onPlantClick }: PlantProductCardProps) {
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
      {plants.map((plant, index) => (
        <SwiperSlide
          key={index}
          onClick={() => onPlantClick(plant)}
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
              <CardDescription className="text-3xl font-serif text-center text-black ml-6 mb-3">
                ${plant.price.toFixed(2)}
              </CardDescription>
              {/*               <CardFooter className="flex xl:flex-row flex-col justify-between w-full lg:text-3xl text-2xl font-serif gap-6">
                <button className="bg-[#F4F1EB] text-black px-5 py-2 xl:rounded-3xl rounded-full hover:bg-gray-200">
                  Add to Cart
                </button>
                <button className="bg-[#F4F1EB] text-black px-5 py-2 xl:rounded-3xl rounded-full hover:bg-gray-200">
                  Buy Now
                </button>
              </CardFooter> */}
            </Card>
          </Tilt>
        </SwiperSlide>
      ))}
      {/* </div> */}
    </Swiper>
  )
}

export default PlantProductCard
