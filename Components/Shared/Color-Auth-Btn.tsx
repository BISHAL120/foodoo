import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ColorAuthBtn = ({ name }: { name: string }) => {
  return (
    <View style={styles.btnContainer}>
      <Text style={styles.Button}>{name}</Text>
    </View>
  );
};

export default ColorAuthBtn;

const styles = StyleSheet.create({
  btnContainer: {
    maxWidth: "90%",
    width: 342,
    backgroundColor: "#FBDE3F",
    borderRadius: 100,
  },
  Button: {
    marginVertical: 14,
    textAlign: "center",
    fontSize: 17,
    lineHeight: 25,
    fontWeight: "600",
    color: "#000000",
    letterSpacing: 0.374,
  },
});
