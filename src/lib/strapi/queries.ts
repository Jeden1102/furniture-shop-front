import { gql } from "@apollo/client"

export const HOMEPAGE_SLIDES = gql`
  query Query {
    homePageSlides {
      url
      title
      price
      image {
        url
        alternativeText
      }
      description
    }
  }
`

export const HOMEPAGE_ARTICLES = gql`
  query Query {
    articles {
      title
      publishedAt
      documentId
      image {
        url
        alternativeText
      }
      content
    }
  }
`
