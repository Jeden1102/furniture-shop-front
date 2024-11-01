import { useWishlistStore } from "@lib/store/wishlist"

const LOCAL_STORAGE_KEY = "furniro_wishlist"

export const getWishlist = () => {
  const wishlist = localStorage.getItem(LOCAL_STORAGE_KEY)
  return wishlist ? JSON.parse(wishlist) : []
}

export const isInWishlist = (variant: string) => {
  const wishlist = getWishlist()
  return wishlist.includes(variant)
}

export const addToWishlist = (variant: string) => {
  const wishlist = getWishlist()
  wishlist.push(variant)
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(wishlist))

  useWishlistStore.setState({ wishlist })
  return wishlist
}

export const removeFromWishlist = (variant: string) => {
  let wishlist = getWishlist()
  wishlist = wishlist.filter((item: any) => item !== variant)
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(wishlist))

  useWishlistStore.setState({ wishlist })
  return wishlist
}
