import styled from "styled-components";

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#34898f",
})`
  height: 53px;
  width: 90%;
  border: 2px solid #49b3ba;
  padding: 16px;
  border-radius: 5px;
  margin-top: 15px;

  font-size: 16px;
  color: #34898f;
  font-family: MontserratAlternates_600SemiBold;
  text-align: center;
`;

export const InputSquare = styled(Input)`
  width: 20%;
  aspect-ratio: 1;
  font-size: 40px;
  font-family: MontserratAlternates_600SemiBold;
  padding: 0;
`;

export const InputLight = styled(Input)`
  background-color: #EEEEEE;
  border: 0;
  margin-top: 5px;

  font-size: 14px;
  color: #33303E;
  font-family: MontserratAlternates_500Medium;
  text-align: left;
`;
