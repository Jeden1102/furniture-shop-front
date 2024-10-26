import { Metadata } from "next"
import { notFound } from "next/navigation"

import { createApolloClient } from "@lib/apolloClient"
import { GET_ARTICLE_BY_ID } from "@lib/strapi/queries"
import BlogTeaserBig from "@modules/blog/components/blog-teaser-big"
import { getStrapiImgUri } from "@lib/util/strapi-img-uri"
import Share from "../../share"
import { Container } from "@medusajs/ui"
import BlogRecent from "@modules/blog/components/blog-recent"

type Props = {
  params: { id: string }
}

export const dynamic = "force-dynamic"

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleById(params.id)

  if (!article) {
    notFound()
  }

  return {
    title: `${article.title} | Furniro`,
    description: `${article.title}`,
    openGraph: {
      title: `${article.title} | Furniro`,
      description: `${article.title}`,
      images: article.image,
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

const getArticleById = async (id: string) => {
  const client = createApolloClient()
  let article: Article | null = null

  try {
    const { data } = await client.query({
      query: GET_ARTICLE_BY_ID,
      variables: { documentId: id },
    })

    article = data.article
  } catch (err) {}

  return article
}

export default async function ProductPage({ params }: Props) {
  const article = await getArticleById(params.id)

  if (!article) return

  return (
    <div className="content-container-narrow py-20 flex gap-12 flex-col md:flex-row">
      <div className="flex flex-col gap-20">
        <BlogTeaserBig
          img={getStrapiImgUri(article.image.url)}
          alt={article.image.alternativeText}
          title={article.title}
          date={article.publishedAt}
          documentId={article.documentId}
        />
        <div
          className="blog"
          dangerouslySetInnerHTML={{ __html: article.content }}
        ></div>
      </div>
      <div className="flex flex-col gap-8">
        <Container>
          <p className="font-medium">Share this post!</p>
          <Share />
        </Container>
        <div>
          <p className="mb-2">See other posts</p>
          <BlogRecent />
        </div>
      </div>
    </div>
  )
}
