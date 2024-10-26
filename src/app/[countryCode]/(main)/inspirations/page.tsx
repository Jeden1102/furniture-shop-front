import { createApolloClient } from "@lib/apolloClient"

import { HOMEPAGE_INSPIRATIONS } from "@lib/strapi/queries"
import { getStrapiImgUri } from "@lib/util/strapi-img-uri"
import InspirationsSliderItem from "@modules/inspirations/components/inspirations-slider-item"
import type { Inspiration } from "@modules/inspirations/components/inspirations-slider"
import { Heading, Button } from "@medusajs/ui"
import Link from "next/link"
import Image from "next/image"

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
    <div>
      <div className="bg-primary/40 py-20 relative">
        <div className="content-container-narrow pr-0 flex flex-col lg:flex-row lg:gap-20 items-center">
          <div className="lg:max-w-[400px]">
            <Heading className="text-3xl leading-9" level="h2">
              50+ Beautiful rooms inpiration
            </Heading>
            <p className="my-4 font-light">
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </p>
            <Link href="#inspirations-list">
              <Button size={"xlarge"}>Explore All</Button>
            </Link>
          </div>
        </div>
      </div>
      <div
        id="inspirations-list"
        className="pb-12 md:pb-24 pt-20 gap-8 content-container-narrow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {inspirations &&
          inspirations.map((inspiration, index) => (
            <InspirationsSliderItem
              img={getStrapiImgUri(inspiration.image.url)}
              alt={inspiration.image.alternativeText}
              title={inspiration.title}
              subtitle={inspiration.subtitle}
              documentId={inspiration.documentId}
              index={index}
              className="w-full"
              key={inspiration.documentId}
            />
          ))}
      </div>
    </div>
  )
}

export default InspirationsPage
