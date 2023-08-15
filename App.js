import { StyleSheet, View, StatusBar, Text } from "react-native";
import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";

function App() {
  let [fontsLoaded] = useFonts({
    vazir: require("./assets/fonts/Vazir.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>تکست آزمایشی</Text>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
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
  text: {
    fontSize: 25,
    fontFamily: "vazir",
  },
});

export default App;
