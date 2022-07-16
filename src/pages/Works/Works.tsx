import React from "react";
import { Lower, Sidebar, Upper } from "../../components";

import {
  Container,
  Main,
  MiddleSection,
  TopSection,
  BottomSection,
} from "../../styles/structure";

export const Works: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Main>
        <TopSection>
          <Upper text="works" />
        </TopSection>
        <MiddleSection></MiddleSection>
        <BottomSection>
          <Lower text="works" />
        </BottomSection>
      </Main>
    </Container>
  );
};
