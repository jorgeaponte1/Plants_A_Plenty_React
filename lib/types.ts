export type User = {
  id: string
  name?: string
  email?: string
  emailVerified?: Date
  image?: string
  hashedPassword: string
  createdAt: Date
  updatedAt: Date
  cart: CartItem[]
  accounts: Account[]
}

export type Account = {
  id: string
  userId: string
  type: string
  provider: string
  providerAccountId: string
  refresh_token?: string
  access_token?: string
  expires_at?: number
  token_type?: string
  scope?: string
  id_token?: string
  session_state?: string
  user: User
}

export type Product = {
  id: string
  name: string
  description: string
  price: number
  image: string
  createdAt: Date
  updatedAt: Date
  CartItem: CartItem[]
}

export type CartItem = {
  id: string
  product: Product
  productId: string
  quantity: number
  User?: User
  userId?: string
}

export type plantImage = {
  name: string
  image: string
}
