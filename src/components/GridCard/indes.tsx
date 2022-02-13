import React from "react";
import { ImageAnime, CenteredView, CardView, TextGrid } from "./styles";
import { IAnime } from "../../types";

const GridCard: React.FC<IAnime> = ({ attributes }) => {
  return (
    <CenteredView>
      <CardView>
        <ImageAnime source={{ uri: attributes.posterImage.small }} />
        <TextGrid>teste</TextGrid>
      </CardView>
    </CenteredView>
  );
};

export default GridCard;
