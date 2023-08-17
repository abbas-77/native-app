import "react-native-gesture-handler";
import Products from "./screen/products";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import { Button, Text, View, Platform } from "react-native";
import { useEffect, useRef, useState } from "react";

function App() {
  const registerPushNotification = async () => {
    try {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") return;
      const token = (
        await Notifications.getExpoPushTokenAsync({
          projectId: "8b9dd4dc-977b-41cd-933f-0d9fd32f9f4c",
          //TODO: find variable from Constants.expoConfig?.extra?.eas?.projectId,
        })
      ).data;
      console.log(JSON.stringify(Constants, null, 2));
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    registerPushNotification();
    Notifications.addNotificationReceivedListener((notification) => {
      console.log("-----------", notification);
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
      }}
    ></View>
  );
}

export default App;
