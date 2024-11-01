import { getWishlist } from "@lib/util/wishlist"
import { create } from "zustand"
const LOCAL_STORAGE_KEY = "furniro_wishlist"

export const useWishlistStore = create((set) => ({
  wishlist: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? "[]"),
  setWishlist: (wishlist: any) => set(() => ({ wishlist: wishlist })),
}))
