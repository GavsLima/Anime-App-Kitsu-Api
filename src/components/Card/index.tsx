import React from "react";
import { ImageAnime, CenteredView, CardView } from "./styles";
import { IAnime } from "../../types";

const Card: React.FC<IAnime> = ({ attributes }) => {
  return (
    <CenteredView>
      <CardView>
        <ImageAnime source={{ uri: attributes.posterImage.small }} />
      </CardView>
    </CenteredView>
  );
};

export default Card;
