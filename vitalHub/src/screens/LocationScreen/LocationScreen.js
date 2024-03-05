import {
  ColumnContainer,
  RowContainer,
} from "../../components/DoctorModal/Style";
import { Title } from "../../components/Title/Style";
import { Subtitle } from "../../components/Subtitle/Style";
import { GPSPlaceholder } from "./Style";
import { InputLabel } from "../../components/Label/Style";
import { Container, FieldContent } from "../../components/Container/Style";
import { InputLight } from "../../components/Input/Style";

export const LocationScreen = () => {
  return (
    <Container>
      <GPSPlaceholder source={require("../../assets/DoctorImage.png")} />;
      <ColumnContainer>
        <Title>Clínica Natureh</Title>
        <Subtitle>São Paulo, SP</Subtitle>
      </ColumnContainer>
      <FieldContent>
        <InputLabel>Data de nascimento</InputLabel>
        <InputLight placeholder={"DD/MM/YYYY"} maxLength={10}></InputLight>
      </FieldContent>
      <RowContainer>
        <FieldContent>
          <InputLabel>Data de nascimento</InputLabel>
          <InputLight placeholder={"DD/MM/YYYY"} maxLength={10}></InputLight>
        </FieldContent>
        <FieldContent>
          <InputLabel>Data de nascimento</InputLabel>
          <InputLight placeholder={"DD/MM/YYYY"} maxLength={10}></InputLight>
        </FieldContent>
      </RowContainer>
    </Container>
  );
};
