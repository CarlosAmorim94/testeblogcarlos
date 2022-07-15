import { HandleDocument } from "../../helpers/prismic/home";
import { Container, Content, Description, Logo, TextArea, Title } from "./styles";
import LogoTag from '../../assets/images/tag.png'

export const Header = () => {

  const homeData = HandleDocument()

  return (
    <Container>
      <Content>
        <Logo src={LogoTag} alt="Logo do blog de exemplo" />
        <TextArea>
          <Title>{homeData?.title}</Title>
          <Description>{homeData?.description}</Description>
        </TextArea>
      </Content>
    </Container>
  )
}