import styled from "styled-components/native";
import { TextInput } from "react-native";

export const CenteredView = styled.View`
  align-items: center;
`;

export const InputTextSearch = styled(TextInput).attrs({
  height: 50,
  width: "85%",
  backgroundColor: "transparent",
  borderBottomColor: "magenta",
  borderBottomWidth: 1,
  textAlign: "center",
  color: "white",
  fontSize: 20,
})``;
