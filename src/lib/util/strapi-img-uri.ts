const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URI || "http://localhost:1337"

export const useGetStrapiImg = (uri: string) => {
  return BASE_URL + uri
}
