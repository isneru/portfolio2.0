import styled, { css } from "styled-components";

const Decal = css`
  position: absolute;
  right: 15vw;
  font-size: 0.9rem;
  font-weight: 300;
  color: ${(props) => props.theme.colors.primary};
  font-style: oblique;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-100%);
    left: -100vw;
    width: 100vw;
    height: 1px;
    background: ${(props) => props.theme.colors.primary};
    opacity: 0.2;
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-100%);
    left: 104%;
    width: calc(15vw - 4%);
    height: 1px;
    background: ${(props) => props.theme.colors.primary};
    opacity: 0.2;
  }
`;

export const OpeningDecal = styled.span`
  ${Decal}
  top: 10vh;
`;
export const ClosingDecal = styled.span`
  ${Decal}
  bottom: 10vh;
`;
