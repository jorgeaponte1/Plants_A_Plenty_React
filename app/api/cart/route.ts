import prisma from "../../../lib/prismadb"
import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route"

export async function GET(req: Request) {
  // this endpoint will check to see if a user is logged in and return their cart
  const session = await getServerSession(authOptions)

  if (!session) {
    return new NextResponse("Not authorized", { status: 401 })
  }

  // Verify user in the DB. Do not create them if they don't exist
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  })

  if (!user) {
    return new NextResponse("No user found", { status: 404 })
  }

  // Get the user's cart
  const cart = await prisma.user.findUnique({
    where: { id: user.id },
    include: { cart: { include: { product: true } } }, // includes CartItem and its related Product
  })

  if (!cart || !cart.cart) {
    return new NextResponse("No cart found", { status: 404 })
  }

  return NextResponse.json(cart.cart, { status: 200 })
}

export async function DELETE(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return new NextResponse("Not authorized", { status: 401 })
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { cart: true },
  })

  if (!user) {
    return new NextResponse("No user found", { status: 404 })
  }

  // Need to clear the user's cart
  await prisma.user.update({
    where: { id: user.id },
    data: { cart: { set: [] } },
  })

  return new NextResponse("Cart cleared", { status: 200 })
}
