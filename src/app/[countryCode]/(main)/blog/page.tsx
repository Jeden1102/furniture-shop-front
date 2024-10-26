import { createApolloClient } from "@lib/apolloClient"
import { HOMEPAGE_ARTICLES } from "@lib/strapi/queries"
import BlogTeaserBig from "@modules/blog/components/blog-teaser-big"
import BlogTeaser from "@modules/blog/components/blog-teaser"
import type { Blog } from "@modules/blog/components/blog-carousel"
import { getStrapiImgUri } from "@lib/util/strapi-img-uri"

type Articles = {
  main: Blog
  remaining: Blog[]
}

const getArticles = async () => {
  const client = createApolloClient()
  let articles: Articles | null = null

  try {
    const { data } = await client.query({
      query: HOMEPAGE_ARTICLES,
    })

    articles = data.articles
    articles = {
      main: data.articles[0],
      remaining: data.articles.slice(1),
    }
  } catch (err) {}

  console.log(articles?.main, "HEREEEE")
  return articles
}

async function BlogPage() {
  const articles = await getArticles()
  return (
    <div className="content-container-narrow pb-12 md:pb-24 pt-20">
      {articles !== null && (
        <>
          <BlogTeaserBig
            img={getStrapiImgUri(articles.main.image.url)}
            alt={articles.main.image.alternativeText}
            title={articles.main.title}
            date={articles.main.publishedAt}
            documentId={articles.main.documentId}
          />
          <div className="grid grid-cols1 sm:grid-cols-2 lg:grid-cols-3 my-20 gap-8">
            {articles.remaining.map((article) => (
              <BlogTeaser
                key={article.documentId}
                img={getStrapiImgUri(article.image.url)}
                alt={article.image.alternativeText}
                title={article.title}
                date={article.publishedAt}
                className="w-full"
                documentId={article.documentId}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default BlogPage
