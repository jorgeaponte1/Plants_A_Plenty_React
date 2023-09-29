import React from "react"
import { Sansita_Swashed } from "next/font/google"

const sansita_swashed = Sansita_Swashed({
  subsets: ["latin"],
  variable: "--font-sansita_swashed",
  weight: ["700"],
})

function PlantCare() {
  return (
    <section
      id="care"
      className="lg:w-4/5 min-h-[auto] flex 2xl:flex-row flex-col gap-y-8 lg:gap-x-16 justify-center mx-auto items-center lg:px-5 px-10"
    >
      <video
        className="max-1/2 sm:object-cover rounded-[20px] border-8 border-solid border-[wheat]"
        autoPlay
        muted
        loop
      >
        <source src="/plantCare.webm" type="video/webm" />
      </video>
      <div className="min-h-0 flex flex-col items-center justify-center gap-16">
        <h2
          className={`${sansita_swashed.variable} font-sansita_swashed text-center text-6xl`}
        >
          Plant Care
        </h2>
        <ul className="my-0 text-3xl flex flex-col gap-5 list-disc">
          <li>
            Water your plant regularly, but avoid overwatering. Make sure the
            soil is moist but not waterlogged.
          </li>
          <li>
            Ensure that your plant is receiving the right amount of sunlight.
            Some plants need direct sunlight, while others prefer indirect
            light.
          </li>
          <li>
            Check your plant for pests and diseases regularly. If you notice any
            issues, take action immediately to prevent the problem from
            spreading.
          </li>
          <li>
            Prune your plant regularly to keep it healthy and promote new
            growth. Remove any dead or damaged leaves or stems.
          </li>
        </ul>
      </div>
    </section>
  )
}

export default PlantCare
