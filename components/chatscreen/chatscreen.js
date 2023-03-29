import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import React from "react";

export default function ChatScreen() {
  const contacts = [
    { pp: "account-circle", name: "Omkar", text: "has joined signal" },
    { pp: "account-circle", name: "Suhair", text: "has joined signal" },
    { pp: "account-circle", name: "Chppin", text: "has joined signal" },
    { pp: "account-circle", name: "Pinky", text: "has joined signal" },
    { pp: "account-circle", name: "Bus Waali", text: "has joined signal" },
    { pp: "account-circle", name: "Psycho Waali", text: "has joined signal" },
    { pp: "account-circle", name: "Naturals", text: "has joined signal" },
    { pp: "account-circle", name: "Savio", text: "has joined signal" },
    { pp: "account-circle", name: "Mugen Train", text: "has joined signal" },
    { pp: "account-circle", name: "Caly", text: "has joined signal" },
    { pp: "account-circle", name: "Yoruichi", text: "has joined signal" },


  ];

  return (
    <View style={{ height:"97%" }}>
      <FlatList
        data={contacts}
        renderItem={({ item, index, separators }) => (
          <View style={styles.contactView}>
            <TouchableHighlight>
              <View style={{ flexDirection: "row", gap: 12 }}>
                <Icon name={item.pp} size={45} color="white" />
                <View>
                  <Text style={{ color: "white", fontSize: 18 }}>
                    {item.name}
                  </Text>
                  <Text style={{ color: "grey", fontSize: 14 }}>
                   {item.name} {item.text}
                  </Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contactView: {
    // height: '100%',
    margin: 10,
    marginTop: 20
  },
});
