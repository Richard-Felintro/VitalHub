import { FlatList, View } from "react-native";
import { HeaderHome } from "../../components/Header/Style";
import {
  CardTest,
  Container,
  DoctorContainer,
  InfoContainer,
} from "../../components/Container/Style";
import { NotificationBell, UserDoctor } from "../../components/Logo/Style";

import { MontSerratWhite, UserText } from "../../components/Text/Style";
import { ButtonTitle, Title } from "../../components/Title/Style";
import CalendarStrip from "react-native-calendar-strip";

import { SelectButton, WhiteSelectButton } from "../../components/Button/Style";
import { CardPaciente } from "../../components/CardPaciente/CardPaciente";
import { CalendarHome } from "../../components/CalendarList/CalendarHome";

import { ContainerButton } from "./Style";
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment";
import { useState } from "react";
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard";

const Consultas = [
  { id: 1, nome: "Richard", situacao: "pendente" },
  { id: 2, nome: "Richard", situacao: "realizado" },
  { id: 3, nome: "Richard", situacao: "cancelado" },
];

export const DoctorHomeScreen = () => {
  const [statusLista, setStatusLista] = useState("pendente");

  return (
    <Container>
      <HeaderHome>
        <UserDoctor source={require("../../assets/DoctorImage.png")} />
        <InfoContainer>
          <UserText>Bem-vindo</UserText>
          <MontSerratWhite>Dr. Claudio </MontSerratWhite>
        </InfoContainer>

        <NotificationBell source={require("../../assets/Notification.png")} />
      </HeaderHome>

      <DoctorContainer>
        <CalendarHome />

        <ContainerButton>
          <BtnListAppointment
            textButton={"Agendadas"}
            clickButton={statusLista === "pendente"}
            onPress={() => setStatusLista("pendente")}
          />

          <BtnListAppointment
            textButton={"Realizadas"}
            clickButton={statusLista === "realizado"}
            onPress={() => setStatusLista("realizado")}
          />

          <BtnListAppointment
            textButton={"Canceladas"}
            clickButton={statusLista === "cancelado"}
            onPress={() => setStatusLista("cancelado")}
          />
        </ContainerButton>

        {/* <SelectButton>
                <ButtonTitle style={{ textTransform: null, fontSize: 12 }}>Agendados</ButtonTitle>
            </SelectButton> 

            <WhiteSelectButton>
           <ButtonTitle style={{ textTransform: null, fontSize: 12, color: '#607EC5' }}>Realizadas</ButtonTitle>
           </WhiteSelectButton>

           <WhiteSelectButton>
           <ButtonTitle style={{ textTransform: null, fontSize: 12, color: '#607EC5' }}>Canceladas</ButtonTitle>
           </WhiteSelectButton>    */}

        {/* <CardPaciente
          imagePatient={"https://github.com/Gustavoozz.png"}
          patientName={"Gustavo"}
          patientAge={"18 anos"}
          appointmentType={"Endócrino"}
          appointmentHour={"17:00"}
        /> */}
        <FlatList
          data={Consultas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>
            statusLista == item.situacao && <AppointmentCard situacao={item.situacao}/>
          }
        ></FlatList>
      </DoctorContainer>
    </Container>
  );
};
