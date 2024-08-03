import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import FavoritsAll from "../SubComponents/FavoritsAll";

export default function Favorits({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.backBotton}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <FontAwesome5 name="long-arrow-alt-left" size={20} color={"#000"} />
          </TouchableOpacity>
        </View>
        <View style={styles.txtWraper}>
          <Text style={styles.txt}>FAVARITIES BOOK</Text>
        </View>
      </View>

      <ScrollView>
        <FavoritsAll bookData="../" />
        <FavoritsAll bookData="../" />
        <FavoritsAll bookData="../" />
        <FavoritsAll bookData="../" />
      </ScrollView>
    </View>
  );
}

styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 40,
  },
  topView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  backBotton: {
    flex: 1,
  },
  txtWraper: {
    flex: 9,
    padding: 10,
    paddingRight: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 17,
  },
});

