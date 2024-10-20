import { Container, Badge, Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"
type Props = {
  img: string
  alt: string
  title: string
  date: string
  documentId: string
}

function BlogTeaserBig({ img, title, date, alt, documentId }: Props) {
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })

  return (
    <LocalizedClientLink href={`/blog/${documentId}`}>
      <Container className="p-0 flex flex-col gap-4 shadow-md relative">
        <Image
          src={img}
          width={800}
          height={400}
          alt={alt}
          className="h-72 object-cover"
        />
        <div className="p-4 absolute bottom-0 bg-white/40 w-full backdrop-blur-lg text-white">
          <Badge size={"large"} color={"blue"}>
            Article
          </Badge>
          <Heading className="text-3xl my-2" level="h1">
            {title}
          </Heading>
          <p className="text-sm font-light">{formattedDate}</p>
        </div>
      </Container>
    </LocalizedClientLink>
  )
}

export default BlogTeaserBig
