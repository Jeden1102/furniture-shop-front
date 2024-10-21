import { createApolloClient } from "@lib/apolloClient"
import { RECENT_ARTICLES } from "@lib/strapi/queries"
import BlogTeaser from "../blog-teaser"
import { getStrapiImgUri } from "@lib/util/strapi-img-uri"

type Article = {
  url: string
  title: string
  publishedAt: string
  documentId: string
  image: {
    url: string
    alternativeText: string
  }
}

const getArticles = async () => {
  const client = createApolloClient()
  let articles: Article[] = []

  try {
    const { data } = await client.query({
      query: RECENT_ARTICLES,
    })

    articles = data.articles
  } catch (err) {}

  return articles
}

async function BlogRecent() {
  const articles = await getArticles()
  return (
    <div className="flex flex-col gap-4">
      {articles &&
        articles.map((article, index) => (
          <BlogTeaser
            key={index}
            img={getStrapiImgUri(article.image.url)}
            alt={article.image.alternativeText}
            title={article.title}
            date={article.publishedAt}
            documentId={article.documentId}
          />
        ))}
    </div>
  )
}

export default BlogRecent
