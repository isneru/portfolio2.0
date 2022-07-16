import React from "react";
import { Lower, Sidebar, Upper } from "../../components";

import {
  Container,
  Main,
  MiddleSection,
  TopSection,
  BottomSection,
} from "./styles";

export const About: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Main>
        <TopSection>
          <Upper text="about" />
        </TopSection>
        <MiddleSection></MiddleSection>
        <BottomSection>
          <Lower text="about" />
        </BottomSection>
      </Main>
    </Container>
  );
};
