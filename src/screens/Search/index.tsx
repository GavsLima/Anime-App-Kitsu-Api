import React, { useState } from "react";
import InputSearch from "../../components/InputSearch";
import { FontAwesome } from "@expo/vector-icons";
import { FlatList, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import api from "../../service/api";
import { IAnime } from "../../types";
import GridCard from "../../components/GridCard";
import { IGlobalAnime } from "../../store/modules/AnimeDetails/Types";
import { setNewAnimeId } from "../../store/modules/AnimeDetails/Actions";

import {
  Container,
  FlatListView,
  IconView,
  ImportView,
} from "./styles";

const Search: React.FC = () => {
  const [text, setText] = useState("");
  const [animeList, setAnimeList] = useState<IAnime[]>([]);

  const handleAnimesList = (searchText: string) => {
    api.get(`anime?filter[text]=${searchText}`).then((response) => {
      setAnimeList(response.data.data);
    });
  };

  const nav = useNavigation();
  const dispatch = useDispatch();

  const handleAnimeDetail = (id: string, title: string , screen: any) => {
    const newAnime: IGlobalAnime = {
      anime_id: id,
      anime_title: title,
    };
    dispatch(setNewAnimeId(newAnime));
    nav.navigate(screen);
  };


  return (
    <Container>
      <IconView>
        <FontAwesome
          name="search"
          size={35}
          color="#D11B70"
          onPress={() => {
            handleAnimesList(text);
          }}
        />
      </IconView>

      <ImportView>
        <InputSearch
          value={text}
          onChange={(search: string) => {
            setText(search);
          }}
          onSubmmit={handleAnimesList}
        />
      </ImportView>

      <FlatListView>
        {animeList && (
          <FlatList
            numColumns={2}
            data={animeList}
            renderItem={({ item }) => (
              <>
                <GridCard attributes={item} handlePage={handleAnimeDetail}  />
              </>
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </FlatListView>
    </Container>
  );
};

export default Search;
