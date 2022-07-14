import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-right: 1px ${(props) => props.theme.colors.primary + "33"} solid;
  width: 6vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SmallContainer = styled.div`
  width: 100%;
  height: 11vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    margin: 10px 10px 0 0;

    & > path {
      animation: 1.5s pulse infinite alternate;
    }
  }
`;
export const MiddleContainer = styled.div`
  width: 100%;
  height: 78vh;
`;
