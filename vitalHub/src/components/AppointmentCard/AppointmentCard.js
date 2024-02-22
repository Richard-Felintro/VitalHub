import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import {
  ContainerCardsList,
  ProfileImage,
  ContentCard,
  DataProfileCard,
  ProfileName,
  ProfileData,
  TextAge,
  TextBold,
  ViewRow,
  ClockCard,
  ButtonCard,
  ButtonText,
  ClockBox,
  ButtonTextRed,
} from "./Style";

export const AppointmentCard = ({
  situacao = "pendente",
  onPressCancel,
  onPressAppointment,
}) => {
  return (
    <ContainerCardsList>
      <ProfileImage
        source={require("../../assets/ProfileImgPlaceholder.png")}
      />
      <ContentCard>
        <DataProfileCard>
          <ProfileName>Gustavo Magalhães</ProfileName>
          <ProfileData>
            <TextAge>19 anos</TextAge>
            <Entypo name="dot-single" size={3} color="#D9D9D9" />
            <TextBold>Rotina</TextBold>
          </ProfileData>

          <ViewRow>
            <ClockCard >
              <ClockBox situacao={situacao}>
                <AntDesign
                  name="clockcircle"
                  size={14}
                  color={situacao == "pendente" ? "#49B3BA" : "#8C8A97"}
                />
                <TextBold situacao={situacao}>14:00</TextBold>
              </ClockBox>
              {situacao == "cancelado" ? (
                <></>
              ) : situacao == "pendente" ? (
                <ButtonCard onPress={onPressCancel}>
                  <ButtonTextRed>Cancelar</ButtonTextRed>
                </ButtonCard>
              ) : (
                <ButtonCard onPress={onPressAppointment}>
                  <ButtonText>Ver prontuário</ButtonText>
                </ButtonCard>
              )}
            </ClockCard>
          </ViewRow>
        </DataProfileCard>
      </ContentCard>
    </ContainerCardsList>
  );
};
