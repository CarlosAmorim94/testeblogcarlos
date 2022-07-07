import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App'

import { PrismicProvider } from '@prismicio/react'
import { client } from './services/prismic'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <PrismicProvider client={client}>
      <App />
    </PrismicProvider>
  </React.StrictMode>,
)