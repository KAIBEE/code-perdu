import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`

  ${reset}

  body {
    font-family:Crimson Text;
  }

  #root {
    height: 100dvh;
    background: var(--Linear-background, linear-gradient(180deg, #261635 0%, #11141A 100%));
    overflow: hidden;
  }
  
  .text-center {
    text-align: center;
  }
  
  .view-with-button {
    display: flex;
    align-items: center;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export default GlobalStyle;
