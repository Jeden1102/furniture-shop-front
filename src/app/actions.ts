"use server"

import { revalidateTag } from "next/cache"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

import { getRegion, updateCart, getCustomer, getProductsById } from "@lib/data"

import { Customer } from "@medusajs/medusa"

/**
 * Updates the countrycode param and revalidates the regions cache
 * @param regionId
 * @param countryCode
 */
export async function updateRegion(countryCode: string, currentPath: string) {
  const cartId = cookies().get("_medusa_cart_id")?.value
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  try {
    if (cartId) {
      await updateCart(cartId, { region_id: region.id })
      revalidateTag("cart")
    }

    revalidateTag("regions")
    revalidateTag("products")
  } catch (e) {
    return "Error updating region"
  }

  redirect(`/${countryCode}${currentPath}`)
}

export async function resetOnboardingState(orderId: string) {
  cookies().set("_medusa_onboarding", "false", { maxAge: -1 })
  redirect(`http://localhost:7001/a/orders/${orderId}`)
}

export async function getProductsByIds({
  wishlist,
  regionId,
}: {
  wishlist: string[]
  regionId: string
}) {
  const products = getProductsById({ ids: wishlist, regionId })
  return products
}
