import React, { SetStateAction, useState } from "react";
import {
  Div,
  FormDiv,
  Img,
  SecDiv,
  Subtitle,
  Title,
  TitleForm,
} from "../styles/Styles";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import api from "../services/api";

export default function VolunteerScreen() {
  const [screen1, setScreen1] = useState(true);
  const [buttonText, setButtonText] = useState('Apoiar');
  const [name, setName] = useState('');
  const [rg, setRg] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [phone, setPhone] = useState('');
  const [occupation, setOccupation] = useState('');
  const [disponibility, setDisponibility] = useState('');

  function post() {
   api
     .post("/create",{
      name: name,
      rg: rg,
      age: age,
      sex: sex,
      phone: phone,
      occupation: occupation,
      disponibility: disponibility
})
     .then(() => alert('Voluntario cadastrado com sucesso'))
     .catch((err) => {
       alert(err);
     });
 }
  return (
    <Div>
      <Title>Voluntariado</Title>
      {screen1 ? (
        <SecDiv>
          <Img width={750} height={750} src="volunteer.jpg" />
          <Subtitle>
            O voluntariado corporativo é um elemento coringa para a agenda ESG
            das empresas, porque desenvolve os colaboradores ao mesmo tempo em
            que gera impacto positivo nas comunidades. Além disso, com
            planejamento e organização, é uma iniciativa facilmente
            implementável (entenda como aqui). Dessa forma, esse tipo de
            programa pode ser uma ferramenta valiosa para que as empresas
            comecem a colocar em prática suas metas ESG – especialmente no que
            diz respeito ao âmbito social.
          </Subtitle>
        </SecDiv>
      ) : (
        <FormDiv>
          <TitleForm>Cadastro</TitleForm>
          <TextField
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "3%",
              marginTop: "5%",
            }}
            id="outlined-basic"
            size="small"
            onChange={e => {
              setName(e.target.value)
            }}
            label="Nome"
            variant="outlined"
          />
          <TextField
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "3%",
            }}
            id="outlined-basic"
            size="small"
            onChange={e => {
              setRg(e.target.value)
            }}
            label="RG"
            variant="outlined"
          />
          <TextField
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "3%",
            }}
            id="outlined-basic"
            size="small"
            onChange={e => {
              setAge(e.target.value)
            }}
            label="Idade"
            variant="outlined"
          />
          <TextField
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "3%",
            }}
            id="outlined-basic"
            size="small"
            onChange={e => {
              setSex(e.target.value)
            }}
            label="Sexo"
            variant="outlined"
          />
          <TextField
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "3%",
            }}
            id="outlined-basic"
            size="small"
            onChange={e => {
              setPhone(e.target.value)
            }}
            label="Telefone"
            variant="outlined"
          />
          <TextField
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "3%",
            }}
            id="outlined-basic"
            size="small"
            onChange={e => {
              setOccupation(e.target.value)
            }}
            label="Função"
            variant="outlined"
          />
          <TextField
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "7%",
            }}
            id="outlined-basic"
            size="small"
            onChange={e => {
              setDisponibility(e.target.value)
            }}
            label="Disponibilidade"
            variant="outlined"
          />
        </FormDiv>
      )}
      <Button
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "5%",
        }}
        onClick={() => {
          screen1?
            setScreen1(false)
          : null
          buttonText === 'Enviar!!'?
          post():
          setButtonText('Enviar!!');
        }}
        size="large"
        variant="contained"
      >
        {buttonText}
      </Button>
    </Div>
  );
}
