import { useSinglePrismicDocument } from "@prismicio/react"
import { homeDocument } from "./types/home/home"

export const HandleDocument = () => {
  const [document] = useSinglePrismicDocument('home')

  if (!document?.data) return null

  const data: homeDocument = document?.data

  return {
    title: data?.display_title?.[0]?.text,
    description: data?.display_description?.[0]?.text,
    cardsContainer: data?.body?.map((prismicCardContainer) => ({
      type: prismicCardContainer?.slice_type,
      title: prismicCardContainer?.primary?.card_container_title?.[0]?.text,
      description: prismicCardContainer?.primary?.card_container_description?.[0]?.text,
      cards: prismicCardContainer?.items?.map((prismicCard) => ({
        publishDate: prismicCard?.card_publish_date,
        title: prismicCard?.card_title?.[0]?.text ?? '',
        content: prismicCard?.card_content?.[0]?.text ?? '',
        image: {
          url: prismicCard?.card_image?.recommended?.url ?? prismicCard?.card_image?.url,
          alt: prismicCard?.card_image?.recommended?.alt ?? prismicCard?.card_image?.alt,
        }
      }))
    }))
  }
}