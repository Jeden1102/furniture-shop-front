"use client"
import { addToWishlist } from "app/actions"
import { Heart } from "@medusajs/icons"

function WishList({ variant }: { variant: string | undefined }) {
  const handleClick = async () => {
    if (!variant) return
    const res = await addToWishlist(variant)
    console.log("TERAZ", res, variant)
  }

  return (
    <button onClick={handleClick}>
      <Heart />
    </button>
  )
}

export default WishList
