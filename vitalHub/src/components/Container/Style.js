import styled from "styled-components";

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;

  background-color: ${(props) => `#${props.bgColor}`};
`;