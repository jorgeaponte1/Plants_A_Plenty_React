"use client"

import {
  Sheet,
  SheetClose,
  SheetContent,
  //SheetDescription,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet"
import { BsCart2 } from "react-icons/bs"
import React, { useEffect, useState } from "react"
import QuantityButtons from "./QuantityButtons"
import { CartItem } from "@/lib/types"
import plantImages from "@/lib/plantImages"

import Image from "next/image"

const localImagesMap: { [key: string]: string } = plantImages.reduce<{
  [key: string]: string
}>((acc, curr) => {
  acc[curr.name] = curr.image
  return acc
}, {})

function SideCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/cart")
        const data = await res.json()
        const updatedCartItems = data.map((item: CartItem) => ({
          ...item,
          product: {
            ...item.product,
            image: localImagesMap[item.product.name] || item.product.image, // Fallback to server image if local not found
          },
        }))
        setCartItems(updatedCartItems)
      } catch (error) {
        console.error("Failed to fetch products:", error)
      }
    }

    fetchProducts()
  }, [])

  const cartSubtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  )

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="relative ml-3 mr-7">
          <button className="text-center bg-transparent border-none cursor-pointer">
            <BsCart2 className="text-[rgb(240,215,176)] h-6 w-6" />
          </button>
          <div className="absolute flex justify-center items-center w-7 h-7 text-black bg-[rgb(240,215,176)] rounded-full -top-5 -right-4 font-sans">
            {cartItems.length}
          </div>
        </div>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>
            <div className="text-2xl text-left">Shopping Cart</div>
          </SheetTitle>
          {cartItems.map(item => (
            <div
              key={item.product.id}
              className="flex flex-row justify-between items-center pb-5"
            >
              <Image
                src={item.product.image}
                width={100}
                height={100}
                alt={item.product.name}
              />
              <div className="flex items-end flex-col">
                <div className="text-2xl font-semibold">
                  {item.product.name}
                </div>
                <div>Price</div>
                <div className="font-bold pb-6">
                  ${item.product.price.toFixed(2)}
                </div>
                <div className="pb-1">Quantity</div>
                <div className="flex flex-row text-center items-center justify-evenly border-2 rounded border-gray-200 w-28 h-8">
                  <QuantityButtons
                    id={item.product.id}
                    quantity={item.quantity}
                  />
                </div>
              </div>
            </div>
          ))}
        </SheetHeader>
        <SheetFooter>
          <div className="flex flex-col justify-center items-center w-full gap-y-4">
            <div className="flex flex-row items-center justify-between font-serif font-bold text-xl">
              <div>Cart Subtotal:</div>
              <div>${cartSubtotal.toFixed(2)}</div>
            </div>
            <SheetClose asChild>
              <button className="bg-[#222] w-full box-border text-white cursor-pointer inline-block text-[25px] font-bold leading-normal max-w-none min-h-[60px] min-w-[10px] overflow-hidden relative text-center normal-case select-none touch-manipulation m-0 pt-[9px] pb-2 px-5 border-none hover:opacity-75 focus:opacity-30">
                Checkout
              </button>
            </SheetClose>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default SideCart
