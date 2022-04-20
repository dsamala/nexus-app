import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import LoginScreen from "./screens/LoginScreen";


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <View>
    //   <Text>Test Text to check and see</Text>
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} /> 
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
