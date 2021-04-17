import { StatusBar } from "expo-status-bar";
import React, { ReactElement } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App(): ReactElement {
  return (
    <View style={styles.container}>
      <Text style={{ color: "green" }}>Open up App</Text>
      <StatusBar style="auto" />
    </View>
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
