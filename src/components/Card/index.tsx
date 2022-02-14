import React from "react";
import { Dimensions } from "react-native";
import {
  ImageAnime,
  CenteredView,
  CardView,
  ButtonView,
  TextAnime,
  TouchableAnime,
} from "./styles";
import { ICardProps } from "../../types";

const Card: React.FC<ICardProps> = ({ attributes, handlePage }) => {
  return (
    <CenteredView>
      <CardView style={{ width: Dimensions.get("window").width }}>
        <TouchableAnime
          onPress={() => handlePage(attributes.id, attributes.attributes.canonicalTitle , "Detail")}
        >
          <ImageAnime
            source={{ uri: attributes.attributes.posterImage.small }}
          />
          <ButtonView>
            <TextAnime>{attributes.attributes.canonicalTitle}</TextAnime>
          </ButtonView>
        </TouchableAnime>
      </CardView>
    </CenteredView>
  );
};

export default Card;
