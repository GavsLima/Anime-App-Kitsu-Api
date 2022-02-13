import React, { useEffect, useState } from "react";
import YoutubePlayer from "react-native-youtube-iframe";

import {
  Container,
  ImageAnime,
  TextDetail,
  ScrollAnime,
  TextView,
} from "./styles";
import { useSelector } from "react-redux";

import { IGlobalAnimeId } from "../../store/modules/AnimeDetails/Types";
import { IAnimeDetails } from "../../types";
import api from "../../service/api";

const Details: React.FC = () => {
  const animeId = useSelector((state: IGlobalAnimeId) => state.anime_id);

  const [animeDetail, setAnimeDetails] = useState<IAnimeDetails>();

  useEffect(() => {
    api
      .get(`/anime/${animeId}`)
      .then((response) => {
        setAnimeDetails(response.data.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <ScrollAnime>
      <Container>
        <ImageAnime
          style={{
            width:
              animeDetail?.attributes.posterImage.meta.dimensions.small.width,
            height:
              animeDetail?.attributes.posterImage.meta.dimensions.small.height,
          }}
          source={{ uri: animeDetail?.attributes.posterImage.small }}
        />
        <TextView>
          <TextDetail>{animeDetail?.attributes.description}</TextDetail>
        </TextView>
      </Container>
      <YoutubePlayer
        height={250}
        videoId={animeDetail?.attributes.youtubeVideoId}
      />
    </ScrollAnime>
  );
};

export default Details;
