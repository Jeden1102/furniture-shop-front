"use client"
import {
  addToWishlist,
  isInWishlist,
  removeFromWishlist,
} from "@lib/util/wishlist"
import { Heart } from "@medusajs/icons"
import { useState, useEffect } from "react"

function WishList({ variant }: { variant: string | undefined }) {
  if (!variant) return
  const [inWishlist, setInWishlist] = useState(false)

  const handleClick = () => {
    if (!variant) return
    if (inWishlist) {
      removeFromWishlist(variant)
      setInWishlist(false)
      return
    }
    addToWishlist(variant)
    setInWishlist(true)
  }

  useEffect(() => {
    setInWishlist(isInWishlist(variant))
  }, [])

  return (
    <button onClick={handleClick}>
      <Heart
        fill={inWishlist ? "red" : "transparent"}
        color={inWishlist ? "red" : "black"}
      />
    </button>
  )
}

export default WishList
