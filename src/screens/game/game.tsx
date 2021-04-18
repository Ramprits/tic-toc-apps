import React, { ReactElement } from "react";
import { Button, ScrollView } from "react-native";
import { GradientBackground, Text } from "@components";

import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";

import styles from "./game.styles";
type GameProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Game">;
};

const Game = ({ navigation }: GameProps): ReactElement => {
  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <Text weight="700" style={{ marginBottom: 10 }}>
          Game screen with custom text
        </Text>
        <Button
          title="Go to home page"
          onPress={() => navigation.navigate("Home")}
        ></Button>
      </ScrollView>
    </GradientBackground>
  );
};

export default Game;
