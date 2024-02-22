import { ButtonTitle } from "../../components/ButtonTitle/Style";
import { Container, FieldContent } from "../../components/Container/Style";
import { InputBox } from "../../components/Input/InputBox";
import { Button, ButtonSecondary } from "../../components/Button/Style";
import { Link } from "../../components/Link/Style";
import { ProfileImg } from "../../components/ProfileImage/ProfileImage";
import { RecordContainer } from "./Style";
import { ContainerRow } from "../../components/Container/Style";
import { Title } from "../../components/Title/Style";
import { SubtitleDual } from "../../components/Subtitle/Style";
import { ScrollView } from "react-native";

export const MedicalRecordScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <RecordContainer>
          <ProfileImg
            source={require("../../assets/ProfileImgPlaceholder.png")}
          />    
          <FieldContent>
            <Title>Richard Kosta</Title>
            <ContainerRow>
              <SubtitleDual color={"4E4B59"}>22 anos</SubtitleDual>
              <SubtitleDual color={"4E4B59"}>
                richard.kosta@gmail.com
              </SubtitleDual>
            </ContainerRow>
          </FieldContent>

          <InputBox
            height={121}
            lineCount={4}
            labelText={"Descrição da consulta"}
            placeholder={"Descrição"}
          />
          <InputBox
            labelText={"Diagnóstico do paciente"}
            placeholder={"Diagnóstico"}
            height={53}
          />
          <InputBox
            height={121}
            lineCount={4}
            labelText={"Prescrição médica"}
            placeholder={"Prescrição médica"}
          />

          <Button>
            <ButtonTitle color={"#fff"}>SALVAR</ButtonTitle>
          </Button>
          <Button>
            <ButtonTitle color={"#fff"}>EDITAR</ButtonTitle>
          </Button>
          <ButtonSecondary>
            <Link color={"#344F8F"}>Cancelar</Link>
          </ButtonSecondary>
        </RecordContainer>
      </Container>
    </ScrollView>
  );
};
