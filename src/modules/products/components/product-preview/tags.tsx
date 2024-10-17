import { Badge } from "@medusajs/ui"

type Tag = {
  value: string
}

export default async function ProductTags({ tags }: { tags: Tag[] }) {
  return (
    <>
      {tags.map((tag) => (
        <Badge className="uppercase" key={tag.value}>
          {tag.value}
        </Badge>
      ))}
    </>
  )
}
