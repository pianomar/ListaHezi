import React from 'react'
import { StyleSheet, View, StatusBar } from "react-native";
import { useState } from "react";
import ToDoMainScreen from './pages/ToDoMainScreen'
import Colors from './constants/colors'
import Header from './components/Header'
import ToDoItemScreen from './pages/ToDoItemScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'

export default function App() {

  const onHandlerClickItem =
    (text) => {
      setContent(<ToDoItemScreen itemText={text} />)
    }

  const [content, setContent] = useState(<ToDoMainScreen onHandlerClickItem={onHandlerClickItem} />);

  const [loaded] = useFonts({
    SourceSansPro: require('./assets/fonts/SourceSansPro-Regular.ttf'),
    SourceSansProBold: require('./assets/fonts/SourceSansPro-Bold.ttf')
  });

  if (!loaded) return <AppLoading />

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary} translucent={true} />
      <Header title="ToDoApp" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: "10%",
  },
  container: {
    fontFamily: 'SourceSansProBold'
  }
});