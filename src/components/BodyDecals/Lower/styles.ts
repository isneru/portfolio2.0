import styled from "styled-components";

export const Container = styled.span`
  position: absolute;
  right: 15vw;
  font-size: 0.9rem;
  font-weight: 300;
  text-indent: -0.188rem;
  color: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.background};
  font-style: oblique;
  line-height: 100%;
  transform: translateY(-50%);
`;
