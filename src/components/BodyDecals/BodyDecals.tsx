import React from "react";

import { OpeningDecal, ClosingDecal } from "./styles";

interface BodyDecalsProps {
  text: string;
}

export const BodyDecals: React.FC<BodyDecalsProps> = ({ text }) => {
  return (
    <>
      <OpeningDecal>{"<" + text + ">"}</OpeningDecal>
      <ClosingDecal>{"</" + text + ">"}</ClosingDecal>
    </>
  );
};
