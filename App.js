import "react-native-gesture-handler";
import { Text, View } from "react-native";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

function App() {
  const netInfo = useNetInfo();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {netInfo.type !== "unknown" && netInfo.isInternetReachable ? (
        <Text style={{ fontSize: 30 }}>connected</Text>
      ) : (
        <Text style={{ fontSize: 30 }}>disconected</Text>
      )}
    </View>
  );
}

export default App;
