import RNPickerSelect from "react-native-picker-select";
import { DropdownLabel, DropdownMenu } from "./Style";
import { Container } from "../Container/Style";

export const Dropdown = ({ labelText }) => {
  return (
    <Container>
      <DropdownLabel>{labelText}</DropdownLabel>
      <DropdownMenu />
    </Container>
  );
};
