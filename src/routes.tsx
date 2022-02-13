import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import React from "react";
import Home from "./screens/Home";
import Details from "./screens/Details";
import Search from "./screens/Search";

const Routes: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            headerShown: false
          }}  
        />
        <Stack.Screen name="Detail" component={Details} />
        <Stack.Screen 
          name="Search" 
          component={Search} 
          options={{
            headerShown: false
          }}  
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
