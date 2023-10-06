import prisma from "../../../../lib/prismadb"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../auth/[...nextauth]/route"
import { NextResponse } from "next/server"

export async function PATCH(req: Request) {
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

  const body = await req.json()

  // Fetch the product using the provided ID
  const product = await prisma.product.findUnique({
    where: { id: body.id as string },
  })

  if (!product) {
    return new NextResponse(`Product not found with id ${body.id}`, {
      status: 404,
    })
  }

  // Check the user's cart to see if the product exists and has a quantity greater than 1
  if (user.cart) {
    const cartItem = user.cart.find(item => item.productId === product.id)
    if (cartItem && cartItem.quantity > 0) {
      await prisma.cartItem.update({
        where: { id: cartItem.id },
        data: { quantity: cartItem.quantity + 1 },
      })
    }
  }

  return new NextResponse("Item quantity updated", { status: 200 })
}
