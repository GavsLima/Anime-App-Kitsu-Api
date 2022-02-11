import React from "react";
import { IAnime } from "../../types";

import { CenteredView, TouchableAnime, TextAnime } from "./styles";

// import { Container } from './styles';

const ButtonAnime: React.FC<IAnime> = ({ attributes }) => {
  return (
    <CenteredView>
      <TouchableAnime>
          <TextAnime>{attributes.canonicalTitle}</TextAnime>
      </TouchableAnime>
    </CenteredView>
  );
};

export default ButtonAnime;
