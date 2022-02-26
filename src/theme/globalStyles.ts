import { createGlobalStyle } from 'styled-components'
 
const GlobalStyle = createGlobalStyle`

  :root {
      --primary-light-4: #F7FBFD;
      --primary-light-3: #C2E1EF;
      --primary-color: #20607E;
      --primary-color-dark-1: #1A4E65;
      --primary-color-dark-2: #153E51;
      --primary-color-dark-3: #102F3D;
  } 

  body {
    margin: 0;
    padding: 0;
    background: var(--primary-light-4);
    box-sizing: border-box;
    font-family: sans-serif;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
  }

`
 
export default GlobalStyle