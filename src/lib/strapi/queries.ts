import { gql } from "@apollo/client"

export const HOMEPAGE_SLIDES = gql`
  query ExampleQuery {
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
