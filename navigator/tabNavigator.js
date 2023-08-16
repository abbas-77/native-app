import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screen/home";
import Post from "../screen/post";
import Comments from "../screen/comments";
import { Entypo, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import StackNavigator from "./stackNavigator";

function TabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "lightgray",
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "green",
        tabBarBadge: 3,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Entypo name="home" size={24} />,
        }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="local-post-office" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Comments"
        component={Comments}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="comment" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
