import React from "react";
import { Dimensions } from "react-native";
import {
  ImageAnime,
  CenteredView,
  CardView,
  TouchableBanner,
  TouchableButton,
  TextAnime,
} from "./styles";
import { ICardProps } from "../../types";

const Card: React.FC<ICardProps> = ({ attributes, handlePage }) => {
  return (
    <CenteredView>
      <CardView style={{ width: Dimensions.get("window").width }}>
        <TouchableBanner
          onPress={() =>
            handlePage(
              attributes.id,
              attributes.attributes.canonicalTitle,
              "Detail"
            )
          }
        >
          <ImageAnime
            source={{ uri: attributes.attributes.posterImage.small }}
          />
        </TouchableBanner>
        
        <TouchableButton
           onPress={() =>
            handlePage(
              attributes.id,
              attributes.attributes.canonicalTitle,
              "Detail"
            )
          }
        >
          <TextAnime>
            {attributes.attributes.canonicalTitle}
          </TextAnime>
        </TouchableButton>
       
      </CardView>
    </CenteredView>
  );
};

export default Card;
