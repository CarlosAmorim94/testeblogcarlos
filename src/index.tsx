import React from 'react'
import { createRoot } from 'react-dom/client'


import './index.css'
import App from './App'

import { PrismicProvider } from '@prismicio/react'
import { client } from './services/prismic'
import { ChakraProvider } from '@chakra-ui/react'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <PrismicProvider client={client}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </PrismicProvider>
  </React.StrictMode>,
)