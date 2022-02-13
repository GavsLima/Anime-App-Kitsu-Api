import styled from "styled-components/native";
import { ImageBackground } from "react-native";

export const Container = styled.SafeAreaView`
  flex-grow: 1;
  justify-content: center ;
  align-items: center;
`;

export const ImageBg = styled(ImageBackground).attrs({
    resizeMode: 'cover',
    source: {uri: 'https://img.freepik.com/vetores-gratis/fundo-preto-com-foco-de-luz_1017-27230.jpg?size=626&ext=jpg'},
  })`
    flex-grow: 1;
    justify-content: center;
    width: 100%;
  `;

export const AnimeView = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const BannerView = styled.View`
  flex: 1;
  align-items: center;
`;

export const ButtonView = styled.View`
  flex: 0.2
`;

export const TouchableAnime = styled.TouchableOpacity`
  flex: 1;
`;

export const IconView = styled.View`
  position: absolute;
  top: 90px;
  right: 40px;
`;
