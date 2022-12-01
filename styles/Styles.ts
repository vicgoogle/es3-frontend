import styled from "styled-components";

export const Option = styled.p`
  font-size: 2vh;
  opacity: 100%;
  width: fit-content;
  margin: 7px;
  font-style: italic;
  padding: 0;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const MainDiv = styled.div`
  background-image: linear-gradient(
    to right bottom,
    #b721ff,
    #4979ff,
    #00a3ff,
    #00bfff,
    #21d4fd
  );
  height: 140vh;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  color: white;
  overflow-y: scroll;
`;

export const Header = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 4vh;
  width: 100%;
  justify-content: start;
  display: flex;
  color: white;
`;

export const Div = styled.div`
  height: fit-content;
  width: 100%;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  color: white;
  margin-bottom: 10vh;
`;

export const FormDiv = styled.div`
  height: fit-content;
  width: 45%;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  color: black;
  background-color: white;
  border-radius: 3%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 6vh;
`;

export const SecDiv = styled.div`
  height: fit-content;
  width: 100%;
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  color: white;
  margin: 0;
  padding-left: 3%;
`;

export const Title = styled.p`
  font-size: 10vh;
  font-style: italic;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: white;
`;

export const TitleForm = styled.p`
  font-size: 6vh;
  font-style: italic;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color: black;
  margin-top: 0;
  margin-bottom: 1vh;
`;

export const Img = styled.img`
  margin-bottom: 10%;
  margin-right: 3%;
`;

export const Subtitle = styled.p`
  font-size: 6vh;
  font-style: italic;
  text-align: center;
  width: 100%;
  margin-right: 4vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  color: white;
`;
