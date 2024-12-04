import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import { SignUpScreen } from "./SignUpScreen";

describe("Behavior SignUpScreen", () => {
  const screenRender = <SignUpScreen />;

  it("should render screen", () => {
    const { getByTestId } = render(screenRender);
  });
});
