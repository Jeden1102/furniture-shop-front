import { createApolloClient } from "@lib/apolloClient"
import { RECENT_INSPIRATIONS } from "@lib/strapi/queries"
import { getStrapiImgUri } from "@lib/util/strapi-img-uri"
import InspirationsSliderItem from "../inspirations-slider-item"
import type { Inspiration } from "../inspirations-slider"

const getInspirations = async () => {
  const client = createApolloClient()
  let inspirations: Inspiration[] = []

  try {
    const { data } = await client.query({
      query: RECENT_INSPIRATIONS,
    })

    inspirations = data.inspirations
  } catch (err) {}

  return inspirations
}

async function InspirationsRecent() {
  const inspirations = await getInspirations()
  return (
    <div className="flex flex-col gap-4">
      {inspirations &&
        inspirations.map((inspiration, index) => (
          <InspirationsSliderItem
            key={index}
            index={index}
            img={getStrapiImgUri(inspiration.image.url)}
            alt={inspiration.image.alternativeText}
            title={inspiration.title}
            subtitle={inspiration.subtitle}
            documentId={inspiration.documentId}
          />
        ))}
    </div>
  )
}

export default InspirationsRecent
