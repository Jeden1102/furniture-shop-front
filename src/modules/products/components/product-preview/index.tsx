import { Badge, Container, Text } from "@medusajs/ui"

import { ProductPreviewType } from "types/global"

import { retrievePricedProductById } from "@lib/data"
import { getProductPrice } from "@lib/util/get-product-price"
import { Region } from "@medusajs/medusa"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import ProductTags from "./tags"

export default async function ProductPreview({
  productPreview,
  isFeatured,
  region,
}: {
  productPreview: ProductPreviewType
  isFeatured?: boolean
  region: Region
}) {
  const pricedProduct = await retrievePricedProductById({
    id: productPreview.id,
    regionId: region.id,
  }).then((product) => product)

  if (!pricedProduct) {
    return null
  }

  console.log(pricedProduct.images?.[0])

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
    region,
  })

  return (
    <Container className="relative">
      <LocalizedClientLink
        href={`/products/${productPreview.handle}`}
        className="group"
      >
        <div data-testid="product-wrapper">
          <Thumbnail
            className="group-hover:hidden"
            thumbnail={productPreview.thumbnail}
            size="full"
            isFeatured={isFeatured}
          />
          {pricedProduct.images?.[0] && (
            <Thumbnail
              className="hidden group-hover:block"
              thumbnail={pricedProduct.images[0].url}
              size="full"
              isFeatured={isFeatured}
            />
          )}

          <div className="flex flex-col txt-compact-medium mt-4 justify-between">
            <Text className="text-lg font-normal" data-testid="product-title">
              {productPreview.title}
            </Text>
            <Text
              className="text-sm font-light text-gray-600"
              data-testid="product-title"
            >
              {productPreview.category}
            </Text>
            <div className="flex items-center gap-x-2 mt-2">
              {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
            </div>
          </div>
        </div>
        <div className="absolute right-4 top-4 flex gap-2">
          {pricedProduct.tags && <ProductTags tags={pricedProduct.tags} />}
          {cheapestPrice?.price_type === "sale" && (
            <Badge color={"green"}>{cheapestPrice.percentage_diff}% OFF</Badge>
          )}
        </div>
      </LocalizedClientLink>
    </Container>
  )
}
