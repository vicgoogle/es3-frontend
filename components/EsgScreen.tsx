import React from "react";
import { Div, Img, SecDiv, Subtitle, Title } from "../styles/Styles";

export default function EsgScreen() {
  return (
    <Div>
      <Title>ESG</Title>
      <SecDiv>
        <Img width={750} height={750} src="esg.jpg" />
        <Subtitle>
          O acrônimo ESG, do inglês, Environmental, Social and Governance,
          refere-se a uma grande tendência e uma necessária resposta das
          empresas frente aos desafios da sociedade contemporânea. É uma sigla
          que diz respeito à integração da geração de valor econômico aliado à
          preocupação com as questões ambientais, sociais e de governança
          corporativa, por parte das empresas. Na prática, é uma forma de
          mostrar responsabilidade e comprometimento com o mercado que atuam,
          seus consumidores, fornecedores, colaboradores e seus investidores.
        </Subtitle>
      </SecDiv>
    </Div>
  );
}