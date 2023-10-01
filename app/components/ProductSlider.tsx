"use client"

import React, { useState } from "react"
import ProductModal from "./ProductModal"
import PlantProductCard from "./PlantProductCard"
import type { Plant } from "./PlantProductCard"

function ProductSlider() {
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null)
  const openModalWithPlant = (plant: Plant) => {
    setSelectedPlant(plant)
  }

  return (
    <section
      id="trending"
      className="w-full min-h-[auto] flex flex-col gap-y-8 lg:gap-x-16 justify-center items-center"
    >
      <div className="w-full bg-[rgba(7,96,78,1)] mx-auto mt-12 mb-10 rounded-[5px] border-[5px] border-solid border-[wheat] px-5">
        <h2 className="font-sansita_swashed font-bold text-center text-6xl text-[wheat] my-12">
          Trending Plants
        </h2>
        <PlantProductCard onPlantClick={openModalWithPlant} />
        <ProductModal
          plant={selectedPlant}
          onClose={() => setSelectedPlant(null)}
        />
      </div>
    </section>
  )
}

export default ProductSlider
