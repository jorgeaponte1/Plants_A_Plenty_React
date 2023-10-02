import React from "react"

function HeroVideo() {
  return (
    <section
      id="hero"
      className="relative flex justify-center items-center w-full h-screen overflow-hidden"
    >
      <video
        className="absolute z-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src="/hero.webm" type="video/webm" />
      </video>
      <div className="absolute z-10 bg-[rgba(245,222,179,0.579)] rounded-[50%] flex items-center justify-center text-4xl text-white p-16">
        <h2 className="font-sansita_swashed font-bold">
          Bringing the outdoors in, one plant at a time.
        </h2>
      </div>
    </section>
  )
}

export default HeroVideo
