import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/chatscreen/homescreen";
import AccountSettings from "./components/account settings/account_setting";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Settings" component={AccountSettings} />
      </Stack.Navigator>
    </NavigationContainer>
    // <HomeScreen />
  );
}

const styles = StyleSheet.create({
 
});
