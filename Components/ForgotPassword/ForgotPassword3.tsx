import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Input from "../Shared/Input";
import ColorAuthBtn from "../Shared/Color-Auth-Btn";

const ForgotPassword3 = () => {
  return (
    <SafeAreaView className="flex bg-[#fff]">
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View>
        <View className="mt-44">
          <Text className="ml-11 text-2xl font-semibold text-[#000] tracking-[0.5px]">
            Reset your password
          </Text>
        </View>
        <View className="w-[240px] h-5 mt-4 pl-11">
          <Text className="text-sm leading-5 text-[#000] tracking-[0.286px] font-normal">
            Enter your password below
          </Text>
        </View>
        <View className="mt-[86px] w-full flex-row justify-center">
          <Input type="Password" name="Password" icon={true} />
        </View>
        <View className="mt-6 w-full flex-row justify-center">
          <Input type="Password" name="Confirm Password" icon={true} />
        </View>
        <View className="mt-[212px] flex-row h-14 w-full justify-center">
          <ColorAuthBtn name="Reset password" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword3;

const styles = StyleSheet.create({
  /*  Container: {
    flex: 1,
    color: "#fff",
  }, */
  /*  HeaderContainer: {
    marginTop: 175,
  }, */
  /*  HeaderText: {
    marginLeft: 43,
    fontSize: 24,
    fontWeight: "600",
    color: "#000",
    letterSpacing: 0.5,
  }, */
  /*   ParagraphContainer: {
    width: 240,
    height: 20,
    marginTop: 15,
    paddingLeft: 43,
  }, */
  /*  Paragraph: {
    fontSize: 13,
    lineHeight: 19.5,
    color: "#000",
    fontWeight: "400",
    letterSpacing: 0.286,
  }, */
  /* Input: {
    marginTop: 84,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  }, */
  /*  Input2: {
    marginTop: 25,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  }, */
  /*   Submit: {
    marginTop: 212,
    height: 55,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  }, */
});
