import styled from "styled-components";
import { Title } from "../Title/Style";

export const ClockBox = styled.View`
  height: 26px;
  width: 100px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #F1F0F5;
`;

export const ContainerCardsList = styled.View`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 12px;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  flex-direction: row;
  gap: 10px;

  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.08);
`;

export const ProfileImage = styled.Image`
  width: 77px;
  height: 80px;
  border-radius: 5px;
`;

export const ContentCard = styled.View`
  width: 70%;
  gap: 11px;
  background-color: #fff;
`;

export const DataProfileCard = styled.View`
  gap: 6px;
`;

export const ProfileName = styled(Title)`
  font-size: 16px;
`;

export const ProfileData = styled.View`
  flex-direction: row;
  gap: 15px;
`;

export const TextAge = styled.Text`
  font-family: Quicksand_400Regular;
  font-size: 14px;
`;

export const TextBold = styled.Text`
  font-family: Quicksand_600SemiBold;
  color: ${(props) => (props.situacao == "pendente" ? "#49B3BA" : "#8C8A97")};
`;

export const ViewRow = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ClockCard = styled.View`
  flex-direction: row;
  align-items: center;

  gap: 6px;
  padding: 4px 23px;

  border-radius: 5px;
  border: 1px;

  background-color: ${(props) =>
    props.situacao == "pendente" ? "#E8fcfd" : "f1f0f5"};
`;

export const ButtonCard = styled.TouchableOpacity`
  background-color: transparent;
  border: none;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  font-family: MontserratAlternates_500Medium;
  color: ${(props) => (props.situacao == "pendente" ? "#c81d25" : "#344f8f")};
`;
