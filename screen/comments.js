import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Comments() {
  return (
    <View style={styles.container}>
      <Text>Comments page</Text>
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

export default Comments;
