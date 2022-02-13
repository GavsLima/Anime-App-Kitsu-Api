import React, { useEffect, useState } from "react";
import {
  AnimeView,
  BannerView,
  ButtonView,
  Container,
  ImageBg,
  TouchableAnime,
} from "./styles";
import { FlatList, Text } from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import api from "../../service/api";
import { IAnime } from "../../types";
import Card from "../../components/Card";
import ButtonAnime from "../../components/Button";
import { IGlobalAnimeId } from "../../store/modules/AnimeDetails/Types";
import { setNewAnimeId } from "../../store/modules/AnimeDetails/Actions";

const Home: React.FC = () => {
  const [animes, setanimes] = useState<IAnime[]>([]);
  const nav = useNavigation();
  const dispatch = useDispatch();

  const handleAnimeDetail = (id: string, screen: any) => {
    const newAnime: IGlobalAnimeId = {
      anime_id: id,
    };
    dispatch(setNewAnimeId(newAnime));
    nav.navigate(screen);
  };

  useEffect(() => {
    api
      .get("/trending/anime")
      .then((response) => {
        setanimes(response.data.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <ImageBg>
      <Container>
        <FlatList
          style={styles.flatlistContainer}
          data={animes}
          renderItem={({ item }) => (
            <AnimeView>
              <BannerView>
                <TouchableAnime
                  onPress={() => handleAnimeDetail(item.id, "Detail")}
                >
                  <Card id={item.id} attributes={item.attributes} />
                </TouchableAnime>
              </BannerView>
              <ButtonView>
                <ButtonAnime attributes={item} handlePage={handleAnimeDetail} />
              </ButtonView>
            </AnimeView>
          )}
          keyExtractor={(item) => item.id}
          horizontal={true}
        />
      </Container>
    </ImageBg>
  );
};

const styles = StyleSheet.create({
  flatlistContainer: {
    width: "100%",
    marginTop: 150,
  },
});

export default Home;
