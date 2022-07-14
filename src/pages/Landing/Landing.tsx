import React from "react";
import { BodyDecals } from "../../components/BodyDecals";

import { LandingHelper } from "./Landing.helper";
import {
  Container,
  HeroText,
  Presentation,
  Span,
  Name,
  Highlight,
  Description,
} from "./styles";

export const Landing: React.FC = () => {
  const {} = LandingHelper();

  return (
    <Container>
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
      <BodyDecals text="main" />
    </Container>
  );
};
