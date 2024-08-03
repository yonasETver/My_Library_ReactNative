import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function About({navigation}) {
  return (
    <View style={styles.topContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.back}
      >
        <FontAwesome5 name="long-arrow-alt-left" size={20} color={"#000"} />
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.titleTxt}>About The App</Text>
        <Image source={require("../assets/logo.png")} style={styles.img} />
        <Text style={styles.appName}>My Library</Text>
        <Text style={styles.txtMsg}>
          This app help you to make list of book you want to read. mak FAV,,
          Whish list and follow progress
        </Text>
        <Text style={styles.txtMsg}>
          The app wishes to become top library site that has almost all books
          published
        </Text>
        <Text style={styles.txtMsg}>
          This app designed and created by Yonas Tedela
        </Text>
        <Text style={styles.txtMsg}>
          Address Addis Ababa, Ethiopia yonastedela63@gmail.com
        </Text>
        <Text style={styles.txtMsg}>
          © [2024] [MakeSolveApp/school]. All right reserved
        </Text>
      </View>
    </View>
  );
}

styles = StyleSheet.create({
  topContainer:{
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingLeft: 40,
    paddingRight: 40,
  },
  img: {
    width: 150,
    height: 100,
  },
  titleTxt: {
    padding: 20,
    fontSize: 22,
  },
  appName: {
    padding: 20,
    fontWeight: "900",
    fontSize: 18,
  },
  txtMsg: {
    paddingBottom: 20,
    fontSize: 16,
    textAlign: "center",
    fontStyle: "italic",
  },
  back:{
    paddingLeft: 10,
    paddingTop: 10
  },
});
