import { Container } from "../../components/Container/Style";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { Input } from "../../components/Input/Style";
import { Button, ButtonGoogle } from "../../components/Button/Style";
import { ButtonTitle } from "../../components/ButtonTitle/Style";
import { Link } from "../../components/Link/Style";
import { TextAccount } from "../../components/TextAccount/Style";
import { AntDesign } from "@expo/vector-icons";
import { Subtitle } from "../../components/Subtitle/Style";
export const EmailVerificationScreen = () => {
  return (
    <Container>
      <Logo source={require("../../assets/VitalHub_Logo 1.png")} />

      <Title>Verifique seu e-mail</Title>
      <Subtitle>
        Digite o código de 4 dígitos enviado para
      </Subtitle>

      <Input placeholder="Usuário ou E-mail" />

      <Button>
        <ButtonTitle color={"white"}>Continuar</ButtonTitle>
      </Button>
    </Container>
  );
};
