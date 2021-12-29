import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Button,
} from "react-native";

const { width, height } = Dimensions.get("window");

const ProductCard = ({ item }) => {
  const { name, price, image, countInStock } = item;

  return (
    <View style={styles.container}>
      <Image 
        resizeMode="contain"
        source={{ uri: image }}
        style={styles.image} 
      />
      <View style={styles.card} />
      <Text styles={styles.title}>
        {name.length > 15 ? name.substring(0, 15 - 3) + "..." : name}
      </Text>
      <Text styles={styles.price}>${price}</Text>
      {
        countInStock > 0 ? (
          <View style={{ marginBottom: 60 }}>
            <Button title={"Add"} color={"green"} />
          </View>
        ) : ''
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 20,
    height: width / 1.7,
    borderRadius: 10,
    padding: 10,
    marginTop: 55,
    marginBottom: 5,
    marginLeft: 10,
    alignItems: "center",
    elevation: 8,
    backgroundColor: "white",
  },
  image: {
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 30,
    backgroundColor: "transparent",
    position: "absolute",
    top: -45,
  },
  card: {
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 90,
    marginBottom: 10,
    backgroundColor: "transparent",
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  price: {
    fontSize: 50,
    color: 'orange',
    marginTop: 10,
  }
});

export default ProductCard;
