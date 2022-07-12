import { HandleDocument } from "../../helpers/prismic/home"

export const Home = () => {

  const homeData = HandleDocument()

  console.log(homeData)

  return (
    <>
      <h1>Home</h1>
    </>
  )
}