import styled, { css } from "styled-components";

const Decal = css`
  position: absolute;
  right: 15vw;
  font-size: 0.9rem;
  font-weight: 300;
  color: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.background};
  font-style: oblique;
`;

export const OpeningDecal = styled.span`
  ${Decal}
  top: 10vh;
`;
export const ClosingDecal = styled.span`
  ${Decal}
  bottom: 10vh;
`;
