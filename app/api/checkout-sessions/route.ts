import Stripe from "stripe"
import { NextRequest, NextResponse } from "next/server"
import { CartItem, Product } from "@prisma/client"

type ProductWithStripe = Product & { stripe_id: string }

type CartItemWithProduct = CartItem & { product: ProductWithStripe }

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2023-08-16",
  })

  const user_cart: CartItemWithProduct[] = await req.json()

  // map the user_cart to Stripe's line_items
  const line_items = user_cart.map(item => {
    //console.log(item.product.stripe_id)
    return {
      price: item.product.stripe_id,
      quantity: item.quantity,
    }
  })

  //console.log(line_items)

  try {
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      // success_url: "http://localhost:3000/success",
      // cancel_url: "http://localhost:3000/cancelled",
      success_url: "https://plants-a-plenty.vercel.app/success",
      cancel_url: "https://plants-a-plenty.vercel.app/cancelled",
    })

    console.log(session)

    if (!session.url) {
      return NextResponse.json("No session URL", { status: 500 })
    }

    console.log(session.url)

    //return NextResponse.redirect(session.url)
    return NextResponse.json(session, { status: 200 })
  } catch (err: any) {
    return new NextResponse(err.message, { status: 500 })
  }
}
