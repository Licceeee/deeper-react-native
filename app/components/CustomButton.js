import React from "react";
import { Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import colors from "../config/colors";

const CustomButton = ({ title, onPress, color }) => {
  return (
    <TouchableOpacity
      style={[styles.button, color === "action" ? styles.action : styles.dark]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    padding: 10,
    paddingHorizontal: 40,
  },
  dark: {
    backgroundColor: colors.background,
  },
  action: {
    backgroundColor: colors.action,
  },
});
