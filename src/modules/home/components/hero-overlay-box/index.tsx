import LocalizedClientLink from "@modules/common/components/localized-client-link"

const HeroOverlayBox = () => {
  return (
    <div className="absolute p-8 md:p-12 md:max-w-[470px] shadow-sm  bg-white/50 left-1/2 w-11/12 -translate-x-1/2 md:translate-x-0 md:left-24 top-12 z-50 backdrop-blur-lg flex flex-col gap-4 md:gap-8">
      <h1 className="font-semibold text-3xl lg:text-6xl lg:leading-[72px]">
        High-Quality Furniture Just For You
      </h1>
      <p className="font-light md:text-lg">
        Our furniture is made from selected and best quality materials that are
        suitable for your dream home
      </p>
      <LocalizedClientLink
        className="bg-primary text-white py-6 px-4 text-xl text-center mt-4"
        href="/store"
      >
        Shop now
      </LocalizedClientLink>
    </div>
  )
}

export default HeroOverlayBox
