import { StyleSheet, View, StatusBar, Text } from "react-native";
import { useFonts } from "expo-font";

function App() {
  let [fontsLoaded] = useFonts({
    vazir: require("./assets/fonts/Vazir.ttf"),
  });

  if (!fontsLoaded) return null;

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
  text: {
    fontSize: 25,
    fontFamily: "vazir",
  },
});

export default App;
