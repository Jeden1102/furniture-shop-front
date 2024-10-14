import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import HeroSlider from "../hero-slider"
import HeroOverlayBox from "../hero-overlay-box"

const Hero = () => {
  return (
    <div className="h-[95vh] md:h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle bg-gradient-to-r from-primary/20 to-white">
      <HeroOverlayBox />
      <HeroSlider />
    </div>
  )
}

export default Hero
