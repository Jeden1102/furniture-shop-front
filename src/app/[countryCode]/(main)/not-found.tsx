import { Metadata } from "next"

import InteractiveLink from "@modules/common/components/interactive-link"
import Nav from "@modules/layout/templates/nav"

export const metadata: Metadata = {
  title: "404",
  description: "Something went wrong",
}

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)]">
      <Nav />
      <h1 className="text-2xl-semi text-ui-fg-base">Page not foundx</h1>
      <p className="text-small-regular text-ui-fg-base">
        The page you tried to access does not exist.
      </p>
      <InteractiveLink href="/">Go to frontpage</InteractiveLink>
    </div>
  )
}
