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
      <ProfileImage />
      <ContentCard>
        <DataProfileCard>
          <ProfileName>Gustavo Magalhães</ProfileName>
          <ProfileData>
            <TextAge>19 anos</TextAge>
            <TextBold>Rotina</TextBold>
          </ProfileData>

          <ViewRow>
            <ClockCard>
              <AntDesign
                name="clockcircle"
                size={14}
                color={situacao == "pendente" ? "#49B3BA" : "#8C8A97"}
              />
              {situacao == "cancelado" ? (
                <></>
              ) : situacao == "pendente" ? (
                <ButtonCard>
                  <ButtonText>Cancelar</ButtonText>
                </ButtonCard>
              ) : (
                <ButtonCard>
                  <ButtonText>Ver prontuário</ButtonText>
                </ButtonCard>
              )}
              <TextBold>14:00</TextBold>
            </ClockCard>
          </ViewRow>
        </DataProfileCard>
      </ContentCard>
    </ContainerCardsList>
  );
};
