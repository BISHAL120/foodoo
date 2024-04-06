import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Input from "../Shared/Input";
import ColorAuthBtn from "../Shared/Color-Auth-Btn";
import ImageAuthBtn from "../Shared/SociaLogin";

const RegistrationScreen2 = () => {
  return (
    <SafeAreaView className="flex bg-white mt-[40px] items-center">
      <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
      <View>
        <Image source={require("../../assets/Group 34.png")} />
      </View>
      <View className="mt-[30px]">
        <View>
          <Input type="Email" name="Login" />
        </View>
        <View className="mt-[21px]">
          <Input type="Password" name="Password" icon={true} />
        </View>
        <Text className="w-full ml-auto mr-4 text-[15px] leading-[22.5px] text-black tracking-[0.33px] capitalize font-normal mt-[21px]">
          Forget Password?
        </Text>
      </View>
      <View className="mt-[21px]">
        <ColorAuthBtn name={"Login"} />
      </View>
      <View className="w-full flex-row justify-center items-center gap-[17.5px] mt-9">
        <View className="w-[125.4px] mx-0 bg-[#000000] h-[1px]"></View>
        <View>
          <Text>OR</Text>
        </View>
        <View className="w-[125.4px] mx-0 bg-[#000000] h-[1px]"></View>
      </View>
      <View className="mt-[33px]">
        <ImageAuthBtn type="Google" />
      </View>
      <View className="mt-[21px]">
        <ImageAuthBtn type="Facebook" />
      </View>
      <View className="mt-[73px]">
        <Text className="w-[309px] text-center text-[13px] leading-5 text-black font-normal tracking-[.286px]">
          Don’t have an account? <Text className="font-semibold">Sign up</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default RegistrationScreen2;

const styles = StyleSheet.create({
  /*   Container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 40,
    alignItems: "center",
  }, */
  /*   Input: {
    marginTop: 30,
  }, */
  /*   Login2: {
    marginTop: 21,
  }, */
  /*   Password: {
    marginTop: 21,
  }, */
  /*   ForgotPass: {
    width: "100%",
    marginLeft: "auto",
    marginRight: 16,
    fontSize: 15,
    lineHeight: 22.5,
    letterSpacing: 0.33,
    color: "#000000",
    fontWeight: "400",
    textTransform: "capitalize",
    marginTop: 21,
  }, */
  /*   Divider: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 17.5,
    marginTop: 36,
  }, */
  /* DividerLine: {
    width: 125.5,
    marginVertical: 0,
    backgroundColor: "#000000",
    height: 1,
  }, */
  /*   SocialLogin: {
    marginTop: 33,
  }, */
  /*   SocialLogin2: {
    marginTop: 21,
  }, */
  /*   Footer: {
    marginTop: 73,
  }, */
  /*   FooterText: {
    width: 309,
    textAlign: "center",
    fontSize: 13,
    lineHeight: 19.5,
    color: "#000",
    fontWeight: "400",
    letterSpacing: 0.286,
  }, */
  /*   FooterLink: {
    fontWeight: "600",
  }, */
});
