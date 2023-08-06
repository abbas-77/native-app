import Home from "./home/Index";

function App() {
  return <Home />;
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: Platform.OS === "android" ? "blue" : "red",
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   text: {
//     color: "white",
//     ...Platform.select({
//       android: {
//         fontSize: 35,
//         textDecorationLine: "underline",
//       },
//       ios: {
//         fontSize: 40,
//         textDecorationLine: "none",
//       },
//     }),
//   },
// });

export default App;
