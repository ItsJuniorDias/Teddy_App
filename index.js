/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./src/App";
import firebase from "@react-native-firebase/app";

import { name as appName } from "./app.json";

const firebaseConfig = {
  apiKey: "AIzaSyArTvrIZ7O8bEXNKyXUi0x2G4RhHIZDjr8",
  authDomain: "myapp-8f5ba.firebaseapp.com",
  databaseURL: "https://myapp-8f5ba-default-rtdb.firebaseio.com",
  projectId: "myapp-8f5ba",
  storageBucket: "myapp-8f5ba.appspot.com",
  messagingSenderId: "289859620402",
  appId: "1:289859620402:web:7d27dd977153639111b62b",
  measurementId: "G-4NH02J1ELQ",
};

firebase.initializeApp(firebaseConfig);

AppRegistry.registerComponent(appName, () => App);
