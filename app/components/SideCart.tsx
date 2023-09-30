"use client"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet"
import { BsCart2, BsPlusLg, BsDashLg } from "react-icons/bs"
import React, { useState } from "react"
import Image from "next/image"

function SideCart() {
  const [items, setItems] = useState(5)
  const [price, setPrice] = useState(100)
  const [plantName, setPlantName] = useState("Pothos Plant")

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="relative ml-3 mr-7">
          <button className="text-center bg-transparent border-none cursor-pointer">
            <BsCart2 className="text-[rgb(240,215,176)] h-6 w-6" />
          </button>
          <div className="absolute flex justify-center items-center w-7 h-7 text-black bg-[rgb(240,215,176)] rounded-full -top-5 -right-4 font-sans">
            {items}
          </div>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <div className="text-2xl text-left">Shopping Cart</div>
          </SheetTitle>
          <SheetDescription>
            <div>
              {/* Create a foreach loop for all the plants in the cart */}
              <div className="flex flex-row justify-center items-center gap-x-5">
                <Image
                  src="/pothos.jpg"
                  width={100}
                  height={100}
                  alt="pothos plant"
                />
                <div className="flex items-end flex-col">
                  <div className="text-2xl font-semibold">{plantName}</div>
                  <div>Price</div>
                  <div className="font-bold pb-6">${price.toFixed(2)}</div>
                  <div className="pb-1">Quantity</div>
                  <div className="flex flex-row text-center items-center justify-evenly border-2 rounded border-gray-200 w-28 h-8">
                    <div className="flex items-center justify-center">
                      <BsPlusLg />
                    </div>
                    <div className="w-12 border-x border-gray-200 h-full flex text-center justify-center items-center">
                      1
                    </div>
                    <div className="">
                      <BsDashLg />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            {/*                   <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value="Pedro Duarte"
                    className="col-span-3"
                  /> */}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            {/*                   <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    value="@peduarte"
                    className="col-span-3"
                  /> */}
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <div className="flex flex-row items-center justify-between">
              <div className="font-bold">Cart Subtotal:</div>
              <div className="font-bold">${price.toFixed(2)}</div>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default SideCart
