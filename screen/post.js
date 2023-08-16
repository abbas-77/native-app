import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Post() {
  return (
    <View style={styles.container}>
      <Text>Post page</Text>
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
