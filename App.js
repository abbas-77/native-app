import { StyleSheet, View, StatusBar, Text, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permission from "expo-permissions";
import * as Location from "expo-location";
import { useEffect, useState } from "react";

function App() {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
      });
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(location)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
