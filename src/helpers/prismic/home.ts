import { useSinglePrismicDocument } from "@prismicio/react"

export const HandleDocument = () => {
  const [document] = useSinglePrismicDocument('home')

  console.log(document)
}