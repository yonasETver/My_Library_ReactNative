

import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Animated,
  ActivityIndicator,
} from "react-native";

export default function WhishListAll({ bookData }) {
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        {/* Add Image or any content you want here */}
        <Image source={require("../assets/logo.png")} style={styles.image} />
      </View>
      <View style={styles.btn}>
        {/* Add Button or any content you want here */}
        <View style={styles.button}>
          <Text style={styles.infoText}>Whish to start</Text>
          <Text style={styles.infoText}>05/05/2024</Text>
          <Text style={styles.infoText}>03:16 PM</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: "#d2d2d2",
    marginBottom: 10,
  },
  img: {
    flex: 9, // 90% of the container
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    flex: 3,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  button: {
    backgroundColor: "#b7f297",
    padding: 10,
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
  },
  infoText: {
    color: "black",
    fontSize: 18,
    textAlign: "center",
  },
  details: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#eaeaea",
    borderColor: "white",
    borderWidth: 0.2,
  },
  leftDetails: {
    width: "85%",
    height: 200,
  },
  leftDetailsBorder: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingBottom: 5,
    padding: 2,
    paddingLeft: 10,
  },
  bookImg: {
    height: "100%",
    width: "100%",
  },
  rightDetails: {
    width: "15%",
  },
  rightDetailsRead: {
    width: "100%",
    height: "50%",
    backgroundColor: "#ffb3b3",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  rightDetailsFav: {
    width: "100%",
    height: "50%",
    backgroundColor: "#ffffae",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
});
