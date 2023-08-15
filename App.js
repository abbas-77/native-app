import react, { useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Pressable,
  Text,
  Alert,
  Modal,
  Image,
  Button,
  Dimensions,
} from "react-native";

function App() {
  const [modal, setmodal] = useState(false);
  return (
    <View style={styles.container}>
      {/* when you want a hidden or control statusbar use StatusBar */}
      <StatusBar hidden={true} />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          Alert.alert("modal has been close");
          setmodal(!modal);
        }}
      >
        <View style={styles.centerView}>
          <View style={styles.modalView}>
            <Image
              source={{ uri: "https://picsum.photos/300/300" }}
              style={styles.img}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setmodal(!modal);
              }}
            >
              <Text style={styles.textStyle}>close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => {
          setmodal(!modal);
          // alert for react-native
          // Alert.alert("Title", "message for my alert!", [
          //   {
          //     text: "YES",
          //     onPress: () => {
          //       console.log("press yes");
          //     },
          //   },
          //   {
          //     text: "NO",
          //     onPress: () => {
          //       console.log("press no");
          //     },
          //   },
          // ]);
        }}
      >
        <Text style={styles.textStyle}>Click me!</Text>
      </Pressable>
      {/* see the scale and width & height of screen */}
      <Button
        title="press"
        onPress={() => {
          alert(JSON.stringify(Dimensions.get("screen")));
        }}
      />
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
  button: {
    borderRadius: 25,
    padding: 15,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "blue",
  },
  buttonClose: {
    backgroundColor: "red",
  },
  textStyle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  modalView: {
    backgroundColor: "white",
    margin: 20,
    borderRadius: 25,
    padding: 30,
    alignItems: "center",
    //shadow for android
    elevation: 2,
    //shadow for ios
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  img: {
    width: 300,
    height: 300,
    marginBottom: 10,
  },
});

export default App;
