import { StyleSheet, View, StatusBar, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permission from "expo-permissions";
import { useEffect } from "react";

function App() {
  const requestPermission = async () => {
    //give permissions with expo-permissions
    // await Permission.askAsync(
    //   Permission.MEDIA_LIBRARY,
    //   Permission.LOCATION_FOREGROUND
    // );
    //give permission with image-picker
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!result.granted)
      alert("you need to enable permission to access the library");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>تکست آزمایشی</Text>
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
