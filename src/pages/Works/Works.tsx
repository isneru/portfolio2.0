import React, { useEffect } from "react";
import { Lower, Sidebar, Upper } from "../../components";
import { WorksHelper } from "./Works.helper";

import {
  Container,
  Main,
  MiddleSection,
  TopSection,
  BottomSection,
  Slider,
  LeftHandle,
  RightHandle,
  ArrowLeft,
  ArrowRight,
  Card,
  LinkIcon,
  GithubIcon,
} from "./styles";

export const Works: React.FC = () => {
  const {
    RightHandleClick,
    LeftHandleClick,
    sliderIndex,
    itemsOnScreen,
    cards,
  } = WorksHelper();

  return (
    <Container>
      <Sidebar />
      <Main>
        <TopSection>
          <Upper text="works" />
        </TopSection>
        <MiddleSection>
          <LeftHandle onClick={LeftHandleClick}>
            <ArrowLeft />
          </LeftHandle>
          <Slider sliderIndex={sliderIndex}>
            {cards.map((card, id) => {
              return (
                <Card key={id} itemsOnScreen={itemsOnScreen}>
                  <img src={card.img} alt={card.title} />
                  <div>
                    <a href={card.link} target="_blank" rel="noreferrer">
                      <LinkIcon />
                    </a>
                    <span>{card.title}</span>
                    <a href={card.repo} target="_blank" rel="noreferrer">
                      <GithubIcon />
                    </a>
                  </div>
                </Card>
              );
            })}
          </Slider>
          <RightHandle onClick={RightHandleClick}>
            <ArrowRight />
          </RightHandle>
        </MiddleSection>
        <BottomSection>
          <Lower text="works" />
        </BottomSection>
      </Main>
    </Container>
  );
};
