import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigator/stackNavigator";
import TabNavigator from "./navigator/tabNavigator";

function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

export default App;
