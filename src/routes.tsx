import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { IGlobalAnime } from "./store/modules/AnimeDetails/Types";
import { useSelector } from "react-redux";

import React from "react";
import Home from "./screens/Home";
import Details from "./screens/Details";
import Search from "./screens/Search";

const Routes: React.FC = () => {
  const Stack = createStackNavigator();

  const animeTitle = useSelector((state: IGlobalAnime) => state.anime_title);

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#FE1487",
      card: "#FE1487",
      text: "#FFF",
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            title: 'Back'
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Details}
          options={{ 
            title: animeTitle 
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
