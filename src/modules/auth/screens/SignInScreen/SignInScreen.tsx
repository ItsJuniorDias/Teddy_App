import React from "react";
import { View } from "react-native";

import { Button } from "../../components";

import { Container, Text } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useStore } from "../../../../store";
import { useExample } from "../../hooks";

export const SignInScreen = () => {
  const navigation = useNavigation();

  const { state } = useExample();

  console.log(state, "STATE");

  const bears = useStore((state) => state.bears);

  const increasePopulation = useStore((state) => state.increasePopulation);
  const removeAllBears = useStore((state) => state.removeAllBears);
  const updateBears = useStore((state) => state.updateBears);

  return (
    <Container>
      <Text>Sign {bears}</Text>

      <Button title="ADD NUMBER" onPress={() => increasePopulation()} />
      <Button title="REMOVE" onPress={() => removeAllBears()} />
      <Button title="UPDATE" onPress={() => updateBears(27)} />
    </Container>
  );
};
