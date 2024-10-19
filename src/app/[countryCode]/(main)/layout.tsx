import { Metadata } from "next"
import NextTopLoader from "nextjs-toploader"
import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <NextTopLoader
        color="#E89F71"
        initialPosition={0.08}
        crawlSpeed={200}
        showSpinner={false}
        height={4}
      />
      <Nav />
      {props.children}
      <Footer />
    </>
  )
}
