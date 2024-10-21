import { Container, Badge } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

type Props = {
  img: string
  alt: string
  title: string
  date: string
  documentId: string
}

function BlogTeaser({ img, title, date, alt, documentId }: Props) {
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })

  return (
    <LocalizedClientLink href={`/blog/${documentId}`}>
      <Container className="p-0 flex flex-col gap-4 shadow-md relative w-[320px] h-full">
        <Image
          src={img}
          width={320}
          height={240}
          alt={alt}
          className="h-48 object-cover"
        />
        <div className="p-4 mt-auto">
          <p className="text-lg">{title}</p>
          <p className="text-sm font-light text-gray-500">{formattedDate}</p>
        </div>
        <Badge className="absolute right-4 top-4">Article</Badge>
      </Container>
    </LocalizedClientLink>
  )
}

export default BlogTeaser
