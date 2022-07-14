import { HandleDocument } from "../../helpers/prismic/home";
import { Container } from "./styles";

export const Header = () => {

  const homeData = HandleDocument()

  return (
    <Container>
      <h1>{homeData?.title}</h1>
      <h3>{homeData?.description}</h3>
    </Container>
  )
}