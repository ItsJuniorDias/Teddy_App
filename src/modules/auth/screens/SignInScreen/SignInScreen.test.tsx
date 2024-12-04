import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import { SignInScreen } from "./SignInScreen";

describe("Behavior SignInScreen", () => {
  const screenRender = <SignInScreen />;

  it("should render screen", () => {
    const { getByTestId } = render(screenRender);
  });
});
