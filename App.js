import { StyleSheet, View, StatusBar, Text, Button, Image } from "react-native";
import useLocation from "./hooks/useLocation";

function App() {
  const location = useLocation();
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
