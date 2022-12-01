import React from "react";
import { Div, Img, SecDiv, Subtitle, Title } from "../styles/Styles";

export default function SustainableScreen() {
  return (
    <Div>
      <Title>Cadeia produtiva sustentável</Title>
      <SecDiv>
        <Img width={750} height={750} src="cadeia.jpg" />
        <Subtitle>
          {" "}
          O conceito de cadeia produtiva, definido como um conjunto de
          atividades que contemplam, desde a produção até o consumo final de um
          produto, retrata, em parte, o atual modelo linear de produção,
          caracterizado por um sistema de produzir, utilizar e descartar, onde
          todos os produtos atingem eventualmente um estatuto de “fim de vida
          útil”.
        </Subtitle>
      </SecDiv>
    </Div>
  );
}