import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    overflow-x: hidden;
    background-color: #121212;
    color: #fff;
  }
  
  html {
    scroll-behavior: smooth;
  }
  a {
      text-decoration: none;
      
    &:visited {
      text-decoration: none;
    }
  }
`