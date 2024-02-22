import { HeaderHome } from "../../components/Header/Style";
import {
  Container,
  DoctorContainer,
  InfoContainer,
} from "../../components/Container/Style";
import { NotificationBell, UserDoctor } from "../../components/Logo/Style";

import { MontSerratWhite, UserText } from "../../components/Text/Style";
import { CalendarHome } from "../../components/CalendarList/CalendarHome";

import { ContainerButton } from "./Style";
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment";
import { useState } from "react";
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard";
import { ListComponent } from "../../components/List/Style";
import { PatientAppointmentModal } from "../../components/PatientAppointmentModal/PatientAppointmentModal";

const Consultas = [
  { id: 1, nome: "Richard", situacao: "pendente" },
  { id: 2, nome: "Richard", situacao: "realizado" },
  { id: 3, nome: "Richard", situacao: "cancelado" },
];

export const PatientHomeScreen = () => {
  const [statusLista, setStatusLista] = useState("pendente");

  const [showModalCancel, setShowModalCancel] = useState(false);
  const [showModalAppointment, setShowModalAppointment] = useState(true);
  return (
    <Container>
      <HeaderHome>
        <UserDoctor source={require("../../assets/ProfileImgPlaceholder.png")} />
        <InfoContainer>
          <UserText>Bem-vindo</UserText>
          <MontSerratWhite>Richard Kosta</MontSerratWhite>
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
        <ListComponent
          data={Consultas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>
            statusLista == item.situacao && (
              <AppointmentCard
                situacao={item.situacao}
                onPressCancel={() => setShowModalCancel(true)}
                onPressAppointment={() => setShowModalAppointment(true)}
                showsVerticalScrollIndicator={false}
              />
            )
          }
        />
      </DoctorContainer>

      {/* Modal de cancelamento */}

      <PatientAppointmentModal
        visible={showModalAppointment}
        setShowModalAppointment={setShowModalAppointment}
      />
    </Container>
  );
};
