import React from "react";
import { ImageAnime, CenteredView, CardView } from "./styles";
import { IAnime } from "../../types";

const Card: React.FC<IAnime> = ({ attributes }) => {
  return (
    <CenteredView>
      <CardView>
        <ImageAnime
          style={{
            width: attributes.posterImage.meta.dimensions.small.width,
            height: attributes.posterImage.meta.dimensions.small.height,
          }}
          source={{ uri: attributes.posterImage.small }}
        />
      </CardView>
    </CenteredView>
  );
};

export default Card;
