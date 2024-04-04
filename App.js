import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import CharListScreen from "./screens/ChatListScreen";
import ChatScreen from "./screens/ChatScreen";

const Stack = createStackNavigator(); 
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ChatListScreen" component={CharListScreen} options={{title: 'Chat List'}}/>
        <Stack.Screen name="ChatScreen" component={ChatScreen} options={{title: 'Chat'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}