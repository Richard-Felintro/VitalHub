import { AntDesign } from "@expo/vector-icons";
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
            <TextBold>Rotina</TextBold>
          </ProfileData>

          <ViewRow>
            <ClockCard>
              <ClockBox>
                <AntDesign
                  name="clockcircle"
                  size={14}
                  color={situacao == "pendente" ? "#49B3BA" : "#8C8A97"}
                />
                <TextBold>14:00</TextBold>
              </ClockBox>
              {situacao == "cancelado" ? (
                <></>
              ) : situacao == "pendente" ? (
                <ButtonCard onPress={onPressCancel}>
                  <ButtonText>Cancelar</ButtonText>
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
