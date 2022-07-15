import React from "react"
import { HandleDocument } from "../../helpers/prismic/home"
import { Card, CardContent, CardDate, CardsContainer, CardTitle, Container, Content, Description, Image, Title, TitleArea } from "./styles"

export const CardContainer = () => {

  const homeData = HandleDocument()

  return (
    <Container>

      {homeData?.cardsContainer?.map((cardContainer) => {
        if (!cardContainer?.cards) return null

        return (
          <Content key={cardContainer?.title}>
            <TitleArea>
              <Title>{cardContainer?.title}</Title>
              <Description>{cardContainer?.description}</Description>
            </TitleArea>

            <CardsContainer >
              {cardContainer?.cards.map((card) => {

                return (
                  <Card key={card.title}>
                    <Image src={card.image.url} alt={card.title} />
                    <CardTitle>{card.title}</CardTitle>
                    <CardContent>{card.content}</CardContent>
                    <CardDate>{card.publishDate}</CardDate>
                  </Card>
                )
              })}
            </CardsContainer>

          </Content>
        )
      })}
    </Container>
  )
}