import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  
  :root {
      --primary-color-light-4: #F7FBFD;
      --primary-color-light-3: #C2E1EF;
      --primary-color-light-2: #71B9DA;
      --primary-color-light-1: #349BCB;
      --primary-color: #20607E;
      --primary-color-dark-1: #1A4E65;
      --primary-color-dark-2: #153E51;
      --primary-color-dark-3: #102F3D;
  } 

  body {
    margin: 0;
    padding: 0;
    background: var(--primary-color-light-4);
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    overflow: hidden;
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
