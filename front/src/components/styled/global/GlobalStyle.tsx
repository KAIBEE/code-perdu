import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`

${reset}

body {
  font-family: Source Serif Pro;
}

.linkPreviousButton{
  float: left
}
`;

export default GlobalStyle;