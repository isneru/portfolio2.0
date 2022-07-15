import React from "react";
import { Container } from "./styles";

interface Props {
  text: string;
}

export const Lower: React.FC<Props> = ({ text }) => {
  return <Container>{"</" + text + ">"}</Container>;
};
