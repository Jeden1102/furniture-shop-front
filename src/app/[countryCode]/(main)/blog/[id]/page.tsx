import { Metadata } from "next"
import { notFound } from "next/navigation"

import ProductTemplate from "@modules/products/templates"
import BlogPage from "@modules/blog/templates"

import { createApolloClient } from "@lib/apolloClient"
import { GET_ARTICLE_BY_ID } from "@lib/strapi/queries"
import BlogTeaserBig from "@modules/blog/components/blog-teaser-big"
import { getStrapiImgUri } from "@lib/util/strapi-img-uri"

type Props = {
  params: { id: string }
}

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { handle } = params

//   const { product } = await getProductByHandle(handle).then(
//     (product) => product
//   )

//   if (!product) {
//     notFound()
//   }

//   return {
//     title: `${product.title} | Furniro`,
//     description: `${product.title}`,
//     openGraph: {
//       title: `${product.title} | Furniro`,
//       description: `${product.title}`,
//       images: product.thumbnail ? [product.thumbnail] : [],
//     },
//   }
// }

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

  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    "en-GB",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  )

  console.log(article)
  return (
    <div className="content-container-narrow py-20 flex gap-12 flex-col sm:flex-row">
      <div className="flex flex-col gap-20">
        <BlogTeaserBig
          img={getStrapiImgUri(article.image.url)}
          alt={article.image.alternativeText}
          title={article.title}
          date={article.publishedAt}
          documentId={article.documentId}
        />
        <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
      </div>
      <div>side: share links + latest articles</div>
    </div>
  )
}
