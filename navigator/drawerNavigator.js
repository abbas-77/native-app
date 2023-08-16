import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screen/home";
import Post from "../screen/post";
import Comments from "../screen/comments";

function DrawerNavigator() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Post" component={Post} />
      <Drawer.Screen name="Comments" component={Comments} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
