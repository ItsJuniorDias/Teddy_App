import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Button } from "react-native";

export const SignInScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Text</Text>

      <Button
        onPress={() => navigation.navigate("SignUp")}
        title="Clicou Aqui"
      />
    </View>
  );
};
