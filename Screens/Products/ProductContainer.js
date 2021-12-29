import React, { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator, FlatList } from "react-native";

import ProductList from "./ProductList";

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

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          numColumns={2}
          data={products}
          renderItem={({ item }) => <ProductList key={item.id} item={item} />}
          keyExtractor={(item) => item.name}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  list: {
    marginTop: 5,
  },
});

export default ProductContainer;
