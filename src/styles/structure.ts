import styled, { css } from "styled-components";

export const ContainerCSS = css`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.colors.background};
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 100vh;
  grid-template-areas: "sidebar main";
`;

export const TopSectionCSS = css`
  grid-area: centertop;
  border-bottom: 1px ${(props) => props.theme.colors.primary + "33"} solid;
  position: relative;
`;

export const MainCSS = css`
  grid-area: main;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 11vh 78vh 11vh;
  grid-template-areas:
    "centertop"
    "center"
    "centerbottom";
`;

export const MiddleSectionCSS = css`
  grid-area: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BottomSectionCSS = css`
  position: relative;
  grid-area: centerbottom;
  border-top: 1px ${(props) => props.theme.colors.primary + "33"} solid;
`;
