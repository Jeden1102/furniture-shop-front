"use client"

import { Popover, Transition } from "@headlessui/react"
import { XMark, BarsThree, ShoppingBag } from "@medusajs/icons"
import { Region } from "@medusajs/medusa"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
const TopMenuItems = {
  Home: "/",
  Products: "/store",
  Insiprations: "/inspirations",
}

const TopMenu = ({ regions }: { regions: Region[] | null }) => {
  const toggleState = useToggleState()

  return (
    <div className="h-full flex items-center">
      <ul className="flex gap-10">
        {Object.entries(TopMenuItems).map(([name, href]) => {
          return (
            <li key={name}>
              <LocalizedClientLink
                href={href}
                className="text-md"
                data-testid={`${name.toLowerCase()}-link`}
              >
                {name}
              </LocalizedClientLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TopMenu