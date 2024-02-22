import styled from "styled-components";

export const PatientImage = styled.Image`
  width: 90%;
  height: 40%;
  border-radius: 10px;
`;

export const PatientModal = styled.View`
  flex: 1;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: flex-end
`;

export const ModalContent = styled.View`
  width: 100%;
  height: 80%;
  border-radius: 10px 10px 0 0;

  padding: 30px 30px 10px;
  background-color: #fff;
  align-items: center;
  justify-content: space-evenly;
`;

export const ModalText = styled.Text`
  font-size: 16px;
  color: #5f5c6b;

  width: 270px;
  line-height: 22px;

  text-align: center;
  margin-top: 10px;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
