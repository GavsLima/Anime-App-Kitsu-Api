import React from "react";
import { IButtonProps } from "../../types";

import { CenteredView, TouchableAnime, TextAnime } from "./styles";

// import { Container } from './styles';

const ButtonAnime: React.FC<IButtonProps> = ({ attributes, handlePage }) => {
  return (
    <CenteredView>
      <TouchableAnime
        onPress={() =>
          handlePage(attributes.id, 'Detail')
        }
      >
        <TextAnime>{attributes.attributes.canonicalTitle}</TextAnime>
      </TouchableAnime>
    </CenteredView>
  );
};

export default ButtonAnime;
