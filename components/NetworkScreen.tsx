import React from "react";
import { Div, Img, SecDiv, Subtitle, Title } from "../styles/Styles";

export default function NetworkScreen() {
  return (
    <Div>
      <Title>Redes de Trabalho</Title>
      <SecDiv>
        <Img width={750} height={750} src="volunteer.jpg" />
        <Subtitle>
          O trabalho em rede é um processo longo, de construção de espaços de
          encontro e ação conjunta, que envolvem cumplicidades, articulações e
          compromissos. Deve valer-se da diversidade de pensamentos e opiniões e
          produzir processos de aprendizagem comuns, que se convertam em linhas
          de ação para todos.
        </Subtitle>
      </SecDiv>
    </Div>
  );
}