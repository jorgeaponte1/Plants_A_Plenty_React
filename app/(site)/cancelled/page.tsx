"use client"

import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"
import { useEffect } from "react"

const Cancelled = () => {
  const router = useRouter()

  useEffect(() => {
    router.push("/")
    toast.error("Order cancelled. Something went wrong.", {
      id: "cancelled-toast",
    })
  }, [router])

  return null // You should return something from your component. In this case, returning null as we don't want to render anything.
}

export default Cancelled
