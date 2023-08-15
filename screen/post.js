import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Post({ route }) {
  return (
    <View style={styles.container}>
      <Text>Post page, id: {route.params.id}</Text>
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

export default Post;
