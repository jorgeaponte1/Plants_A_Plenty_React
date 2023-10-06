import { NextResponse } from "next/server"
import prisma from "../../../../lib/prismadb"

// Get a specific Plant Product based on params ID
export async function GET(req: Request, context: { params: { id: String } }) {
  const { id } = context.params

  const product = await prisma.product.findUnique({
    where: {
      id: String(id),
    },
  })

  if (!product) {
    return new NextResponse("No product found", { status: 404 })
  }

  return new Response(JSON.stringify(product), { status: 200 })
}

// Delete a specific Plant Product
/* export async function DELETE(
  req: Request,
  context: { params: { id: String } }
) {
  const { id } = context.params

  const deletedProduct = await prisma.product.delete({
    where: {
      id: String(id),
    },
  })

  if (!deletedProduct) {
    return new NextResponse(`Plant not found for id: ${id}`, {
      status: 404,
    })
  }

  return new Response(JSON.stringify(deletedProduct), { status: 200 })
} */

// Update a specific Plant Product
/* export async function PUT(req: Request, context: { params: { id: String } }) {
  const { id } = context.params
  const body = await req.json()

  const updatedProduct = await prisma.product.update({
    where: {
      id: String(id),
    },
    data: {
      name: body.name,
      image: body.image,
      description: body.description,
      price: body.price,
    },
  })

  if (!updatedProduct) {
    return new NextResponse(`Plant not found for id: ${id}`, {
      status: 404,
    })
  }

  return new Response(JSON.stringify(updatedProduct), { status: 200 })
} */
