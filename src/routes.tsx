import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home/home"

export const MappedRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}