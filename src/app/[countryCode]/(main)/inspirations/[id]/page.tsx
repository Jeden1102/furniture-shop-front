import { Metadata } from "next"
import { notFound } from "next/navigation"

import { createApolloClient } from "@lib/apolloClient"
import { GET_INSPIRATION_BY_ID } from "@lib/strapi/queries"
import BlogTeaserBig from "@modules/blog/components/blog-teaser-big"
import { getStrapiImgUri } from "@lib/util/strapi-img-uri"
import Share from "../../share"
import { Container } from "@medusajs/ui"
import InspirationsRecent from "@modules/inspirations/components/inspirations-recent"

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

type Article = {
  url: string
  title: string
  content: string
  publishedAt: string
  documentId: string
  image: {
    url: string
    alternativeText: string
  }
}

const getInspirationById = async (id: string) => {
  const client = createApolloClient()
  let article: Article | null = null

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
      <div className="flex flex-col gap-20">Here inspiration</div>
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
