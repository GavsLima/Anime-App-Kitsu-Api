import styled from "styled-components/native";
import { Button } from "react-native";

export const CenteredView = styled.View`
  align-items: center;
`;

export const CardView = styled.View`
  padding-right: 20px;
  padding-left: 20px;
  margin-top: 40%;
  align-items: center;
`;

export const ImageAnime = styled.Image`
  width: 100%;
  height: 90%;
  margin-bottom: 10px;
`;

export const ButtonView = styled.View`
  align-items: center;
  border-radius: 15px;
  
  
`;
export const ButtonAnime = styled(Button).attrs({
  color: '#FD1586',
})`
  
`;

export const TouchableBanner = styled.TouchableOpacity`
  width: 100%;
`;

export const TouchableButton = styled.TouchableOpacity`
  align-items: center;
  background-color: #FD1586;
  border-radius: 20px;
  width: 250px;
  padding: 10px;
`;

export const TextAnime = styled.Text`
  color: #ffff;
  text-align: center;
`;