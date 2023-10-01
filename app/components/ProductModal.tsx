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
  /* const [scrollBehavior, setScrollBehavior] = React.useState("inside") */

  useEffect(() => {
    if (plant) {
      onOpen()
    }
  }, [plant, onOpen])

  if (!plant) return null // if no plant is selected, don't render anything

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={() => {
          onOpenChange()
          onClose() // Close the modal and set selectedPlant to null
        }}
        scrollBehavior="inside"
        isDismissable={false}
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
              <ModalBody className="flex flex-col items-center justify-center text-center">
                <Image
                  src={plant.image}
                  width={300}
                  height={300}
                  alt={`Image of ${plant.name}`}
                />
                <p className="sm:text-2xl text-lg">{plant.description}</p>
              </ModalBody>
              <ModalFooter className="flex flex-row justify-between">
                <button
                  onClick={onClose}
                  className="bg-[#F4F1EB] text-black px-5 py-2 xl:rounded-3xl rounded-full hover:bg-gray-200 text-lg"
                >
                  Add to Cart
                </button>
                <button
                  onClick={onClose}
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
