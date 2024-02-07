import { Container } from "../../components/Container/Style";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { Input } from "../../components/Input/Style";
import { Button, ButtonGoogle } from "../../components/Button/Style";
import { ButtonTitle } from "../../components/ButtonTitle/Style";
import { Link } from "../../components/Link/Style";
import { TextAccount } from "../../components/TextAccount/Style";
import { AntDesign } from "@expo/vector-icons";

export const LoginScreen = () => {
  return (
    <Container bgColor={"FAFAFA"}>
      <Logo source={require("../../assets/VitalHub_Logo 1.png")} />

      <Title>Entrar ou criar conta</Title>
      <Input placeholder="Usuario ou email" />
      <Input placeholder="Senha" />
      <Link color={"#8c8a97"}>Esqueceu sua senha?</Link>

      <Button>
        <ButtonTitle color={"white"}>Entrar</ButtonTitle>
      </Button>
      <ButtonGoogle>
        <AntDesign name="google" size={22} color="#496BBA" />
        <ButtonTitle color={"#496BBA"}>Entrar com Google</ButtonTitle>
      </ButtonGoogle>

      <TextAccount color={"#4D659D"}>
        {"Não tem conta? "} <Link>Crie uma conta agora!</Link>
      </TextAccount>
    </Container>
  );
};
