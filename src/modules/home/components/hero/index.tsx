import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import HeroSlider from "../hero-slider"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <HeroSlider />
    </div>
  )
}

export default Hero
