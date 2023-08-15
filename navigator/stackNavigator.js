import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screen/home";
import Post from "../screen/post";
import Comments from "../screen/comments";

function StackNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      //for all page
      screenOptions={{
        title: "New Post",
        headerStyle: { backgroundColor: "green" },
        headerTintColor: "white",
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
        //for hide header
        // headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        //for this page
        options={{
          title: "New Post",
          headerStyle: { backgroundColor: "green" },
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
          //for hide header
          // headerShown: false,
        }}
      />
      <Stack.Screen name="Post" component={Post} />
      <Stack.Screen name="Comments" component={Comments} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
