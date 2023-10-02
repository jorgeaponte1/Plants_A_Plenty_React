import React from "react"
import Image from "next/image"

function FeaturedPlant() {
  return (
    <section
      id="featured"
      className="flex flex-col lg:flex-row items-center justify-center"
    >
      <div className="lg:w-1/2">
        <p className="sm:text-[60px] text-6xl font-sansita_swashed font-normal mb-12 lg:text-left text-center">
          Plant of the Month
        </p>
        <p className="font-light">
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
        <Image
          src="/featured.jpg"
          alt="cactus"
          width={400}
          height={400}
          className="block sm:w-[400px] w-full h-auto mx-auto rounded-[50%] border-[30px] border-solid border-[wheat]"
        />
      </div>
    </section>
  )
}

export default FeaturedPlant
