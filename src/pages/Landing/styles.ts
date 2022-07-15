import styled from "styled-components";

/* export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
`; */

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.colors.background};
  display: grid;
  grid-template-columns: 6vw 94vw;
  grid-template-rows: 100vh;
  grid-template-areas: "sidebar main";
`;

export const Header = styled.div`
  grid-area: centertop;
  border-bottom: 1px ${(props) => props.theme.colors.primary + "33"} solid;
  position: relative;
`;

export const Main = styled.div`
  grid-area: main;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 11vh 78vh 11vh;
  grid-template-areas:
    "centertop"
    "center"
    "centerbottom";
`;

export const HeroContainer = styled.div`
  grid-area: center;
  display: flex;
  justify-content: center;
`;
export const HeroText = styled.div`
  width: min(34.125rem, 90%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Span = styled.span`
  font-size: 4rem;
  line-height: 100%;
  letter-spacing: -2px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.text};
  @media (max-width: 425px) {
    font-size: 3rem;
  }
`;

export const Name = styled.strong`
  font-size: 6rem;
  line-height: 73%;
  letter-spacing: -8px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};
  @media (max-width: 425px) {
    font-size: 5rem;
  }
`;

export const Highlight = styled.span`
  animation: 1.5s pulse infinite alternate;
  transition: color 150ms ease-in-out;
`;

export const Description = styled.span`
  font-size: 2rem;
  line-height: 100%;
  font-weight: 400;
  color: ${(props) => props.theme.colors.text};
  @media (max-width: 425px) {
    font-size: 1rem;
  }
`;
export const Footer = styled.div`
  position: relative;
  grid-area: centerbottom;
  border-top: 1px ${(props) => props.theme.colors.primary + "33"} solid;
`;
