import { useState, useEffect } from "react";
import memelab from "../../assets/memelab.png";
import onetwotea from "../../assets/onetwotea.png";
import socials from "../../assets/socials.png";
interface WorksHelperProps {
  indexProgress: number;
  itemsOnScreen: number;
  sliderIndex: number;
  LeftHandleClick: () => void;
  RightHandleClick: () => void;
  cards: {
    link: string;
    img: string;
    title: string;
    repo: string;
  }[];
}

export const WorksHelper = (): WorksHelperProps => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [itemsOnScreen, setItemsOnScreen] = useState(1);

  const [cards, setCards] = useState([
    {
      link: "https://vast-garden-39328.herokuapp.com/",
      img: onetwotea,
      title: "Tea Shop",
      repo: "https://github.com/isneru/tea-shop",
    },
    {
      link: "https://rocketseat-ignitelab.vercel.app/",
      img: memelab,
      title: "Event Platform",
      repo: "https://github.com/isneru/rocketseat-ignitelab",
    },
    {
      link: "https://socials-three.vercel.app/",
      img: socials,
      title: "Socials",
      repo: "https://github.com/isneru/socials",
    },
  ]);
  const [indexProgress, setIndexProgress] = useState(
    Math.ceil(cards.length / itemsOnScreen)
  );

  const RightHandleClick = () => {
    if (sliderIndex + 1 >= indexProgress) {
      setSliderIndex(0);
    } else {
      setSliderIndex(sliderIndex + 1);
    }
  };

  const LeftHandleClick = () => {
    if (sliderIndex - 1 < 0) {
      setSliderIndex(indexProgress - 1);
    } else {
      setSliderIndex(sliderIndex - 1);
    }
  };

  useEffect(() => {}, [window.onresize]);

  return {
    indexProgress,
    itemsOnScreen,
    sliderIndex,
    RightHandleClick,
    LeftHandleClick,
    cards,
  };
};
