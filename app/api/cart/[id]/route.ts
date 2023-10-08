import { getServerSession } from "next-auth/next"
import { authOptions } from "../../auth/[...nextauth]/route"
import { NextResponse } from "next/server"
import prisma from "@/lib/prismadb"

export async function DELETE(
  req: Request,
  context: { params: { id: String } }
) {
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

  const { id } = context.params

  const product = await prisma.product.findUnique({
    where: { id: id as string },
  })

  if (!product) {
    return new NextResponse(`Product not found with id ${id}`, {
      status: 404,
    })
  }

  const updatedCart = user.cart.filter(item => item.productId !== product.id)

  await prisma.user.update({
    where: { id: user.id },
    data: { cart: { set: updatedCart } },
  })

  return new NextResponse("Item removed from cart", { status: 200 })
  // return res.status(200).json({ message: "Item removed from cart", user })
}

export async function POST(req: Request, context: { params: { id: String } }) {
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

  const { id } = context.params

  const product = await prisma.product.findUnique({
    where: { id: id as string },
  })

  if (!product) {
    return new NextResponse(`Product not found with id ${id}`, {
      status: 404,
    })
  }

  const cartItem = user.cart.find(item => item.productId === product.id)

  if (cartItem) {
    // Update the cart item's quantity in the database
    await prisma.cartItem.update({
      where: { id: cartItem.id },
      data: { quantity: cartItem.quantity + 1 },
    })
  } else {
    // Add a new item to the user's cart in the database
    await prisma.cartItem.create({
      data: {
        userId: user.id,
        productId: product.id,
        quantity: 1,
      },
    })
  }
  return new NextResponse("Item added to cart", { status: 200 })
  //return res.status(200).json({ message: "Item added to cart", user })
}
