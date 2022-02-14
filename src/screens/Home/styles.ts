import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex-grow: 1;
  justify-content: center ;
  align-items: center;
`;

export const AnimeView = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const IconView = styled.View`
  position: absolute;
  top: 70px;
  right: 30px;
  z-index: 10;
`;
