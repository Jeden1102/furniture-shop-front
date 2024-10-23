import { Button, Heading } from "@medusajs/ui"

import { createApolloClient } from "@lib/apolloClient"
import { HOMEPAGE_INSPIRATIONS } from "@lib/strapi/queries"
import InspirationsSlider from "../inspirations-slider"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const getInspirations = async () => {
  const client = createApolloClient()
  let inspirations = []

  try {
    const { data } = await client.query({
      query: HOMEPAGE_INSPIRATIONS,
    })

    inspirations = data.inspirations
  } catch (err) {}

  return inspirations
}

async function InspirationsSliderWrapper() {
  const inspirations = await getInspirations()
  return (
    <div className="bg-primary/40 py-20 lg:py-40 relative">
      <div className="content-container pr-0 flex flex-col lg:flex-row lg:gap-20 items-center">
        <div className="lg:max-w-[400px]">
          <Heading className="text-3xl leading-9" level="h2">
            50+ Beautiful rooms inpiration
          </Heading>
          <p className="my-4 font-light">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <LocalizedClientLink href="/inspirations">
            <Button size={"xlarge"}>Explore More</Button>
          </LocalizedClientLink>
        </div>
        <InspirationsSlider slides={inspirations} />
      </div>
    </div>
  )
}

export default InspirationsSliderWrapper
