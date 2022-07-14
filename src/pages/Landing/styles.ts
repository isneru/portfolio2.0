import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  max-width: 34.125rem;
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
`;
export const Name = styled.strong`
  font-size: 6rem;
  line-height: 73%;
  letter-spacing: -8px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};
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
`;
