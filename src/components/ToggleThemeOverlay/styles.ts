import styled from "styled-components";

export const Button = styled.button`
  height: 3.5rem;
  width: 3.5rem;
  background: ${(props) => props.theme.themeSwitch.background};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: sticky;
  bottom: 2vh;
  left: 95vw;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 12px 0px;
  cursor: pointer;
  transition: transform 100ms ease-in-out, bottom 100ms ease-in-out,
    background 150ms ease-in-out;
  &:hover {
    transform: scale(1.06);
    bottom: calc(2vh + 4px);
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
  background: ${(props) => props.theme.themeSwitch.color};
  transition: background 150ms ease-in-out;
`;

export const Shadow = styled.div`
  position: absolute;
  width: 40%;
  height: 40%;
  border-radius: 50%;
  background: ${(props) => props.theme.themeSwitch.background};
  left: ${(props) => props.theme.themeSwitch.shadowPosition};
  transition: left 150ms ease-in-out, background 150ms ease-in-out;
`;
