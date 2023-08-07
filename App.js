import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Pressable,
  View,
  ScrollView,
  StatusBar,
  RefreshControl,
} from "react-native";
import Home from "./home/Index";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  return (
    <View style={styles.container}>
      {/* when you want a space between statusbar and content in ios use SafeAreaView instead of View */}

      {/* when your content more than your view for scroll you should use ScrollView */}
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              setTimeout(() => {
                setRefreshing(false);
                setText("reloaded");
              }, 1500);
            }}
          />
        }
      >
        {/* when you want a hidden or control statusbar use StatusBar */}
        <StatusBar hidden={true} />

        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFGuhj2oU3RgmONvX8m7Er34IEy6ob6HfqGA&usqp=CAU",
          }}
          style={styles.img}
        />

        {/* input with type="text" */}
        <TextInput value={text} onChangeText={setText} style={styles.input} />

        {/* default button */}
        <Button title="clear" color="red" onPress={() => setText("")} />

        {/* Alternative for custom button 
            TouchableOpacity & TouchableHighlight include effect for this
        */}
        <TouchableWithoutFeedback onPress={() => setText("")}>
          <Text style={styles.textButton}>clear</Text>
        </TouchableWithoutFeedback>

        {/* wrapper component, use for more effect for button include when press button and etc. */}
        <Pressable
          onPressIn={() => setText("in")}
          onPressOut={() => setText("out")}
          onLongPress={() => setText("long press...")}
        >
          <Text style={styles.textButton}>clear</Text>
        </Pressable>

        <Text style={styles.text}>android!</Text>

        <Text numberOfLines={2} style={styles.text}>
          {text}
        </Text>
      </ScrollView>
    </View>
    // <Home />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 40,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  input: {
    height: 40,
    width: 250,
    borderColor: "white",
    borderWidth: 2,
    fontSize: 25,
    padding: 10,
    margin: 12,
  },
  textButton: {
    backgroundColor: "red",
    color: "white",
    textAlign: "center",
    fontSize: 20,
    height: 30,
    width: 100,
    margin: 12,
  },
});

export default App;
