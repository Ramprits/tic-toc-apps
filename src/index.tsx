import React, { ReactElement } from "react";
import { StyleSheet, Platform, StatusBar } from "react-native";
import { Game, Home } from "@screens";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  DeliusUnicase_400Regular,
  DeliusUnicase_700Bold,
} from "@expo-google-fonts/delius-unicase";
import { AppBootstrap } from "@components";
import Navigator from "@config/navigator";
export default function App(): ReactElement {
  let [fontsLoaded] = useFonts({
    DeliusUnicase_400Regular,
    DeliusUnicase_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <AppBootstrap>
      <Navigator />
    </AppBootstrap>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : "",
    backgroundColor: "#fcf4f4",
  },
});
