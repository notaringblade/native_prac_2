import { StyleSheet, Text, View } from "react-native";

import React from "react";
import ChatScreen from "./chatscreen";
import Appbar from "../appbar/appbar";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      {/* <StatusBar /> */}
      <Appbar navigation = {navigation}/>
      <ChatScreen />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      // height: '100%',
        paddingTop: 0,
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: "#121212",
      },
});
