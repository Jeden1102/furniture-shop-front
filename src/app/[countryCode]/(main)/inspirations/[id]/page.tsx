import { Metadata } from "next"
import { notFound } from "next/navigation"

import { createApolloClient } from "@lib/apolloClient"
import { GET_INSPIRATION_BY_ID } from "@lib/strapi/queries"
import { getStrapiImgUri } from "@lib/util/strapi-img-uri"
import Share from "../../share"
import { Container } from "@medusajs/ui"
import InspirationsRecent from "@modules/inspirations/components/inspirations-recent"
import type { Inspiration } from "@modules/inspirations/components/inspirations-slider"
import Image from "next/image"

type Props = {
  params: { id: string }
}

export const dynamic = "force-dynamic"

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const inspiration = await getInspirationById(params.id)

  if (!inspiration) {
    notFound()
  }

  return {
    title: `${inspiration.title} | Furniro`,
    description: `${inspiration.title}`,
    openGraph: {
      title: `${inspiration.title} | Furniro`,
      description: `${inspiration.title}`,
      images: inspiration.image,
    },
  }
}

const getInspirationById = async (id: string) => {
  const client = createApolloClient()
  let article: Inspiration | null = null

  try {
    const { data } = await client.query({
      query: GET_INSPIRATION_BY_ID,
      variables: { documentId: id },
    })
    article = data.inspiration
  } catch (err) {}

  return article
}

export default async function InspirationPage({ params }: Props) {
  const inspiration = await getInspirationById(params.id)
  console.log(inspiration)
  if (!inspiration) return

  return (
    <div className="content-container-narrow py-20 flex gap-12 flex-col md:flex-row w-full justify-between">
      <div className="flex flex-col gap-20">
        <Image
          src={getStrapiImgUri(inspiration.image.url)}
          alt={inspiration.image.alternativeText}
          width={900}
          height={600}
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-col gap-8">
        <Container>
          <p className="font-medium">Share this inspiration!</p>
          <Share />
        </Container>
        <div>
          <p className="mb-2">See other inspirations</p>
          <InspirationsRecent />
        </div>
      </div>
    </div>
  )
}
