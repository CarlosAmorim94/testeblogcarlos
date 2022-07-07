import { useFirstPrismicDocument } from "@prismicio/react";
import React from "react";


function App() {

  const [document] = useFirstPrismicDocument()

  console.log(document)

  return (
    <h1>Teste</h1>
  );
}

export default App;
