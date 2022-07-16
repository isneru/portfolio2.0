import styled from "styled-components";
import {
  ContainerCSS,
  MainCSS,
  BottomSectionCSS,
  MiddleSectionCSS,
  TopSectionCSS,
} from "./../../styles/structure";

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
  @media (max-width: 520px) {
    font-size: 3rem;
  }
  @media (max-width: 375px) {
    font-size: 2rem;
  }
`;

export const Name = styled.strong`
  font-size: 6rem;
  line-height: 73%;
  letter-spacing: -8px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};
  @media (max-width: 520px) {
    font-size: 5rem;
  }
  @media (max-width: 375px) {
    font-size: 4rem;
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
  @media (max-width: 520px) {
    font-size: 1rem;
  }
  @media (max-width: 375px) {
    font-size: 0.5;
  }
`;

export const Container = styled.div`
  ${ContainerCSS}
`;
export const Main = styled.div`
  ${MainCSS}
`;
export const MiddleSection = styled.div`
  ${MiddleSectionCSS}
`;
export const TopSection = styled.div`
  ${TopSectionCSS}
`;
export const BottomSection = styled.div`
  ${BottomSectionCSS}
`;
