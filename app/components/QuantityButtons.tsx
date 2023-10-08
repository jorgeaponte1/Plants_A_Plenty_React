import React from "react"
import { BsPlusLg, BsDashLg } from "react-icons/bs"

export default function QuantityButtons({
  id,
  quantity,
}: {
  id: string
  quantity: number
}) {
  const incrementItem = async () => {
    const res = await fetch(`/api/cart/${id}/increment`, {
      method: "PATCH",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await res.json()
    // console.log(data)
  }

  const decrementItem = async () => {
    const res = await fetch(`/api/cart/${id}/decrement`, {
      method: "PATCH",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await res.json()
    // console.log(data)
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <button onClick={incrementItem}>
          <BsPlusLg />
        </button>
      </div>
      <div className="w-12 border-x border-gray-200 h-full flex text-center justify-center items-center">
        {quantity}
      </div>
      <div className="flex items-center justify-center">
        <button onClick={decrementItem}>
          <BsDashLg />
        </button>
      </div>
    </>
  )
}
