import styled from "styled-components";

const glowEffect = `2px 2px 10px rgba(255, 255, 255, 0.80);`;

export const BigTitle = styled.h1<{
  $glowEffect?: boolean;
  color?: string;
  fontSize?: string;
  padding?: string;
}>`
  font-size: ${({ fontSize = "2.3em" }) => fontSize};
  text-align: center;
  color: ${({ color = "#ffffff" }) => color};
  text-shadow: ${({ $glowEffect }) => ($glowEffect ? glowEffect : "none")};
  padding: ${({ padding = "0" }) => padding};
  font-family: Source Serif Pro;
`;
