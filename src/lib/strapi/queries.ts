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
    articles(pagination: { page: 1, pageSize: 8 }) {
      title
      publishedAt
      documentId
      image {
        url
        alternativeText
      }
    }
  }
`

export const GET_ARTICLE_BY_ID = gql`
  query GetArticleById($documentId: ID!) {
    article(documentId: $documentId) {
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
