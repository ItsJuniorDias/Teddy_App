import React from "react";
import { Button, View } from "react-native";

import { Container, Text } from "./styles";
import { useNavigation } from "@react-navigation/native";

export const SignInScreen = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Text>Sign</Text>

      <Button title="SIGN UP" onPress={() => navigation.navigate("SignUp")} />
    </Container>
  );
};
