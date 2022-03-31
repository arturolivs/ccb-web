import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  
  :root {
      --primary-color-light-4: #F7FBFD;
      --primary-color-light-3: #C2E1EF;
      --primary-color-light-2: #4fa8d1;
      --primary-color-light-1: #2a80a9;
      --primary-color: #20607E;
      --primary-color-dark-1: #1A4E65;
      --primary-color-dark-2: #153E51;
      --primary-color-dark-3: #102F3D;

      --primary-color-high-light: rgba(64, 155, 255, 0.8);

      --gray-0: #FCFCFC;
      --gray-5: #808080;
      --gray-6: #595959;

      --danger: #f84261;
  } 

  body {
    margin: 0;
    padding: 0;
    background: var(--gray-0);
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    overflow: hidden;
  }

  h1 {
    margin: 0;
    padding: 0;
    color: var(---primary-color-dark-2);
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
