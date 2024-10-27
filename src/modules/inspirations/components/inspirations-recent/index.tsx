import { createApolloClient } from "@lib/apolloClient"
import { RECENT_ARTICLES } from "@lib/strapi/queries"
import { getStrapiImgUri } from "@lib/util/strapi-img-uri"
import InspirationsSliderItem from "../inspirations-slider-item"
import type { Inspiration } from "../inspirations-slider"

const getInspirations = async () => {
  const client = createApolloClient()
  let articles: Inspiration[] = []

  try {
    const { data } = await client.query({
      query: RECENT_ARTICLES,
    })

    articles = data.articles
  } catch (err) {}

  return articles
}

async function InspirationsRecent() {
  const articles = await getInspirations()
  return (
    <div className="flex flex-col gap-4">
      {articles &&
        articles.map((article, index) => (
          <InspirationsSliderItem
            key={index}
            index={index}
            img={getStrapiImgUri(article.image.url)}
            alt={article.image.alternativeText}
            title={article.title}
            subtitle={article.subtitle}
            documentId={article.documentId}
          />
        ))}
    </div>
  )
}

export default InspirationsRecent
