"use client"

import Flicking, { ViewportSlot } from "@egjs/react-flicking"
import "@egjs/react-flicking/dist/flicking.css"
import "@egjs/flicking-plugins/dist/arrow.css"
import { Arrow, Pagination } from "@egjs/flicking-plugins"
import "@egjs/flicking-plugins/dist/pagination.css"
import { getStrapiImgUri } from "@lib/util/strapi-img-uri"
import BlogTeaser from "../blog-teaser"

export type Blog = {
  url: string
  title: string
  publishedAt: string
  documentId: string
  image: {
    url: string
    alternativeText: string
  }
}

function BlogCarousel({ slides }: { slides: Blog[] }) {
  const plugins = [new Arrow(), new Pagination({ type: "bullet" })]

  return (
    <div className="w-full flicking-p-20">
      <Flicking align={"prev"} plugins={plugins} circular={true}>
        <ViewportSlot>
          <span className="flicking-arrow-prev  bg-white rounded-full !scale-75 before:!h-[4px] after:!h-[4px] shadow-lg"></span>
          <span className=" flicking-arrow-next  bg-white rounded-full !scale-75 before:!h-[4px] after:!h-[4px] shadow-lg"></span>
          <div className=" flicking-pagination absolute !bottom-0"></div>
        </ViewportSlot>

        {slides &&
          slides.map((slide, index) => (
            <div key={index} className="panel mr-4">
              <BlogTeaser
                img={getStrapiImgUri(slide.image.url)}
                alt={slide.image.alternativeText}
                title={slide.title}
                date={slide.publishedAt}
                documentId={slide.documentId}
              />
            </div>
          ))}
      </Flicking>
    </div>
  )
}

export default BlogCarousel
