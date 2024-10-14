"use client"

import Flicking, { ViewportSlot } from "@egjs/react-flicking"
import "@egjs/react-flicking/dist/flicking.css"
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css"
import "@egjs/flicking-plugins/dist/arrow.css"
import { AutoPlay, Arrow, Pagination } from "@egjs/flicking-plugins"
import "@egjs/flicking-plugins/dist/pagination.css"
import HeroSliderItem from "../hero-slider-item"
import Image from "next/image"

const HeroSlider = () => {
  const plugins = [
    new AutoPlay({ duration: 210000, direction: "NEXT", stopOnHover: true }),
    new Arrow(),
    new Pagination({ type: "bullet" }),
  ]
  return (
    <Flicking
      plugins={plugins}
      align="next"
      circular={true}
      onMoveEnd={(e) => {
        console.log(e)
      }}
    >
      <ViewportSlot>
        <span className="hidden lg:block flicking-arrow-prev !top-4 !right-24 !left-auto bg-primary/20 rounded-full !scale-75 before:!h-[4px] after:!h-[4px]"></span>
        <span className="hidden lg:block  flicking-arrow-next !top-4 !right-8 !left-auto bg-primary rounded-full !scale-75 before:!h-[4px] after:!h-[4px] after:!bg-white before:!bg-white"></span>
        <div className="hidden lg:block  flicking-pagination !top-12 !w-fit !left-3/4"></div>
      </ViewportSlot>

      <div className="panel md:mx-4 md:pr-4">
        <HeroSliderItem
          img="/images/sofa-1.png"
          title="Bohauss"
          subtitle="Luxury big sofa 2-seat"
          price="299.99"
        />
      </div>
      <div className="panel md:mx-4 md:pr-4">
        <HeroSliderItem
          img="/images/sofa-1.png"
          title="Test title"
          subtitle="Test subtitle test"
          price="299.99"
        />
      </div>
      <div className="panel md:mx-4 md:pr-4">
        <HeroSliderItem
          img="/images/sofa-1.png"
          title="Test title"
          subtitle="Test subtitle test"
          price="299.99"
        />
      </div>
    </Flicking>
  )
}

export default HeroSlider
