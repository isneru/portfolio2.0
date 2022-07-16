import React from "react";
import { Logo, Sidebar } from "../../components";
import { Lower, Upper } from "../../components/BodyDecals";

import {
  HeroText,
  Presentation,
  Span,
  Name,
  Highlight,
  Description,
} from "./styles";

import {
  Container,
  Main,
  MiddleSection,
  TopSection,
  BottomSection,
} from "../../styles/structure";

export const Landing: React.FC = () => {
  return (
    <Container>
      <Sidebar childrentop={<Logo width="100%" height="100%" />} />
      <Main>
        <TopSection>
          <Upper text="main" />
        </TopSection>
        <MiddleSection>
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
        </MiddleSection>
        <BottomSection>
          <Lower text="main" />
        </BottomSection>
      </Main>
    </Container>
  );
};
