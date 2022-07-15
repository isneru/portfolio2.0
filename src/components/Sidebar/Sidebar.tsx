import React from "react";
import { Logo } from "../Logo";

import {
  Container,
  SmallContainer,
  MiddleContainer,
  SmallDownContainer,
} from "./styles";

export const Sidebar: React.FC = () => {
  return (
    <Container>
      <SmallContainer>
        <Logo width="100%" height="100%" />
      </SmallContainer>
      <MiddleContainer></MiddleContainer>
      <SmallDownContainer></SmallDownContainer>
    </Container>
  );
};
