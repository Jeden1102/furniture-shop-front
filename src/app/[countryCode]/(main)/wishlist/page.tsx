import { Metadata } from "next"

import { Heading } from "@medusajs/ui"
import WishlistPage from "@modules/wishlist/templates"
import { getProductsById, getRegion } from "@lib/data"

export const metadata: Metadata = {
  title: "Wishlist",
  description: "Your wishlist",
}

type Params = {
  params: {
    countryCode: string
  }
}

export default async function StorePage({ params }: Params) {
  const region = await getRegion(params.countryCode)
  if (!region) return
  return (
    <div
      className="flex flex-col gap-8 py-6 content-container"
      data-testid="category-container"
    >
      <Heading level={"h1"}>Wishlist</Heading>
      <WishlistPage region={region} />
    </div>
  )
}
