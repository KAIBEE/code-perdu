import styled from "styled-components";

const glowEffect = `
        0 0 5px rgb(204, 214, 210),
        0 0 10px rgb(204, 214, 210),
        0 0 20px rgb(204, 214, 210);`;

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
`;
