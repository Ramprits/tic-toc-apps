import React, { ReactElement } from "react";
import { View } from "react-native";
import { Text } from "@components";

import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
type GameProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Game">;
};

const Game = (): ReactElement => {
  return (
    <View>
      <Text weight="700">Game screen with custom text</Text>
    </View>
  );
};

export default Game;
