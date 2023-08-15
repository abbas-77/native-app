import { StyleSheet, View, StatusBar, Text, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permission from "expo-permissions";
import { useEffect, useState } from "react";

function App() {
  const [imageUri, setImageUri] = useState();
  const requestPermission = async () => {
    //give permission with image-picker
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!result.granted)
      alert("you need to enable permission to access the library");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) setImageUri(result.uri);
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="select img" onPress={selectImage} />
      <Image
        source={{ uri: imageUri }}
        style={{ width: 200, height: 200, marginTop: 20 }}
      />
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
