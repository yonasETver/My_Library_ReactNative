import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text, Platform } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require("../assets/logo.png")}
          resizeMode="stretch"
          style={styles.img}
        />
      </View>
      <View style={styles.body}>
        <TouchableOpacity
          style={styles.txt}
          onPress={() => navigation.navigate("AllBook")}
        >
          <Text style={styles.txtInpu}>See All Book</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.txt}
          onPress={() => navigation.navigate("CurrentReading")}
        >
          <Text style={styles.txtInpu}>Current Reading Book</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.txt}
          onPress={() => navigation.navigate("AreadyRead")}
        >
          <Text style={styles.txtInpu}>Aready Read Book</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.txt}
          onPress={() => navigation.navigate("WhishList")}
        >
          <Text style={styles.txtInpu}>My Whishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.txt}
          onPress={() => navigation.navigate("Favorits")}
        >
          <Text style={styles.txtInpu}>My Favorites Book</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.txt}
          onPress={() => navigation.navigate("About")}
        >
          <Text style={styles.txtInpu}>About</Text>
        </TouchableOpacity>

        {visible && (
          <View style={styles.optionFloat}>
            <TouchableOpacity
              style={styles.flotingBgOption}
              onPress={() => navigation.navigate("Gallery")}
            >
              <FontAwesome name="photo" size={20} color={"#9f9f9f"} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.flotingBgOption}
              onPress={() => navigation.navigate("Camera")}
            >
              <FontAwesome name="camera" size={20} color={"#9f9f9f"} />
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={styles.flotingAction}>
        <TouchableOpacity
          style={styles.flotingBg}
          onPress={() => setVisible(!visible)}
        >
          {visible === false ? (
            <FontAwesome name="plus" size={15} color={"#000"} />
          ) : (
            <FontAwesome name="times" size={15} color={"#000"} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
  },
  imgContainer: {
    flex: 3,
  },
  body: {
    flex: 4,
    padding: 15,
    justifyContent: "space-between",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  txt: {
    backgroundColor: "#b7f297",
    borderColor: "black",
    borderWidth: 0.3,
    borderRadius: 5,
    padding: Platform.OS === "android" ? 7 : 12,
  },
  txtInpu: {
    fontSize: Platform.OS === "android" ? 16 : 20,
    textAlign: "center",
  },
  flotingAction: {
    flex: 1,
    alignItems: "flex-end",
    padding: 10,
  },
  flotingBg: {
    backgroundColor: "red",
    height: Platform.OS === "android" ? 50 : 60,
    width: Platform.OS === "android" ? 50 : 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
  },
  optionFloat: {
    position: "absolute",
    bottom: -5,
    right: 15,
  },
  flotingBgOption: {
    backgroundColor: "#04e8dc",
    height: Platform.OS === "android" ? 40 : 50,
    width: Platform.OS === "android" ? 40 : 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
    marginBottom: 10,
  },
});
