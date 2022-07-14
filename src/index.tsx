import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'

import { PrismicProvider } from '@prismicio/react'
import { client } from './services/prismic'
import { GlobalStyle } from './styles/GlobalStyle'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <PrismicProvider client={client}>
      <GlobalStyle />
      <App />
    </PrismicProvider>
  </React.StrictMode>,
)