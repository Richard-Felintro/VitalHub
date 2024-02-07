import styled from "styled-components";

export const Link = styled.Text`
  font-size: 14px;
  color: ${props => `${props.color}`};
  font-family: MontserratAlternates_500Medium;

  text-decoration: underline;
  text-align: left;

  width: 90%;
  margin-top: 15px;
`;
