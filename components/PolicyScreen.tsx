import React from "react";
import { Div, Img, SecDiv, Subtitle, Title } from "../styles/Styles";

export default function PolicyScreen() {
  return (
    <Div>
      <Title>Políticas Públicas</Title>
      <SecDiv>
        <Img width={750} height={750} src="politicas.jpg" />
        <Subtitle>
          As políticas ESG são normas estabelecidas pelas empresas para
          incorporar os princípios, critérios e práticas ESG em sua cultura,
          buscando mudar a vida das pessoas, conforme os valores da companhia.
          Para isso, a política determina regras que levarão a tomada de
          decisões e ao melhor desenvolvimento das atividades operacionais,
          conforme os objetivos econômicos, ambientais e sociais do
          estabelecimento.
        </Subtitle>
      </SecDiv>
    </Div>
  );
}