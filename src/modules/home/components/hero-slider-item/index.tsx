"use client"

import Image from "next/image"
import { ArrrowRight } from "@medusajs/icons"

type Props = {
  img: string
  title: string
  subtitle: string
  price: string
}

const HeroSliderItem = ({ img, title, subtitle, price }: Props) => {
  return (
    <div className="relative">
      <Image
        src={img}
        alt="Sofa image"
        width="933"
        height="533"
        className="pointer-events-none"
      />
      <div className="absolute px-8 py-6 min-w-108 shadow-lg  bg-white/40 right-8 bottom-8 backdrop-blur-lg">
        <p className="text-2xl font-medium">{title}</p>
        <p className="font-light">{subtitle}</p>
        <p className="font-medium flex items-center justify-between mt-3 text-lg">
          {price}$ <ArrrowRight />
        </p>
      </div>
    </div>
  )
}

export default HeroSliderItem
