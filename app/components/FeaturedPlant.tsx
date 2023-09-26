import React from "react"
import { Sansita_Swashed } from "next/font/google"
import Image from "next/image"

const sansita_swashed = Sansita_Swashed({
  subsets: ["latin"],
  variable: "--font-sansita_swashed",
  weight: ["400", "700", "800", "900"],
})

function FeaturedPlant() {
  return (
    <section
      id="featured"
      className="flex flex-col lg:flex-row items-center justify-center mx-auto w-full lg:w-4/5 py-10"
    >
      <div className="lg:w-1/2 p-5">
        <p
          className={`text-[60px] ${sansita_swashed.variable} font-sansita_swashed font-medium} mb-12 lg:text-left text-center`}
        >
          Plant of the Month
        </p>
        <p className=" font-light">
          There are many advantages to owning a cactus plant. For starters, they
          are incredibly easy to care for, making them a great option for those
          who may not have a lot of time or experience with gardening. Cacti
          also come in a wide variety of shapes and sizes, making them a fun and
          unique addition to any home decor. Additionally, cacti are known for
          their air-purifying qualities, meaning they can help to improve the
          overall air quality in your home. Finally, cacti are incredibly
          resilient and can survive in a variety of different conditions, making
          them a great option for those who may not live in an ideal climate for
          plant growth.
        </p>
      </div>
      <div className="lg:w-1/2 p-5">
        <div className="rounded-full basis-6/12 bg-[#f5deb3] flex justify-center items-center sm:w-[500px] sm:h-[500px] w-full h-full">
          <Image
            src="/featured.jpg"
            alt="cactus"
            width={400}
            height={400}
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  )
}

export default FeaturedPlant
