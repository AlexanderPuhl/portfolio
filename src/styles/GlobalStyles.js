import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-background: #363636;
    --secondary-background: #696969;
    --dark-text: #3c3c3c;
    --light-text: #fff;
    --teal-text: #0ed6ee;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    color: var(--light-text);
    font-family: sans-serif;
    font-size: 16px;
  }
  #gatsby-focus-wrapper {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  main {
    flex-grow: 1;
  }
  h1,h2 {
    text-align: center;
    margin: 20px 0px;
  }
  h1 {
    font-size: 50px;
  }
  h2 {
    font-size: 36px;
  }
  h3 {
    font-size: 28px;
  }
  p {
    line-height: 24px;
    margin: 16px 0;
  }
  a {
    text-decoration: none;
  }
  ul {
    margin: 0;
    li {
      list-style: none;
    }
  }

`;

export default GlobalStyles;
