import styled from "styled-components";

export const SVG = styled.svg`
  & > path {
    transition: fill 150ms ease-in-out;
    fill: ${(props) => props.theme.colors.text};
  }
`;
