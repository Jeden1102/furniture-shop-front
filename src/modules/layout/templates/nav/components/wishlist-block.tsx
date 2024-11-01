"use client"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Heart } from "@medusajs/icons"
import { useWishlistStore } from "@lib/store/wishlist"

function WishlistBlock() {
  const wishlist = useWishlistStore((state: any) => state.wishlist)

  return (
    <LocalizedClientLink
      className="hover:text-ui-fg-base relative"
      href="/wishlist"
      data-testid="nav-account-link"
    >
      <Heart />
      <span className="flex items-center justify-center -right-2 -bottom-2 absolute bg-red w-4 h-4 rounded-full text-white">
        {wishlist.length}
      </span>
    </LocalizedClientLink>
  )
}

export default WishlistBlock
