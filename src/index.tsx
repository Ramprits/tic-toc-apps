import React, { ReactElement } from "react";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";
import { Game, Home } from "@screens";

export default function App(): ReactElement {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
      <Game />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : "",
    backgroundColor: "#fcf4f4",
  },
});
