import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import { Button } from "./Button";

describe("Behavior Button", () => {
  const onPress = jest.fn();

  const screenRender = <Button title="ADD NUMBER" onPress={onPress} />;

  it("should render button", () => {
    const { getByTestId } = render(screenRender);

    const button = getByTestId("touchable_id");

    fireEvent.press(button);

    expect(onPress).toHaveBeenCalled();
  });
});
