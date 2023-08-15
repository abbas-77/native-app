import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigator/stackNavigator";

function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
