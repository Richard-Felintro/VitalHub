import RNPickerSelect from "react-native-picker-select";

import styled from "styled-components";

export const DropdownMenu = styled.RNPickerSelect`
  width: 100%;
  height: 53px;

  border-radius: 5px;
  border: 2 solid #60bfc5;

  color: #34898f;
  font-size: 14px;
  font-family: MontserratAlternates_600SemiBold;
  text-align: left;
  text-align-vertical: center;
`;

export const DropdownLabel = styled.Text`
  color: black;
  font-size: 14px;
  font-family: Quicksand_600SemiBold;
  text-align: left;
`;
