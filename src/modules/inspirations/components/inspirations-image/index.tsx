"use client"

import { Container, Badge, Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"
import type { InspirationSpot } from "../inspirations-slider"
import { getStrapiImgUri } from "@lib/util/strapi-img-uri"
import { QuestionMarkCircle } from "@medusajs/icons"
import { useState } from "react"
import { cn } from "@lib/util/cn"

type Props = {
  spots: InspirationSpot[]
  image: string
  alt: string
}

function InspirationsImage({ spots, image, alt }: Props) {
  const [activeSpot, setActiveSpot] = useState(-1)

  const handleSpotClick = (spot: number) => {
    if (spot === activeSpot) {
      setActiveSpot(-1)
      return
    }

    setActiveSpot(spot)
  }

  return (
    <div className="w-full h-auto relative">
      <Image
        src={getStrapiImgUri(image)}
        alt={alt}
        width={900}
        height={600}
        className="w-full h-auto"
      />
      {spots.map((spot, index) => (
        <div
          className="absolute"
          style={{ left: spot.left + "%", top: spot.top + "%" }}
          key={index}
        >
          <Badge
            onClick={() => handleSpotClick(index)}
            className={cn(
              "rounded-full w-10 h-10 cursor-pointer transition-all hover:scale-105 hover:-translate-y-0.5"
            )}
            color={"blue"}
            key={index}
          >
            <QuestionMarkCircle />
          </Badge>
          <Container
            className={cn(
              "scale-0 p-4 transition-all opacity-0 z-20 relative",
              {
                "translate-y-2 opacity-100 scale-100": activeSpot === index,
              }
            )}
          >
            <p className="text-sm">{spot.title}</p>
            <p
              className="text-sm font-light mb-2"
              dangerouslySetInnerHTML={{ __html: spot.description }}
            ></p>
            <LocalizedClientLink href={spot.url}>
              <Button>Learn more</Button>
            </LocalizedClientLink>
          </Container>
        </div>
      ))}
    </div>
  )
}

export default InspirationsImage
