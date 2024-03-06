import { HeaderHome } from "../../components/Header/Style";
import {
  Container,
  DoctorContainer,
  InfoContainer,
} from "../../components/Container/Style";
import { NotificationBell, UserDoctor } from "../../components/Logo/Style";

import { MontSerratWhite, UserText } from "../../components/Text/Style";
import { CalendarHome } from "../../components/CalendarList/CalendarHome";

import { ContainerButton, StethoscopeIcon } from "./Style";
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment";
import { useState } from "react";
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard";
import { ListComponent } from "../../components/List/Style";
import { PatientAppointmentModal } from "../../components/PatientAppointmentModal/PatientAppointmentModal";
import { DoctorModal } from "../../components/DoctorModal/DoctorModal";
import { ButtonSecondary } from "../../components/Button/Style";
import { FontAwesome } from "@expo/vector-icons";

const Consultas = [
  { id: 1, nome: "Richard", situacao: "pendente" },
  { id: 2, nome: "Richard", situacao: "realizado" },
  { id: 3, nome: "Richard", situacao: "cancelado" },
];

export const PatientHomeScreen = ({ navigation }) => {
  async function GoToProfile() {
    navigation.navigate("Profile");
  }

  const [statusLista, setStatusLista] = useState("pendente");

  const [showModalCancel, setShowModalCancel] = useState(false);
  const [showModalAppointment, setShowModalAppointment] = useState(false);
  const [showModalDoctor, setShowModalDoctor] = useState(false);
  return (
    <Container>
      <HeaderHome>
        <ButtonSecondary onPress={(e) => GoToProfile()}>
          <UserDoctor
            source={require("../../assets/ProfileImgPlaceholder.png")}
          />
        </ButtonSecondary>
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

      <StethoscopeIcon>
        <ButtonSecondary onPress={(e) => setShowModalAppointment(true)}>
          <FontAwesome name="stethoscope" size={36} color="white" />
        </ButtonSecondary>
      </StethoscopeIcon>

      {/* Modal de cancelamento */}

      <PatientAppointmentModal
        visible={showModalAppointment}
        setShowModalAppointment={setShowModalAppointment}
        nav={() => navigation.navigate("SelectClinic")}
      />
      <DoctorModal
        visible={showModalDoctor}
        setShowModal={setShowModalDoctor}
        nav={() => navigation.navigate("SelectClinic")}
      />
    </Container>
  );
};
