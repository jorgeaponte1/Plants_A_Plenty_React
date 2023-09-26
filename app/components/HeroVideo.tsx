import React from "react"
import { Sansita_Swashed } from "next/font/google"

const sansita_swashed = Sansita_Swashed({
  subsets: ["latin"],
  variable: "--font-sansita_swashed",
  weight: ["400", "700", "800", "900"],
})

function HeroVideo() {
  return (
    <section className="relative flex justify-center items-center w-full h-screen overflow-hidden">
      <video
        className="absolute z-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute z-10 bg-[rgba(245,222,179,0.579)] rounded-full flex items-center justify-center text-4xl text-white p-16">
        <h2 className={`${sansita_swashed.variable} font-sansita_swashed`}>
          "Bringing the outdoors in, one plant at a time."
        </h2>
      </div>
    </section>
  )
}

export default HeroVideo
