import styled from "styled-components";

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;

  background-color: ${(props) => `#${props.bgColor}`};
`;

export const ContainerRow = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between
`;

export const FieldContent = styled.View`
  margin-bottom: 15px;
  width: 90%;
`;