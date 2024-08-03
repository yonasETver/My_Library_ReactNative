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
import * as Font from "expo-font";

// Load fonts asynchronously
const fetchFonts = () => {
  return Font.loadAsync({
    "custom-font": require("../assets/fonts/GaMaamliRegular.ttf"),
  });
};

export default function CurrentReadAll({ bookData }) {
  const [visibleDetail, setVisibleDetail] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const slideAnim = useRef(new Animated.Value(0)).current; // Initial value for slideAnim: 0

  useEffect(() => {
    // Load fonts when the component mounts
    const loadFonts = async () => {
      try {
        await fetchFonts();
        setFontsLoaded(true);
      } catch (error) {
        console.error("Error loading fonts:", error);
      }
    };

    loadFonts();
  }, []);

  useEffect(() => {
    // Animate the sliding effect based on visibility
    Animated.timing(slideAnim, {
      toValue: visibleDetail ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visibleDetail]);

  const translateY = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [240, 0], // Adjust these values based on where you want to slide from/to
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.img}>
        {/* Add Image or any content you want here */}
        <Image source={require("../assets/logo.png")} style={styles.image} />

        <Animated.View
          style={[styles.details, { transform: [{ translateY }] }]}
        >
          <View style={styles.leftDetails}>
            <Image
              source={require("../assets/logo.png")}
              resizeMode="stretch"
              style={styles.bookImg}
            />
            <View style={styles.bookInfo}>
              <Text style={styles.bookInfoTxt}>Started</Text>
              <Text style={styles.bookInfoTxt}>05/05/2024</Text>
              <Text style={styles.bookInfoTxt}>03:00 PM</Text>
            </View>
          </View>
          <View style={styles.rightDetails}>
            <TouchableOpacity
              style={styles.rightDetailsRead}
              onPress={() => setVisibleDetail(false)}
            >
              <Text>Done</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.rightDetailsFav}
              onPress={() => setVisibleDetail(false)}
            >
              <Text>FAV</Text>
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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
    transform: [{ translateY: 200 }], // Ensure it starts off-screen
  },
  leftDetails: {
    width: "85%",
    height: 150,
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
  bookInfo: {
    position: "absolute",
    height: "100%",
    width: "100%",
    left: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  bookInfoTxt: {
    color: "white",
    fontSize: 18,
    fontFamily: "custom-font",
  },
});
