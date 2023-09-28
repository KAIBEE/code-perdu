import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`

  ${reset}

  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
  body {
    font-family: Lato, sans-serif;
  }

  #root {
    height: 100vh;
    max-height: 100vh;
    width: 100vw;
    max-width: 100vw;
    background-color: rgb(20, 21, 30);
  }

  .linkPreviousButton {
    float: left
  }
`;

export default GlobalStyle;
