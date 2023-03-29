import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import React from "react";

export default function Appbar({navigation}) {
  return (
    <View style={styles.appbar}>
      <View style={styles.row1}>
        <Icon onPress={() => navigation.navigate('Settings')} name="account-circle" size={32} color="white" />
        <Text style={styles.defaultText}>Signal</Text>
      </View>
      <View style={styles.row1}>
        <Icon name="search" size={28} color="white" />
        <Icon name="more-vert" size={28} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  defaultText: {
    marginTop: 3,
    fontSize: 22,
    color: "white",
  },
  appbar: {
    height: "4%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  row1: {
    // width: '90%',
    gap: 27,
    flexDirection: "row",
    // rowGap: 20,
    // justifyContent: 'space-evenly'
  },
});
