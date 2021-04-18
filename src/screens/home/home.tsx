import React, { ReactElement } from "react";

import { ScrollView, Image, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
import { GradientBackground, Button } from "@components";
import styles from "./home.styles";
type HomeProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Home">;
};

const Home = ({ navigation }: HomeProps): ReactElement => {
  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require("@assets/favicon.png")} style={styles.logo} />
        <View style={styles.buttons}>
          <Button title="Single Player" />
          <Button title="Multi Player" />
          <Button title="Login" />
          <Button title="Settings" />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

export default Home;
