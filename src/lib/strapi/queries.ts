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
    articles(pagination: { page: 1, pageSize: 6 }, sort: "createdAt:desc") {
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

export const RECENT_ARTICLES = gql`
  query Query {
    articles(pagination: { page: 1, pageSize: 3 }, sort: "createdAt:desc") {
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

export const HOMEPAGE_INSPIRATIONS = gql`
  query Query {
    inspirations {
      title
      subtitle
      documentId
      image {
        url
        alternativeText
      }
    }
  }
`

export const GET_ARTICLES = gql`
  query Query {
    articles(sort: "createdAt:desc") {
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

export const GET_INSPIRATION_BY_ID = gql`
  query Query($documentId: ID!) {
    inspiration(documentId: $documentId) {
      title
      subtitle
      documentId
      image {
        url
        alternativeText
      }
      spot {
        url
        top
        title
        left
        id
        description
      }
    }
  }
`
