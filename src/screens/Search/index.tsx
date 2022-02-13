import React, { useState } from "react";
import InputSearch from "../../components/InputSearch";
import { ScrollSearch, Container, TextSearch, FlatListView } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { FlatList, View } from "react-native";
import api from "../../service/api";
import { IAnime } from "../../types";
import GridCard from "../../components/GridCard/indes";

const Search: React.FC = () => {
  const [text, setText] = useState("");
  const [animeList, setAnimeList] = useState<IAnime[]>([]);

  const handleAnimes = (searchText: string) => {
    api.get(`anime?filter[text]=${searchText}`).then((response) => {
      setAnimeList(response.data.data);
    });
  };

  return (
    <Container>
      <View
        style={{
          flexDirection: "row",
          marginTop: 180,
        }}
      >
        <InputSearch
          value={text}
          onChange={(search: string) => setText(search)}
        />
        <FontAwesome
          name="search"
          size={35}
          color="magenta"
          onPress={() => {
            handleAnimes(text);
            console.log("pressou");
          }}
        />
      </View>
      <FlatListView>
        {animeList && (
          <FlatList
            data={animeList}
            renderItem={({ item }) => (
              <TextSearch>{item.attributes.canonicalTitle}</TextSearch>
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </FlatListView>
    </Container>
  );
};

export default Search;
