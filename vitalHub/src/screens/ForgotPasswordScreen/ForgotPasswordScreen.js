import { Container } from "../../components/Container/Style";
import { Logo } from "../../components/Logo/Style";
import { Title } from "../../components/Title/Style";
import { Input } from "../../components/Input/Style";
import { Button } from "../../components/Button/Style";
import { ButtonTitle } from "../../components/ButtonTitle/Style";
import { Subtitle } from "../../components/Subtitle/Style";

export const ForgotPasswordScreen = () => {
  return (
    <Container>
      <Logo source={require("../../assets/VitalHub_Logo 1.png")} />

      <Title>Recuperar senha</Title>
      <Subtitle color={"5F5C6B"}>
        Digite abaixo seu email cadastrado que enviaremos um link para
        recuperação de senha
      </Subtitle>

      <Input placeholder="Usuário ou E-mail" />

      <Button>
        <ButtonTitle color={"white"}>Continuar</ButtonTitle>
      </Button>
    </Container>
  );
};
