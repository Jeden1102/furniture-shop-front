import { Heading } from "@medusajs/ui"
import BlogCarousel from "../blog-carousel"

import { createApolloClient } from "@lib/apolloClient"
import { HOMEPAGE_ARTICLES } from "@lib/strapi/queries"

const getArticles = async () => {
  const client = createApolloClient()
  let articles = []

  try {
    const { data } = await client.query({
      query: HOMEPAGE_ARTICLES,
    })

    articles = data.articles
  } catch (err) {}

  return articles
}

async function BlogCarouselWrapper() {
  const articles = await getArticles()
  return (
    <div className="flex content-container pb-12 md:pb-24 flex-wrap justify-between">
      <Heading level="h2">Tips&Tricks</Heading>
      <BlogCarousel slides={articles} />
    </div>
  )
}

export default BlogCarouselWrapper
