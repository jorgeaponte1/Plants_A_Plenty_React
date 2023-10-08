import prisma from "../../../../../lib/prismadb"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../../auth/[...nextauth]/route"
import { NextResponse } from "next/server"

export async function PATCH(req: Request, context: { params: { id: String } }) {
  // Get the user session
  const session = await getServerSession(authOptions)

  if (!session) {
    return new NextResponse("Not authorized", { status: 401 })
  }

  // Fetch the user using the email (based on the Next-Auth session)
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { cart: true },
  })

  if (!user) {
    return new NextResponse("User not found", { status: 404 })
  }

  const { id } = context.params

  // Fetch the product using the provided ID
  const product = await prisma.product.findUnique({
    where: { id: id as string },
  })

  if (!product) {
    return new NextResponse(`Product not found with id ${id}`, {
      status: 404,
    })
  }

  // Check the user's cart to see if the product exists and has a quantity greater than 1
  if (user.cart) {
    const cartItem = user.cart.find(item => item.productId === product.id)
    if (cartItem && cartItem.quantity > 1) {
      await prisma.cartItem.update({
        where: { id: cartItem.id },
        data: { quantity: cartItem.quantity - 1 },
      })
    } else if (cartItem && cartItem.quantity === 1) {
      await prisma.cartItem.delete({
        where: { id: cartItem.id },
      })
    }
  }

  // In a real-world scenario, you might also want to notify other parts of your application when the cart is updated.

  return new NextResponse("Item quantity updated", { status: 200 })
  // return res.status(200).json({ message: "Item quantity updated" })
}
