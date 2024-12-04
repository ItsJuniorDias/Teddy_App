import React, { useEffect } from "react";
import { Alert, View } from "react-native";

import { Button } from "../../components";

import { Container, Text } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useStore } from "../../../../store";
import { useExample } from "../../hooks";

import firebase from "@react-native-firebase/app";
import messaging from "@react-native-firebase/messaging";

export const SignInScreen = () => {
  const navigation = useNavigation();

  const { state } = useExample();

  console.log(state, "STATE");

  const bears = useStore((state) => state.bears);

  const increasePopulation = useStore((state) => state.increasePopulation);
  const removeAllBears = useStore((state) => state.removeAllBears);
  const updateBears = useStore((state) => state.updateBears);

  const requestPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log("Notification permission granted.");
      return true;
    } else {
      Alert.alert(
        "Notification Permission Required",
        "Please enable notifications in settings."
      );
      return false;
    }
  };

  const setupFCM = async () => {
    const permissionGranted = await requestPermission();

    if (!permissionGranted) {
      return;
    }

    try {
      messaging()
        .registerDeviceForRemoteMessages()
        .then((response) => {
          console.log(response, "RESPONSE");
        })
        .catch((error) => {
          console.log(error);
        });

      const token = await messaging().getToken();

      console.log("FCM Token:", token);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setupFCM();

    console.log("ESTOU AQUI");
  }, []);

  return (
    <Container>
      <Text>Sign {bears}</Text>

      <Button title="ADD NUMBER" onPress={() => increasePopulation()} />
      <Button title="REMOVE" onPress={() => removeAllBears()} />
      <Button title="UPDATE" onPress={() => updateBears(27)} />
    </Container>
  );
};
