import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`
export const Content = styled.div`
  width: 80%;
  max-width: 1500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 600px) {
    width: 100%;
  }
`
export const TitleArea = styled.div`
  width: 100%;
  text-align: center;
  margin: 1rem;
`
export const Title = styled.h3`

`
export const Description = styled.h4`
  opacity: .6;

  @media (max-width: 600px) {
    font-size: .8rem;
  }
`
export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
`
export const Card = styled.div`
  width: 30%;
  padding: .5rem;
  margin: .5rem;
  border: 1px solid white;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  
  align-items: center;

  @media (max-width: 600px) {
    width: 100%;
  }
  
`



export const Image = styled.img`
  width: 90%;
`
export const CardContent = styled.p`
  width: 90%;
  opacity: .7;
`
export const CardTitle = styled.h3`
  width: 90%;
  margin: 1rem 0;
  text-align: center;
`
export const CardDate = styled.h3`
  width: 90%;
  margin: 1rem 0 .5rem 0;
  text-align: end;
`