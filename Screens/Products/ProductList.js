import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

const ProductList = ({ item }) => {
  console.log(`width : ${width / 2}`);
  console.log(`height : ${height / 2}`);

  return (
    <TouchableOpacity style={styles.touch}>
      <View style={styles.container}>
        <Text>{item.brand}</Text>
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
    width: "50%",
  },
});

export default ProductList;
