import styled from "styled-components";
import { RowContainer } from "../../components/DoctorModal/Style";
import { InputLight } from "../../components/Input/Style";
import { FieldContent } from "../../components/Container/Style";

export const GPSimg = styled.Image`
  width: 100%;
`;

export const Row = styled(RowContainer)`
  width: 50%;
`;

export const InputLightSmall = styled(InputLight)`
  width: 75%;
`;

export const FieldContentShort = styled(FieldContent)`
  width: 100%;
`;

export const FormContainer = styled.View`
  height: 350px;
  width: 100%;

  border-radius: 5px;
  align-self: flex-start;
  
  padding: 25px;
  gap: 25px;
  align-items: center;
  z-index: 99;
`;
