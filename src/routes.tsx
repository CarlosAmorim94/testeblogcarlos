import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ChakraUi } from "./pages/ChakraUi"
import { Home } from "./pages/Home"

export const MappedRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chakraui" element={<ChakraUi />} />
      </Routes>
    </BrowserRouter>
  )
}