import { HandleDocument } from "../../helpers/prismic/home"

export const Home = () => {

  const homeData = HandleDocument()

  return (
    <>
      <h1>{homeData?.title}</h1>
      <div>{homeData?.description}</div>
    </>
  )
}