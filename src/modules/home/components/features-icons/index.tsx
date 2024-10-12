import {SparklesMini, Check, RocketLaunch, Tag} from "@medusajs/icons";


const FeaturesIcons = () => {
  const features = [
    {
      icon:<SparklesMini  className="scale-150"/>,
      title:"High quality",
      subtitle:"Best quality in the world",
    },
    {
      icon:<Check className="scale-150"/>,
      title:"Warranty protection",
      subtitle:"2 years guarantee",
    },
    {
      icon:<RocketLaunch className="scale-150"/>,
      title:"Best shipping methods",
      subtitle:"Fast&Safe Shipping",
    },
    {
      icon:<Tag className="scale-150"/>,
      title:"Discounts",
      subtitle:"Wide range of products on sale",
    }
  ]


  return (
    <div className="flex gap-20 content-container pt-12 md:pt-24 flex-wrap justify-between">
      {features.map((feature, idx) => (
      <div className="flex gap-6 items-center" key={idx}>
      {feature.icon}
      <div>
        <p className="font-medium text-lg">{feature.title}</p>
        <p className="font-light text-gray-700">{feature.subtitle}</p>
      </div>
    </div>
      ))}
    </div>
  )
}

export default FeaturesIcons
