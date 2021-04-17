import React, { ReactElement } from "react";
import { View, Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
type HomeProps = {
  navigation: StackNavigationProp<StackNavigatorParams, "Home">;
};

const Home = ({ navigation }: HomeProps): ReactElement => {
  return (
    <View>
      <Text
        style={{
          fontFamily: "DeliusUnicase_400Regular",
          marginBottom: 10,
          marginTop: 10,
        }}
      >
        Home screen
        <Button
          title="Click me"
          onPress={() => navigation.navigate("Game")}
        ></Button>
      </Text>
    </View>
  );
};

export default Home;
