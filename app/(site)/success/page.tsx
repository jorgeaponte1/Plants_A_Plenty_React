"use client"

import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"
import { useEffect } from "react"
import { useSession } from "next-auth/react"

const Success = () => {
  const router = useRouter()
  const session = useSession()

  useEffect(() => {
    async function handleOrderPlacement() {
      if (session.status === "authenticated") {
        await fetch("/api/cart", {
          method: "DELETE",
        })
      }

      // set timeout to allow the cart to be deleted before redirecting
      // await new Promise(resolve => setTimeout(resolve, 500))

      router.push("/")
      toast.success("Order placed successfully!", {
        id: "success-toast",
      })
    }

    handleOrderPlacement()
  }, [router, session])

  return null // You should return something from your component. In this case, returning null as we don't want to render anything.
}

export default Success
