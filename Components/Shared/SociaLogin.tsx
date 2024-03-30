import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

interface IconTypeProps {
  type: "Google" | "Facebook";
}

const SocialLogin = ({ type }: IconTypeProps) => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.Button}>
        {type === "Google" && (
          <Image source={require("../../assets/google.png")} />
        )}

        {type === "Facebook" && (
          <Image source={require("../../assets/facebook.png")} />
        )}
        <Text style={styles.Text}>Login with Google</Text>
      </View>
    </Pressable>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({
  container: {
    width: 342,
    height: 55,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 72,
  },
  Button: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 21,
  },
  Text: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.352,
    color: "#000000",
    fontWeight: "500",
  },
});
