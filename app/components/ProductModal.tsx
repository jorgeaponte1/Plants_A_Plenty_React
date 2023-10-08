"use client"

import React, { useEffect } from "react"
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal"
import Image from "next/image"
import type { Plant } from "./PlantProductCard"
import { AiOutlineClose } from "react-icons/ai"

type ProductModalProps = {
  plant: Plant | null
  onClose: () => void
}

function ProductModal({ plant, onClose }: ProductModalProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  useEffect(() => {
    if (plant) {
      onOpen()
    }
  }, [plant, onOpen])

  if (!plant) return null // if no plant is selected, don't render anything

  const addToCart = async (id: string) => {
    const res = await fetch(`/api/cart/${id}`, {
      method: "POST",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (!res.ok) {
      return { success: false }
    }

    return { success: true }
    // console.log(data)
  }

  const buyOutOrder = async (id: string) => {
    try {
      // add the item to the cart
      const addToCartRes = await addToCart(id)
      if (!addToCartRes.success) {
        throw new Error("Failed to add the item to the cart.")
      }

      // small delay before fetching the updated cart
      await new Promise(resolve => setTimeout(resolve, 1000))

      // fetch the cart
      const res = await fetch("/api/cart")
      const cart = await res.json()

      // create a checkout session
      const response = await fetch("/api/checkout-sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cart),
      })

      if (!response.ok) {
        throw new Error("Server responded with a non-OK status")
      }

      const data = await response.json()
      const { url } = data

      window.location.assign(url)
    } catch (error) {
      console.error("Failed to process order:", error)
      // Here, you can also notify the user about the error.
      // For example, using a toast notification or an alert.
    }
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={() => {
          onOpenChange()
          onClose() // Close the modal and set selectedPlant to null
        }}
        scrollBehavior="inside"
        // isDismissable={false}
        closeButton={
          <button>
            <AiOutlineClose className="w-8 h-8 hover:animate-spin" />
          </button>
        }
        placement="center"
      >
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h3 className="font-serif sm:text-4xl text-2xl">
                  {plant.name}
                </h3>
              </ModalHeader>
              <ModalBody className="flex flex-col items-center justify-center text-center overflow-y-auto">
                <Image
                  src={plant.image}
                  width={300}
                  height={450}
                  alt={`Image of ${plant.name}`}
                />
                <p className="sm:text-2xl text-lg">{plant.description}</p>
              </ModalBody>
              <ModalFooter className="flex flex-row justify-between">
                <button
                  onClick={() => {
                    addToCart(plant.id)
                    onClose()
                  }}
                  className="bg-[#F4F1EB] text-black px-5 py-2 xl:rounded-3xl rounded-full hover:bg-gray-200 text-lg"
                >
                  Add To Cart
                </button>
                <button
                  onClick={() => {
                    buyOutOrder(plant.id)
                    onClose()
                  }}
                  className="bg-[#F4F1EB] text-black px-5 py-2 xl:rounded-3xl rounded-full hover:bg-gray-200 text-lg"
                >
                  Buy Now
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ProductModal
