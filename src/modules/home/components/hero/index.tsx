import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import HeroSlider from "../hero-slider"
import HeroOverlayBox from "../hero-overlay-box"
import { createApolloClient } from "@lib/apolloClient"
import { HOMEPAGE_SLIDES } from "@lib/strapi/queries"

const Hero = async () => {
  const client = createApolloClient()

  const { data } = await client.query({
    query: HOMEPAGE_SLIDES,
  })

  return (
    <div className="h-[95vh] md:h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle bg-gradient-to-r from-primary/20 to-white">
      <HeroOverlayBox />
      {data.homePageSlides?.length > 0 && (
        <HeroSlider slides={data.homePageSlides} />
      )}
    </div>
  )
}

export default Hero
