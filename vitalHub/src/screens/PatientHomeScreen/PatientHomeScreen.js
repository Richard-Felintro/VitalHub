import { Container, ContainerRow } from "../../components/Container/Style";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { Input } from "../../components/Input/Style";
import { ButtonSmall } from "../../components/Button/Style";
import {
  ButtonTitle,
  ButtonTitleSmall,
} from "../../components/ButtonTitle/Style";
import { Subtitle } from "../../components/Subtitle/Style";
import {
  BellIcon,
  DefaultText,
  PatientHeader,
  UserName,
  FieldContent,
} from "../../components/Header/Style";
import { UserIcon } from "../../components/Icon/Style";
import LinearGradient from "expo-linear-gradient";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CalendarHome } from "../../components/CalendarHome/CalendarHome";

export const PatientHomeScreen = () => {
  return (
    <>
      <PatientHeader>
        <UserIcon source={require("../../assets/DoctorImage.png")} />
        <FieldContent>
          <DefaultText color={"4E4B59"}>Bem vindo</DefaultText>
          <UserName>Dr. Claudio</UserName>
        </FieldContent>
        <Ionicons name="notifications" size={24} color="white" />
      </PatientHeader>
      <Container>
        <CalendarHome></CalendarHome>
      </Container>
    </>
  );
};
