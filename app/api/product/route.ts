import prisma from "../../../lib/prismadb"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  // This endpoint will return all products
  const products = await prisma.product.findMany()
  if (!products) {
    return new NextResponse("No products found", { status: 404 })
  }
  return NextResponse.json(products, { status: 200 })
}

// export async function POST(req: Request) {
//   const body = await req.json()
//   const products = await prisma.product.create({
//     data: {
//       name: body.name,
//       image: body.image,
//       description: body.description,
//       price: body.price,
//     },
//   })

//   if (!products) {
//     return new NextResponse("Plant was not created", { status: 500 })
//   }

//   return NextResponse.json(products, { status: 200 })
// }
