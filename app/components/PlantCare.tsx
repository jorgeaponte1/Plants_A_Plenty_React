import React from "react"

function PlantCare() {
  return (
    <section
      id="care"
      className="min-h-[auto] flex 2xl:flex-row flex-col gap-y-8 lg:gap-x-16 justify-center items-center"
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
        <h2 className="font-sansita_swashed font-bold text-center text-6xl">
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
