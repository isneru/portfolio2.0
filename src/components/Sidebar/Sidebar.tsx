import React from "react";
import { Logo } from "../Logo";

import {
  Container,
  SmallContainer,
  MiddleContainer,
  SmallDownContainer,
} from "./styles";

interface SidebarProps {
  childrentop?: JSX.Element;
  children?: JSX.Element;
  childrenbottom?: JSX.Element;
}

export const Sidebar: React.FC<SidebarProps> = ({
  childrentop,
  children,
  childrenbottom,
}) => {
  return (
    <Container>
      <SmallContainer>{childrentop}</SmallContainer>
      <MiddleContainer>{children}</MiddleContainer>
      <SmallDownContainer>{childrenbottom}</SmallDownContainer>
    </Container>
  );
};
