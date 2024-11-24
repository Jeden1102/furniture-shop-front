"use client"

import { useWishlistStore } from "@lib/store/wishlist"
import { useEffect, useState } from "react"
import { getProductsByIds } from "app/actions"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { Region } from "@medusajs/medusa"
import { Container, Text } from "@medusajs/ui"
import WishList from "@modules/products/components/product-preview/wishlist"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

function WishlistPage({ region }: { region: Region }) {
  const wishlist = useWishlistStore((state: any) => state.wishlist)
  const [products, setProducts] = useState<PricedProduct[]>([])

  useEffect(() => {
    if (wishlist.length === 0) return
    const fetchData = async () => {
      try {
        const products = await getProductsByIds({
          wishlist,
          regionId: region.id,
        })
        if (!products) return
        setProducts(products)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [wishlist])

  return (
    <div>
      {wishlist.length === 0 ? (
        <p>Your wishlist is Empty</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-4">
          {products.map((p) => (
            <Container
              key={p.handle}
              className="relative flex items-center justify-between"
            >
              <LocalizedClientLink
                href={`/products/${p.handle}`}
                className="group"
              >
                <div data-testid="product-wrapper">
                  <Text
                    className="text-lg font-normal"
                    data-testid="product-title"
                  >
                    {p.title}
                  </Text>
                </div>
              </LocalizedClientLink>
              <WishList variant={p.id} />
            </Container>
          ))}
        </div>
      )}
    </div>
  )
}

export default WishlistPage
