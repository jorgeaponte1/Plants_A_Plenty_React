"use client"

import React, { useEffect, useState } from "react"
import ProductModal from "./ProductModal"
import PlantProductCard from "./PlantProductCard"
import type { Plant } from "./PlantProductCard"

function ProductSlider() {
  const [plants, setPlants] = useState<Plant[]>([]) // Initialize plants with empty array
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/product")
        const data: Plant[] = await res.json() // Expect the response to match the Plant type

        // console.log(data)
        setPlants(data)
      } catch (error) {
        console.error("Failed to fetch products:", error)
      }
    }

    fetchProducts()
  }, [])

  const openModalWithPlant = (plant: Plant) => {
    setSelectedPlant(plant)
  }

  return (
    <section
      id="trending"
      className="w-full min-h-[auto] flex flex-col gap-y-8 lg:gap-x-16 justify-center items-center"
    >
      <div className="w-full bg-[rgba(7,96,78,1)] mx-auto mt-12 mb-10 rounded-[5px] border-[5px] border-solid border-[wheat] px-5">
        <h2 className="font-sansita_swashed font-bold text-center text-5xl sm:text-6xl text-[wheat] my-12">
          Trending Plants
        </h2>
        <PlantProductCard plants={plants} onPlantClick={openModalWithPlant} />
        <ProductModal
          plant={selectedPlant}
          onClose={() => setSelectedPlant(null)}
        />
      </div>
    </section>
  )
}

export default ProductSlider
