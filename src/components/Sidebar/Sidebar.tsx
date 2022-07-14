import React from "react";
import { Logo } from "../Logo";

import { Container, SmallContainer, MiddleContainer } from "./styles";

export const Sidebar: React.FC = () => {
  return (
    <Container>
      <SmallContainer>
        <Logo width="65%" height="65%" />
      </SmallContainer>
      <MiddleContainer></MiddleContainer>
      <SmallContainer></SmallContainer>
    </Container>
  );
};
