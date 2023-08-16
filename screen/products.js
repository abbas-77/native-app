import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
//save cache in device
import AsyncStorage from "@react-native-async-storage/async-storage";
//save image cache in device
import { Image } from "react-native-expo-image-cache";

function Products() {
  const [products, setProducts] = useState([]);
  const [connected, setConnected] = useState(false);

  const getProducts = async () => {
    try {
      if (connected) {
        const { data } = await axios.get("https://dummyjson.com/products");
        setProducts(data.products);
        await AsyncStorage.setItem("products", JSON.stringify(data.products));
      } else {
        const cacheProducts = await AsyncStorage.getItem("products");
        if (cacheProducts) {
          setProducts(JSON.parse(cacheProducts));
        }
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View>
        <Image uri={item.thumbnail} style={{ width: "100%", height: 200 }} />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Text>{item.title}</Text>
          <Text>{item.price}</Text>
        </View>
        <Text style={{ padding: 20 }}>{item.description}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={products} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Products;
