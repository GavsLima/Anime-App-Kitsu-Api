import React, { useEffect, useState } from "react";
import { AnimeView, Container, IconView } from "./styles";
import { FlatList, ImageBackground, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import { Dimensions } from "react-native";

import api from "../../service/api";
import { IAnime } from "../../types";
import Card from "../../components/Card";
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

  const goToSearch = (screen: any) => {
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
    <Container>
      <IconView>
        <FontAwesome
          name="search"
          size={35}
          color="magenta"
          onPress={() => {
            goToSearch("Search");
          }}
        />
      </IconView>
      <FlatList
        data={animes}
        renderItem={({ item }) => (
          <ImageBackground
            resizeMode="cover"
            source={{ uri: item.attributes.coverImage.small }}
            style={{ flex: 1, justifyContent: "center", width: "100%" }}
            blurRadius={6}
          >
            <AnimeView style={{ width: Dimensions.get("window").width }}>
              <Card attributes={item} handlePage={handleAnimeDetail} />
            </AnimeView>
          </ImageBackground>
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </Container>
  );
};

export default Home;
