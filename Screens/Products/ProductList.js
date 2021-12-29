import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import ProductCard from "./ProductCard";

const { width, height } = Dimensions.get("window");

const ProductList = ({ item }) => {
  return (
    <TouchableOpacity style={styles.touch}>
      <View style={styles.container}>
        <ProductCard item={item} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2,
    backgroundColor: "gainsboro",
  },
  touch: {
    width: "50%"
  },
});

export default ProductList;
