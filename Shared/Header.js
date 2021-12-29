import React from "react";
import { StyleSheet, Image, SafeAreaView } from "react-native";
import logo from "./../assets/app/eshop_logo.png";

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} resizeMode="contain" style={styles.logo} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    padding: 20,
    marginTop: 60 // delete later
  },
  logo: {
    height: 50,
  },
});

export default Header;
