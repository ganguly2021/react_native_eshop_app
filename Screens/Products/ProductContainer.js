import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  FlatList,
} from "react-native";

// import products data
const data = require("./../../products.json");

function ProductContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);

    // component unmount
    return () => {
      setProducts([]);
    };
  }, []);

  console.log(data);

  return (
    <View style={styles.container}>
      <Text>Product Container.</Text>
      <View style={styles.list}>
        <FlatList
          horizontal
          data={products}
          renderItem={({ item }) => <Text>{item.brand}</Text>}
          keyExtractor={(item) => item.name}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  list: {
    marginTop: 100,
  },
});

export default ProductContainer;
