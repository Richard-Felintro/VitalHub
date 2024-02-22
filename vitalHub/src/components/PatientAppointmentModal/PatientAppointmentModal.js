import { Modal } from "react-native";
import {
  ModalContent,
  PatientModal,
  PatientImage,
  RowContainer,
} from "./Style";
import { Title } from "../Title/Style";
import { UserText } from "../Text/Style";
import { ButtonTitle } from "../ButtonTitle/Style";
import { Button, ButtonSecondary } from "../Button/Style";
import { Link } from "../Link/Style";
import { InputBox } from "../Input/InputBox";

export const PatientAppointmentModal = ({
  visible,
  setShowModalAppointment,
  ...rest
}) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <PatientModal>
        <ModalContent>
          <Title>Agendar Consulta</Title>
          <InputBox
            labelText={"Informe o tipo de consulta"}
            placeholder={"Tipo de consulta"}
            height={53}
          />
          <InputBox
            labelText={"Informe a localização desejada"}
            placeholder={"Informe a localização"}
            height={53}
          />
          <Button>
            <ButtonTitle color={"#FFF"}>CONTINUAR</ButtonTitle>
          </Button>
          <ButtonSecondary onPress={() => setShowModalAppointment(false)}>
            <Link color={"#344F8F"}>Cancelar</Link>
          </ButtonSecondary>
        </ModalContent>
      </PatientModal>
    </Modal>
  );
};
