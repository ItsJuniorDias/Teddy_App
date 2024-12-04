import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { SignInScreen, SignUpScreen } from "../screens";

const RootStack = createNativeStackNavigator({
  initialRouteName: "SignIn",
  screenOptions: {
    headerShown: false,
  },
  screens: {
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
  },
});

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export const NavigationAuth = createStaticNavigation(RootStack);
