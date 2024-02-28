import { Container } from "../../components/Container/Style";
import { Button, ButtonSecondary } from "../../components/Button/Style";
import { ButtonTitle } from "../../components/ButtonTitle/Style";
import { Link } from "../../components/Link/Style";
import { CalendarComponent } from "../../components/CalendarComponent/CalendarComponent";
import { SelectDateTitle } from "./Style";
import { Dropdown } from "../../components/Dropdown/Dropdown";

export const SelectDateScreen = () => {
  const Horarios = [
    { id: 0,value: "10:00", label: "10:00" },
    { id: 1,value: "11:00",  label: "11:00" },
    { id: 2,value: "12:00",  label: "12:00" },
    { id: 3,value: "13:00",  label: "13:00" }];
  return (
    <Container>
      <SelectDateTitle>Selecionar Clínica</SelectDateTitle>
      <CalendarComponent />
      <Dropdown content={Horarios} labelText={"Selecione um horário disponível"} />
      <Button>
        <ButtonTitle color={"#FFF"}>CONTINUAR</ButtonTitle>
      </Button>
      <ButtonSecondary>
        <Link color={"#344F8F"}>Cancelar</Link>
      </ButtonSecondary>
    </Container>
  );
};
