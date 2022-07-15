import React from "react";
import { Sidebar } from "../../components";
import { Lower, Upper } from "../../components/BodyDecals";

import {
  Container,
  Main,
  HeroText,
  Presentation,
  Span,
  Name,
  Highlight,
  Description,
  HeroContainer,
  Header,
  Footer,
} from "./styles";

export const Landing: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Main>
        <Header>
          <Upper text="main" />
        </Header>
        <HeroContainer>
          <HeroText>
            <Presentation>
              <Span>Hello, world!</Span>
              <Name>
                Di<Highlight>og</Highlight>o N<Highlight>og</Highlight>ueira
              </Name>
            </Presentation>
            <Description>
              A Frontend Developer who chose to hard code his life.
            </Description>
          </HeroText>
        </HeroContainer>
        <Footer>
          <Lower text="main" />
        </Footer>
      </Main>
    </Container>
  );
};
