import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "../Shared/Input";
import ColorAuthBtn from "../Shared/Color-Auth-Btn";

const ForgotPassword1 = () => {
  return (
    <SafeAreaView className="flex bg-[#fff]">
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View>
        <View className="mt-44">
          <Text className="ml-[43px] text-2xl font-semibold text-black tracking-[0.5px]">
            Reset your password
          </Text>
        </View>
        <View className="w-60 h-5 mt-[18px] pl-[43px]">
          <Text className="text-[13px] leading-5 text-black tracking-[0.286px]">
            Enter your registered email below
          </Text>
        </View>
        <View className="mt-20 w-full flex-row justify-center">
          <Input type="Email" name="Email" />
        </View>
        <View className="mt-[26px]">
          <Text className="ml-[70px] text-xs leading-5 text-[#000] font-normal tracking-[0.286px]">
            Remember the password? <Text className="font-semibold">Login</Text>
          </Text>
        </View>
        <View className="mt-[248px] h-14 w-full flex-row justify-center">
          <ColorAuthBtn name="Submit" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword1;

const styles = StyleSheet.create({
  /*   Container: {
    flex: 1,
    color: "#fff",
  }, */
  /*   HeaderContainer: {
    marginTop: 175,
  }, */
  /*   HeaderText: {
    marginLeft: 43,
    fontSize: 24,
    fontWeight: "600",
    color: "#000",
    letterSpacing: 0.5,
  }, */
  /*   ParagraphContainer: {
    width: 240,
    height: 20,
    marginTop: 18,
    paddingLeft: 43,
  }, */
  /*   Paragraph: {
    fontSize: 13,
    lineHeight: 19.5,
    color: "#000",
    fontWeight: "400",
    letterSpacing: 0.286,
  }, */
  /*   Input: {
    marginTop: 80,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  }, */
  /*   LoginContainer: {
    marginTop: 26,
  }, */
  /*   LoginText: {
    marginLeft: 70,
    fontSize: 13,
    lineHeight: 19.5,
    color: "#000",
    fontWeight: "400",
    letterSpacing: 0.286,
  }, */
  /*   LoginLink: {
    fontWeight: "600",
  }, */
/*   Submit: {
    marginTop: 248,
    height: 55,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  }, */
});
