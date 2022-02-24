import { createGlobalStyle } from 'styled-components'
 
const GlobalStyle = createGlobalStyle`

  :root {
      --primary-light-3: #ECEFF1;
      --primary-light-4: #F5F7F8;
      --primary-color: #A3B1BA;
      --primary-color-dark-1: #828D94;
      --primary-color-dark-2: #51585D;
      --primary-color-dark-3: #828D94;
  } 

  body {
    margin: 0;
    padding: 0;
    background: #F5F7F8;
    box-sizing: border-box;
    font-family: sans-serif;
  }

`
 
export default GlobalStyle