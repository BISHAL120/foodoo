import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import ColorAuthBtn from "../Shared/Color-Auth-Btn";

const ForgotPassword4 = () => {
  return (
    <SafeAreaView className="flex flex-col items-center text-white">
      <StatusBar barStyle={"dark-content"} backgroundColor="#fff" />
      <View className="w-full flex-row justify-center mt-[229px]">
        <View className="w-[81px] h-[81px] bg-[#FBDE3F] rounded-full justify-center items-center">
          <Image source={require("../../assets/Success.png")} />
        </View>
      </View>
      <View className="mt-[24px] w-[222px] h-[36px]">
        <Text className="text-center text-[24px] leading-[36px] font-semibold text-black tracking-[0.528px]">
          Password updated
        </Text>
      </View>
      <View className="w-[201px] h-10 mt-4">
        <Text className="text-center text-[13px] leading-5 text-black font-normal tracking-[0.286px]">
          Congratulation your password has been updated
        </Text>
      </View>
      <View className="mt-[247px] w-full h-[55px] flex-row justify-center">
        <ColorAuthBtn name="Continue" />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword4;

const styles = StyleSheet.create({
  /*   Container: {
    flex: 1,
    color: "#fff",
    flexDirection: "column",
    alignItems: "center",
  }, */
  /*   ImageContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 229,
  }, */
  /*   Image: {
    width: 81,
    height: 81,
    backgroundColor: "#FBDE3F",
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
  }, */
  /*  HeaderContainer: {
    marginTop: 24,
    width: 222,
    height: 36,
  }, */
  /*   HeaderText: {
    textAlign: "center",
    fontSize: 24,
    lineHeight: 36,
    fontWeight: "600",
    color: "#000",
    letterSpacing: 0.528,
  }, */
  /*   ParagraphContainer: {
    width: 201,
    height: 40,
    marginTop: 16,
  }, */
  /*   Paragraph: {
    textAlign: "center",
    fontSize: 13,
    lineHeight: 19.5,
    color: "#000",
    fontWeight: "400",
    letterSpacing: 0.286,
  }, */
  /*   Submit: {
    marginTop: 247,
    width: "100%",
    height: 55,
    flexDirection: "row",
    justifyContent: "center",
  }, */
});
