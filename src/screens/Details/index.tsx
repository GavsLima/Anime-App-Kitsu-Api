import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { Container } from "./styles";
import { useSelector } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

import { IGlobalAnimeId } from "../../store/modules/AnimeDetails/Types";
import { IAnime } from "../../types";
import api from "../../service/api";

const Details: React.FC = () => {
  const animeId = useSelector((state: IGlobalAnimeId) => state.anime_id);

  const [animeDetail, setAnimeDetails] = useState<IAnime>({} as IAnime);

  useEffect(() => {
    api.get(`/anime/${animeId}`)
    .then(response => {
      setAnimeDetails(response.data.data)
      console.log("nome do baui: ")
      console.log(animeDetail)
    })
    .catch(e => console.log(e))
  }, [])

  return (
    <Container>
      <TouchableOpacity onPress={() => {}}>
        <Text>{`Details of: `}</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Details;
