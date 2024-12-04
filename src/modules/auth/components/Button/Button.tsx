import React from "react";
import { View } from "react-native";

import { Touchable, Title } from "./styles";

interface ButtonProps {
  testID?: string;
  title: string;
  onPress: () => void;
}

export const Button = ({
  testID = "touchable_id",
  title,
  onPress,
}: ButtonProps) => {
  return (
    <Touchable testID={testID} onPress={onPress} activeOpacity={0.7}>
      <Title>{title}</Title>
    </Touchable>
  );
};
