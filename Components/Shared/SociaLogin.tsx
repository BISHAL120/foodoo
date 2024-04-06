import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

interface IconTypeProps {
  type: "Google" | "Facebook";
}

const SocialLogin = ({ type }: IconTypeProps) => {
  return (
    <Pressable className="w-[342px] h-[55px] border border-black rounded-[100px] justify-center items-center pl-[72px]">
      <View className="w-full flex-row items-center gap-[21px]">
        {type === "Google" && (
          <Image source={require("../../assets/google.png")} />
        )}

        {type === "Facebook" && (
          <Image source={require("../../assets/facebook.png")} />
        )}
        <Text className="text-black text-base leading-6 tracking-wide font-medium">
          Login with Google
        </Text>
      </View>
    </Pressable>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({
  /*   container: {
    width: 342,
    height: 55,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 72,
  }, */
  /*   Button: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 21,
  }, */
  /*   Text: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.352,
    color: "#000000",
    fontWeight: "500",
  }, */
});
