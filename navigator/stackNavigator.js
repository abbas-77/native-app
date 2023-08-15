import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screen/home";
import Post from "../screen/post";
import Comments from "../screen/comments";

function StackNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Post" component={Post} />
      <Stack.Screen name="Comments" component={Comments} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
