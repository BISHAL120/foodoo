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

const ForgotPassword2 = () => {
  return (
    <SafeAreaView className="flex bg-[#fff] flex-col items-center">
      <StatusBar barStyle={"dark-content"} backgroundColor="#fff" />
      <View className="w-full flex-row justify-center mt-[229px]">
        <View className="w-20 h-20 bg-[#FBDE3F] rounded-full justify-center items-center">
          <Image source={require("../../assets/email check.png")} />
        </View>
      </View>
      <View className="mt-6 w-[148px] h-9">
        <Text className="text-2xl text-center h-9 font-semibold text-[#000] tracking-[0.528px]">
          Check email
        </Text>
      </View>
      <View className="w-60 h-10 mt-4">
        <Text className="text-center text-[13px] leading-5 text-[#000] font-normal tracking-[0.286px]">
          Please check your email to create a new password
        </Text>
      </View>
      <View className="w-[215px] h-5 mt-8">
        <Text className="text-center text-[13px] leading-5 text-[#000] font-normal tracking-[0.286px]">
          Email not received? <Text className="font-semibold">Resubmit</Text>
        </Text>
      </View>
      <View className="mt-[197px] w-full h-14 flex-row justify-center">
        <ColorAuthBtn name="Continue" />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword2;

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
  /* Image: {
    width: 81,
    height: 81,
    backgroundColor: "#FBDE3F",
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
  }, */
  /*   HeaderContainer: {
    marginTop: 24,
    width: 148,
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
    width: 240,
    height: 40,
    marginTop: 16,
  }, */
  /*   ParagraphContainer2: {
    width: 215,
    height: 20,
    marginTop: 32,
  }, */
  /*   Paragraph: {
    textAlign: "center",
    fontSize: 13,
    lineHeight: 19.5,
    color: "#000",
    fontWeight: "400",
    letterSpacing: 0.286,
  }, */
  /*   TextLink: {
    fontWeight: "600",
  }, */
  /*   Submit: {
    marginTop: 197,
    width: "100%",
    height: 55,
    flexDirection: "row",
    justifyContent: "center",
  }, */
});
