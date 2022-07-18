import styled, { css } from "styled-components";
import { ChevronRight } from "@styled-icons/evaicons-solid/ChevronRight";
import { ChevronLeft } from "@styled-icons/evaicons-solid/ChevronLeft";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { ExternalLinkOutline } from "@styled-icons/evaicons-outline/ExternalLinkOutline";
import {
  ContainerCSS,
  MainCSS,
  BottomSectionCSS,
  MiddleSectionCSS,
  TopSectionCSS,
} from "./../../styles/structure";
import { useState } from "react";
import { WorksHelper } from "./Works.helper";

export const Container = styled.section`
  ${ContainerCSS}
`;
export const Main = styled.div`
  ${MainCSS}
`;
export const TopSection = styled.div`
  ${TopSectionCSS}
`;
export const BottomSection = styled.div`
  ${BottomSectionCSS}
`;

export const MiddleSection = styled.div`
  ${MiddleSectionCSS}
  overflow:hidden;
`;

const sliderPadding = "4rem";
interface SliderProps {
  sliderIndex: number;
}
export const Slider = styled.div<SliderProps>`
  display: flex;
  width: calc(100% - 2 * ${sliderPadding});
  transform: translateX(calc(${(props) => props.sliderIndex} * -100%));
  flex-grow: 1;
  height: fit-content;
  transition: transform 400ms ease-in-out;
`;

const HandleCSS = css`
  border: none;
  outline: none;
  width: ${sliderPadding};
  background: ${(props) => props.theme.colors.background};
  z-index: 10;
  height: 100%;
  flex-grow: 0;
  cursor: pointer;

  &:hover > svg {
    fill: ${(props) => props.theme.colors.primaryhover};
    transform: scale(1.15);
  }
`;

export const LeftHandle = styled.button`
  ${HandleCSS}
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

export const RightHandle = styled.button`
  ${HandleCSS}
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const ArrowCSS = css`
  fill: ${(props) => props.theme.colors.primary};
  transition: fill 150ms ease-in-out, transform 150ms ease-in-out;
`;
export const ArrowLeft = styled(ChevronLeft)`
  ${ArrowCSS}
`;

export const ArrowRight = styled(ChevronRight)`
  ${ArrowCSS}
`;

interface CardProps {
  itemsOnScreen: number;
}

export const Card = styled.div<CardProps>`
  flex: 0 0 calc(100% / ${(props) => props.itemsOnScreen});
  padding: 0 0.25rem;
  border-radius: 0.75rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;

  & > img {
    width: 50%;
    border-radius: 0.75rem;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    border: 1px ${(props) => props.theme.colors.primary} solid;
  }
  & > div {
    width: 50%;
    border: 1px ${(props) => props.theme.colors.primary} solid;
    border-top: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    border-radius: 0.75rem;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }

  & > div > span {
    color: ${(props) => props.theme.colors.primary};
  }
  & > div > a {
    padding: 1rem 0;
  }
  & > div > a:hover > svg {
    fill: ${(props) => props.theme.colors.primaryhover};
  }

  /*   @media (max-width: 1000px) {
    flex: 0 0 calc(100% / ${(props) => props.itemsOnScreen + 1});
  } */
`;

const iconsCSS = css`
  width: 10%;
  fill: ${(props) => props.theme.colors.primary};
  transition: fill 150ms ease-in-out;
`;
export const LinkIcon = styled(ExternalLinkOutline)`
  ${iconsCSS}
`;
export const GithubIcon = styled(Github)`
  ${iconsCSS}
`;
