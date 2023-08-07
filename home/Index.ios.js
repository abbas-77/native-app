import { StyleSheet, Text, View } from "react-native";

function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>IOS!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 50,
  },
});

export default Home;
