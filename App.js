import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TelaPrincipal from "./Navigation/telaPrinc";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./Navigation/stack";
import { firebaseConfig } from "./options";
import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack></Stack>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
