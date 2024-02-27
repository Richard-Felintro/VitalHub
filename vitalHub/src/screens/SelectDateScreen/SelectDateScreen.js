import { ScreenTitle } from "../../components/Title/Style";
import { Container } from "../../components/Container/Style";
import { Button, ButtonSecondary } from "../../components/Button/Style";
import { useState } from "react";
import { ListComponent } from "../../components/List/Style";
import { ButtonTitle } from "../../components/ButtonTitle/Style";
import { Link } from "../../components/Link/Style";
import { DoctorCard } from "../../components/DoctorCard/DoctorCard";
import CalendarStrip from "react-native-calendar-strip";
import { Calendar } from "react-native-calendars";
import { CalendarComponent } from "../../components/CalendarComponent/CalendarComponent";
import { SelectDateTitle } from "./Style";
import { Dropdown } from "../../components/Dropdown/Dropdown";

export const SelectDateScreen = () => {
  return (
    <Container>
      <SelectDateTitle>Selecionar Clínica</SelectDateTitle>
      <CalendarComponent />
      <Dropdown labelText={"Selecione um horário disponível"} />
      <Button>
        <ButtonTitle color={"#FFF"}>CONTINUAR</ButtonTitle>
      </Button>
      <ButtonSecondary>
        <Link color={"#344F8F"}>Cancelar</Link>
      </ButtonSecondary>
    </Container>
  );
};
