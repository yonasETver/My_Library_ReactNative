import { View, StyleSheet } from "react-native";
import AlertMsgBox from "../SubComponents/AlertMsgBox";

export default function AlertMsg() {
  return (
    <View style={styles.container}>
      <AlertMsgBox />
      <AlertMsgBox />
      <AlertMsgBox />
      <AlertMsgBox />
    </View>
  );
}

styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
