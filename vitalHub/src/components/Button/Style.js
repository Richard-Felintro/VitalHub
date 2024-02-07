import styled from "styled-components";

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: 90%;
  height: 44px;

  background-color: #496bba;
  border: 1px solid #496bba;
  border-radius: 5px;

  margin-top: 15px;
  padding: 10px 8px 10px 8px;
`;

export const ButtonGoogle = styled(Button)`
  flex-direction: row;
  background-color: #fafafa;
  justify-content: space-evenly;
`;
