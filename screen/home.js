import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

//this func do not have a navigation prop Because it is not in the stack
export const More = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="More..."
      onPress={() => {
        navigation.navigate("Comments");
      }}
    />
  );
};

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>home page</Text>
      <Button
        title="see posts"
        onPress={() => {
          navigation.navigate("Post", { id: 1 });
        }}
      />
      <More />
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

export default Home;
