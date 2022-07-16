import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.colors.background};
  display: grid;
  grid-template-columns: 6vw 1fr;
  grid-template-rows: 11vh 78vh 11vh;
  grid-template-areas:
    "centertop"
    "center"
    "centerbottom";
`;
export const MainTop = styled.div``;
export const Main = styled.div``;
export const MainBottom = styled.div``;
export const SidebarTop = styled.div``;
export const SidebarMiddle = styled.div``;
export const SidebarBottom = styled.div``;
