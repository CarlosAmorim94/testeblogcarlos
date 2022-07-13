
import { HandleDocument } from "../../helpers/prismic/home"

export const Home = () => {

  const homeData = HandleDocument()

  return (
    <>
      <h1>{homeData?.title}</h1>
      <div>{homeData?.description}</div>

      <section>

        {homeData?.cardsContainer?.map((cardContainer) => {
          if (!cardContainer?.cards) return null

          return (
            <div key={cardContainer?.title}>
              <div>
                {cardContainer?.title}
                {cardContainer?.description}
              </div>

              {cardContainer?.cards.map((card) => {
                return (
                  <div>
                    <img src={card.image.url} alt={card.title} />
                    <h2>{card.title}</h2>
                    <p>{card.content}</p>
                    <p>{card.publishDate}</p>
                  </div>
                )
              })}

            </div>
          )
        })}
      </section>

    </>
  )
}