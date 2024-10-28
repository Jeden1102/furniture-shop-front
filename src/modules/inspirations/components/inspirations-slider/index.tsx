"use client"

import Flicking, { ViewportSlot } from "@egjs/react-flicking"
import "@egjs/react-flicking/dist/flicking.css"
import "@egjs/flicking-plugins/dist/arrow.css"
import { Arrow, Pagination } from "@egjs/flicking-plugins"
import "@egjs/flicking-plugins/dist/pagination.css"
import { getStrapiImgUri } from "@lib/util/strapi-img-uri"
import InspirationsSliderItem from "../inspirations-slider-item"

export type InspirationSpot = {
  url: string
  title: string
  description: string
  top: number
  left: number
}

export type Inspiration = {
  title: string
  subtitle: string
  documentId: string
  image: {
    url: string
    alternativeText: string
  }
  spot: InspirationSpot[]
}

function InspirationsSlider({ slides }: { slides: Inspiration[] }) {
  const plugins = [new Arrow()]

  return (
    <div className="w-full flicking-inspirations flex items-end justify-end lg:w-[50vw] lg:absolute right-0 top-1/2 lg:-translate-y-1/2">
      <Flicking align={"prev"} plugins={plugins} circular={true}>
        <ViewportSlot>
          <span className="flicking-arrow-prev hidden"></span>
          <span className=" flicking-arrow-next  bg-white rounded-full !scale-75 before:!h-[4px] after:!h-[4px] shadow-lg"></span>
        </ViewportSlot>

        {slides &&
          slides.map((slide, index) => (
            <div key={index} className="panel mr-4">
              <InspirationsSliderItem
                img={getStrapiImgUri(slide.image.url)}
                alt={slide.image.alternativeText}
                title={slide.title}
                subtitle={slide.subtitle}
                documentId={slide.documentId}
                index={index}
              />
            </div>
          ))}
      </Flicking>
    </div>
  )
}

export default InspirationsSlider
