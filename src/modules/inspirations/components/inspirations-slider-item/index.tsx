import { getStrapiImgUri } from "@lib/util/strapi-img-uri"
import { Container, Badge, Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

type Props = {
  img: string
  alt: string
  title: string
  subtitle: string
  documentId: string
  className?: string
  index: number
}

function InspirationsSliderItem({
  img,
  title,
  subtitle,
  alt,
  documentId,
  index,
  className,
}: Props) {
  return (
    <div
      className={`p-0 flex flex-col gap-4 shadow-md relative w-[320px] h-full ${className}`}
    >
      <Image
        src={getStrapiImgUri(img)}
        width={320}
        height={400}
        alt={alt}
        className="h-72 object-cover pointer-events-none w-full"
      />
      <div className="absolute px-8 py-6 shadow-lg  bg-white/40 left-4 bottom-4 backdrop-blur-lg">
        <p className="font-light">
          0{index + 1} --- {title}
        </p>
        <p className="text-lg my-2">{subtitle}</p>
        <LocalizedClientLink href={`/inspirations/${documentId}`}>
          <Button>Learn more</Button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default InspirationsSliderItem
