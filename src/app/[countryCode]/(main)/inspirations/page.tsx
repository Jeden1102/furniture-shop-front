import { createApolloClient } from "@lib/apolloClient"

import { HOMEPAGE_INSPIRATIONS } from "@lib/strapi/queries"
import { getStrapiImgUri } from "@lib/util/strapi-img-uri"
import InspirationsSliderItem from "@modules/inspirations/components/inspirations-slider-item"
import type { Inspiration } from "@modules/inspirations/components/inspirations-slider"
import { Container } from "@medusajs/ui"

const getInspirations = async () => {
  const client = createApolloClient()
  let inspirations: Inspiration[] = []

  try {
    const { data } = await client.query({
      query: HOMEPAGE_INSPIRATIONS,
    })

    inspirations = data.inspirations
  } catch (err) {}

  return inspirations
}
async function InspirationsPage() {
  const inspirations = await getInspirations()
  return (
    <div className="content-container-narrow">
      <Container className="pb-12 md:pb-24 pt-20 flex flex-wrap my-20 gap-8">
        {inspirations &&
          inspirations.map((inspiration, index) => (
            <InspirationsSliderItem
              img={getStrapiImgUri(inspiration.image.url)}
              alt={inspiration.image.alternativeText}
              title={inspiration.title}
              subtitle={inspiration.subtitle}
              documentId={inspiration.documentId}
              index={index}
              className="w-full sm:max-w-[320px]"
              key={inspiration.documentId}
            />
          ))}
      </Container>
    </div>
  )
}

export default InspirationsPage
