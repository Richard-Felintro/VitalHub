import { Container, FieldContent } from "../../components/Container/Style";
import { Image } from "react-native";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { Input, InputLight } from "../../components/Input/Style";
import { Button } from "../../components/Button/Style";
import { ButtonTitle } from "../../components/ButtonTitle/Style";
import { Subtitle, SubtitleHighlighted } from "../../components/Subtitle/Style";
import { ProfileImg } from "../../components/ProfileImage/ProfileImage";
import { ProfileImgPlaceholder } from "../../assets/ProfileImgPlaceholder.png";
import { BoxInput } from "../../components/BoxInput/Index";
import { InputLabel } from "../../components/Label/Style";

export const ProfileScreen = () => {
  return (
    <>
      <ProfileImg source={require("../../assets/ProfileImgPlaceholder.png")} />
      <Container color={"#FBFBFB"}>
        <Title>Richard Kosta</Title>
        <Subtitle>richard.kosta@gmail.com</Subtitle>

        <FieldContent>
          <InputLabel>PHOLD</InputLabel>
          <InputLight placeholder={"PHOLD"} maxLength={2}/>
        </FieldContent>

        
      </Container>
    </>
  );
};
