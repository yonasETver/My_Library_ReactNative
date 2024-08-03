import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";

export default function AllBookAvailable({ bookData }) {
  const [visibleDetail, setVisibleDetail] = useState(false);
  const slideAnim = useRef(new Animated.Value(0)).current; // Initial value for slideAnim: 0

  useEffect(() => {
    if (visibleDetail) {
      // Slide up
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      // Slide down
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visibleDetail]);

  const translateY = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [240, 0], // Adjust these values based on where you want to slide from/to
  });

  return (
    <View style={styles.container}>
      <View style={styles.img}>
        {/* Add Image or any content you want here */}
        <Image source={require("../assets/logo.png")} style={styles.image} />

        <Animated.View
          style={[styles.details, { transform: [{ translateY }] }]}
        >
          <View style={styles.leftDetails}>
            <Text style={styles.leftDetailsBorder}>Title: sshg shghsghgs</Text>
            <Text style={styles.leftDetailsBorder}>
              Description: sshg shghsghgs
            </Text>
            <Text style={styles.leftDetailsBorder}>Author: sshg shghsghgs</Text>
            <Text style={styles.leftDetailsBorder}>
              Publisher: sshg shghsghgs
            </Text>
            <Text style={styles.leftDetailsBorder}>Publisher year: 1999</Text>
            <Text style={styles.leftDetailsBorder}>Page#: 123</Text>
          </View>
          <View style={styles.rightDetails}>
            <TouchableOpacity
              style={styles.rightDetailsRead}
              onPress={() => setVisibleDetail(false)}
            >
              <Text>Read</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.rightDetailsFav}
              onPress={() => setVisibleDetail(false)}
            >
              <Text>Wish</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
      <View style={styles.btn}>
        {/* Add Button or any content you want here */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => setVisibleDetail(!visibleDetail)}
        >
          <Text style={styles.buttonText}>View Book Detail</Text>
        </TouchableOpacity>
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
    flex: 1.5,
    marginTop: 5,
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
  buttonText: {
    color: "black",
    fontSize: 16,
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
  },
  leftDetailsBorder: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingBottom: 5,
    padding: 2,
    paddingLeft: 10,
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
