import { ColumnContainer } from "../../components/DoctorModal/Style";
import { Title } from "../../components/Title/Style";
import { Subtitle } from "../../components/Subtitle/Style";
import { FormContainer, GPSimg, Row } from "./Style";
import { InputLabel } from "../../components/Label/Style";
import { Container, FieldContent, FieldContentSmall } from "../../components/Container/Style";
import { InputLight } from "../../components/Input/Style";
import { InputLightSmall, FieldContentShort } from "./Style";
export const LocationScreen = () => {
  return (
    <Container>
      <FormContainer>
        <ColumnContainer>
          <Title>Clínica Natureh</Title>
          <Subtitle>São Paulo, SP</Subtitle>
        </ColumnContainer>
        <FieldContent>
          <InputLabel>Endereço</InputLabel>
          <InputLight placeholder={"Rua Vicenso Silva, 987"}></InputLight>
        </FieldContent>
        <Row>
          <FieldContentShort>
            <InputLabel>Número</InputLabel>
            <InputLightSmall placeholder={"578"}></InputLightSmall>
          </FieldContentShort>
          <FieldContentShort>
            <InputLabel>Bairro</InputLabel>
            <InputLightSmall placeholder={"Moema-SP"}></InputLightSmall>
          </FieldContentShort>
        </Row>
      </FormContainer>
    </Container>
  );
};
