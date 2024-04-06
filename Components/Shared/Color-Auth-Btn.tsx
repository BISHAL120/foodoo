import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ColorAuthBtn = ({ name }: { name: string }) => {
  return (
    <View className="max-w-[90%] w-[342px] bg-[#FBDE3F] rounded-[100px]">
      <Text className="my-[14px] text-center text-[17px] leading-6 font-semibold text-black tracking-[0.374px]">
        {name}
      </Text>
    </View>
  );
};

export default ColorAuthBtn;

const styles = StyleSheet.create({
  /*   btnContainer: {
    maxWidth: "90%",
    width: 342,
    backgroundColor: "#FBDE3F",
    borderRadius: 100,
  }, */
  /*   Button: {
    marginVertical: 14,
    textAlign: "center",
    fontSize: 17,
    lineHeight: 25,
    fontWeight: "600",
    color: "#000000",
    letterSpacing: 0.374,
  }, */
});
