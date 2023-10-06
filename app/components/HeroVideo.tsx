"use client"

import React from "react"
import { CldVideoPlayer } from "next-cloudinary"
import "next-cloudinary/dist/cld-video-player.css"

function HeroVideo() {
  // const videoPlayer = cld.videoPlayer()

  return (
    <section
      id="hero"
      className="relative flex justify-center items-center w-full 2xl:h-screen h-full overflow-hidden"
    >
      <CldVideoPlayer
        width="1620"
        height="1080"
        autoPlay="on-scroll"
        src="Plants%20A%20Plenty%20Assets/Videos/hero"
        loop={true}
        muted={true}
        className="absolute z-0 w-full h-full object-cover"
        // transformation={{
        //   width: 4096,
        //   height: 2160,
        //   crop: "fill",
        //   gravity: "center",
        // }}
        // preload="auto"
        // colors={{
        //   accent: "#ff0000",
        //   base: "#00ff00",
        //   text: "#0000ff",
        // }}
        controls={false}
        fontFace="Source Serif Pro"
      />
      {/* <video
        className="absolute z-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src="/hero.webm" type="video/webm" />
      </video> */}
      <div className="absolute z-1 bg-[rgba(245,222,179,0.579)] rounded-[50%] flex items-center justify-center text-lg sm:text-4xl text-white p-8 sm:p-16">
        <h2 className="font-sansita_swashed font-bold">
          Bringing the outdoors in, one plant at a time.
        </h2>
      </div>
    </section>
  )
}

export default HeroVideo
