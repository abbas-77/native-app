import { StyleSheet, View, StatusBar } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

function App() {
  const orientation = useDeviceOrientation();

  return (
    <View style={styles.container}>
      {/* when you want a hidden or control statusbar use StatusBar */}
      <StatusBar hidden={true} />
      <View
        style={{
          height: orientation === "portrait" ? "30%" : "100%",
          backgroundColor: "black",
          width: "100%",
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});

export default App;
