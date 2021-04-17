import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native";
import {
  useFonts,
  DeliusUnicase_400Regular,
  DeliusUnicase_700Bold,
} from "@expo-google-fonts/delius-unicase";
import AppLoading from "expo-app-loading";
import styles from "./app-bootstrap.style";

type AppBootstrapProps = {
  children: ReactNode;
};

const AppBootstrap = ({ children }: AppBootstrapProps) => {
  let [fontsLoaded] = useFonts({
    DeliusUnicase_400Regular,
    DeliusUnicase_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return fontsLoaded ? (
    <SafeAreaView style={styles.container}>{children}</SafeAreaView>
  ) : (
    <AppLoading />
  );
};

export default AppBootstrap;
