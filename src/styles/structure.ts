import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.colors.background};
  display: grid;
  grid-template-columns: 6vw 1fr;
  grid-template-rows: 100vh;
  grid-template-areas: "sidebar main";
`;

export const TopSection = styled.div`
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

export const MiddleSection = styled.div`
  grid-area: center;
  display: flex;
  justify-content: center;
`;

export const BottomSection = styled.div`
  position: relative;
  grid-area: centerbottom;
  border-top: 1px ${(props) => props.theme.colors.primary + "33"} solid;
`;
