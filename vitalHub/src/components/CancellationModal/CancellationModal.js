import { Modal } from "react-native";
import { Title } from "../Title/Style";
import { Button, ButtonSecondary } from "../Button/Style";
import {
  PatientModal,
  ModalContent,
  ModalText,
  nav,
  cancel
} from "./Style";
import { ButtonTitle } from "../ButtonTitle/Style";
import { Link } from "../Link/Style";

export const CancellationModal = ({ visible, setShowModal, ...rest }) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <PatientModal>
        <ModalContent>
          <Title>Cancelar consulta</Title>
          <ModalText>
            Ao cancelar essa consulta, abrirá uma possível disponibilidade no
            seu horário, deseja mesmo cancelar essa consulta?
          </ModalText>
          <Button onPress={() => setShowModal(false)}>
            <ButtonTitle color={"#FFF"}>CONFIRMAR</ButtonTitle>
          </Button>
          <ButtonSecondary onPress={() => setShowModal(false)}>
            <Link color={"#344F8F"}>Cancelar</Link>
          </ButtonSecondary>
        </ModalContent>
      </PatientModal>
    </Modal>
  );
};
