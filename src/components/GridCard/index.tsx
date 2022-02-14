import React from "react";
import { Container, ImageAnime, TextGrid, TextView, TouchableAnime } from "./styles";
import { ICardProps } from "../../types";

const GridCard: React.FC<ICardProps> = ({ attributes, handlePage }) => {
  return (
    <Container>
      <TouchableAnime
         onPress={() => handlePage(attributes.id, "Detail")}
      >
      <ImageAnime source={{ uri: attributes.attributes.posterImage.small }} />
      </TouchableAnime>

      <TextView>
        <TextGrid>{attributes.attributes.canonicalTitle}</TextGrid>
      </TextView>
    </Container>
  );
};

export default GridCard;
