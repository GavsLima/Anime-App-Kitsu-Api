import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { Container } from './styles';
import { useSelector } from 'react-redux';

import { IGlobalAnimeId } from '../../store/modules/AnimeDetails/Types';
import { IAnime } from '../../types';
import api from '../../service/api';

const Details: React.FC = () => {
  const animeId = useSelector((state: IGlobalAnimeId) =>  state.anime_id)
  const [animeDetail, setAnimeDetails] = useState<IAnime>({} as IAnime)
  
  useEffect(() => {
    api.get(`/anime?filter[id]=${animeId}`)
    .then(response => {
      setAnimeDetails(response.data.data[0])
      console.log("nome do baui: ")
      console.log(animeDetail.attributes.canonicalTitle)
    })
    .catch(e => console.log(e))
  }, [])

  return (
      <Container>
          <Text>{`Details of:  `}</Text>
      </Container>
  );
}

export default Details;