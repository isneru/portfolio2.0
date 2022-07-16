import styled from "styled-components";

export const Button = styled.button`
  height: 3.5rem;
  width: 3.5rem;
  background: 1px ${(props) => props.theme.colors.background};
  border: 1px ${(props) => props.theme.colors.primary} solid;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: fixed;
  bottom: 3vh;
  right: 1.5vw;
  box-shadow: ${(props) => props.theme.colors.primary + "22"} 0px 0px 10px 2px,
    ${(props) => props.theme.colors.primary + "22"} inset 0px 0px 10px 2px;
  cursor: pointer;
  transition: transform 100ms ease-in-out, bottom 100ms ease-in-out,
    border 150ms ease-in-out, background 150ms ease-in-out;
  &:hover {
    transform: scale(1.06);
    bottom: calc(3vh + 4px);
  }
`;

export const SunOrMoon = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Sun = styled.div`
  width: 40%;
  height: 40%;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.primary};
  transition: background 150ms ease-in-out;
  position: relative;
`;

export const Shadow = styled.div`
  position: absolute;
  width: 40%;
  height: 40%;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.background};
  left: ${(props) => props.theme.themeSwitch.shadowPosition};
  top: 20%;
  transition: left 150ms ease-in-out, background 150ms ease-in-out;
`;
