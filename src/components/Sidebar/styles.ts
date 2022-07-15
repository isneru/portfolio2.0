import styled from "styled-components";

export const Container = styled.div`
  grid-area: sidebar;
  border-right: 1px ${(props) => props.theme.colors.primary + "33"} solid;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 11vh 78vh 11vh;
  grid-template-areas:
    "small"
    "middle"
    "smalldown";
`;
export const SmallContainer = styled.div`
  grid-area: small;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px ${(props) => props.theme.colors.primary + "33"} solid;

  & > svg {
    & > path {
      animation: 1.5s pulse infinite alternate;
    }
  }
`;
export const MiddleContainer = styled.div`
  grid-area: middle;
`;
export const SmallDownContainer = styled.div`
  grid-area: smalldown;
  border-top: 1px ${(props) => props.theme.colors.primary + "33"} solid;
`;
