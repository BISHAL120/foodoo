import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TransAuthBtn = ({ name }: { name: string }) => {
  return (
    <View style={styles.btnContainer}>
      <Text style={styles.Button}>{name}</Text>
    </View>
  );
};

export default TransAuthBtn;

const styles = StyleSheet.create({
  btnContainer: {
    maxWidth: "90%",
    width: 342,
    backgroundColor: "#ffffff",
    borderRadius: 100,
    borderBlockColor: "#000000",
    borderWidth: 1,
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
