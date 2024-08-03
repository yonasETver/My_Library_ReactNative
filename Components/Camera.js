
import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function Camera({navigation}) {
  const [placeHolder, setPlaceHolder] = useState(true);

  return (
    <ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.back}>
        <FontAwesome5 name="long-arrow-alt-left" size={20} color={"#000"} />
      </TouchableOpacity>
      <View style={styles.container}>
        {placeHolder ? (
          <TouchableOpacity onPress={() => {}} style={styles.img}>
            <FontAwesome name="camera" size={40} color={"#b7f297"} />
          </TouchableOpacity>
        ) : (
          <Image source={require("../assets/logo.png")} style={styles.img} />
        )}
        <Text style={styles.txtDetail}>Enter Book Detail</Text>
        <TextInput placeholder="Enter Book Title" style={styles.input} />
        <TextInput placeholder="Enter Book Author" style={styles.input} />
        <TextInput placeholder="Enter Book Description" style={styles.input} />
        <TextInput placeholder="Enter Book Publisher" style={styles.input} />
        <TextInput
          placeholder="Enter Book Publisher Year"
          style={styles.input}
        />
        <TextInput placeholder="Enter Page Number" style={styles.input} />
        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.btnTxt}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  back:{
    paddingLeft: 10,
    paddingTop: 10
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  img: {
    width: 150,
    height: 100,
    backgroundColor: "#cdcdcd",
    justifyContent: "center",
    alignItems: "center",
  },
  txtDetail: {
    margin: 10,
    padding: 10,
    borderColor: "black",
    borderWidth: 0.5,
    textAlign: "center",
    width: "100%",
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 30
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    height: 40,
    width: "100%",
    fontSize: 20,
    marginBottom: 20,
  },
  submitBtn: {
    padding: 10,
    backgroundColor: "#b7f297",
    width: '60%',
    marginTop: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTxt:{
    fontSize: 16
  }
});

