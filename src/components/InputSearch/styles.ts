import styled from "styled-components/native";
import { TextInput } from "react-native";

export const CenteredView = styled.View`
  align-items: center;
`;

export const InputTextSearch = styled(TextInput).attrs({
  width: 300,
  height: 50,
  backgroundColor: "transparent",
  borderBottomColor: "magenta",
  borderBottomWidth: 1,
  textAlign: "center",
  color: "white",
  fontSize: 20,
})``;
