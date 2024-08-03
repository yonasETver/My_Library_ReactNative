import React from "react";
import { View, Text, StyleSheet } from "react-native";
View;

export default function AlertMsgBox() {
  return (
    <View style={styles.container}>
      <Text style={styles.msg}>jfhjd sjhdjshjhas sjhhsjh</Text>
    </View>
  );
}

styles = StyleSheet.create({
  container: {},
  msg: {
    backgroundColor: "green",
    padding: 20,
    paddingLeft: 20,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    marginBottom: 10,
  },
});
