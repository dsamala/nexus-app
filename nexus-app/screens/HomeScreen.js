import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button } from 'react-native-web';

const HomeScreen = () => {
    const navigation = useNavigation();
  return (
    <View>
      <Text>We are in thisssss</Text>
      <Button title="Go to Chat Screen" onPress={() => navigation.navigate("Chat")} />
    </View>
  )
}

export default HomeScreen;