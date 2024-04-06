import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import ColorAuthBtn from "../Shared/Color-Auth-Btn";
import TransAuthBtn from "../Shared/Trans-Auth-Button";

const RegistrationScreen1 = () => {
  return (
    <SafeAreaView className="flex bg-white">
      <StatusBar barStyle={"dark-content"} backgroundColor="#fff" />
      <View className="items-center">
        <Image source={require("../../assets/Group 7.png")} />
      </View>
      <View className="mt-12">
        <Text className="text-center text-2xl font-semibold text-black tracking-[0.5px]">
          Welcome to Super Foodo
        </Text>
      </View>
      <View className="mt-[15px] items-center">
        <Text className="w-[300px] text-black text-[13px] text-center font-normal tracking-[0.25px]">
          Lorem ipsum dolor sit amet consectetur. Ut cras pellentesque{" "}
        </Text>
      </View>
      <View className="items-center flex-col gap-[13px] mt-[50px]">
        <Pressable>
          <ColorAuthBtn name={"Create Account"} />
        </Pressable>
        <Pressable>
          <TransAuthBtn name={"Login"} />
        </Pressable>
      </View>
      <View className="mt-11 flex-row justify-center mb-[10px]">
        <Text className="w-[309px] text-center text-[13px] leading-5 text-black font-normal tracking-[0.286px]">
          By <Text className="font-semibold">Registering</Text> or{" "}
          <Text className="font-semibold">Login</Text> you have agreed to these{" "}
          <Text className="font-semibold">Terms and Conditions.</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default RegistrationScreen1;

const styles = StyleSheet.create({
  /*   container: {
    flex: 1,
    backgroundColor: "#fff",
  }, */
  /*   Image: {
    alignItems: "center",
  }, */
  /*   welcomeTextContainer: {
    marginTop: 48,
  }, */
  /*   WelcomeText: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
    color: "#000",
    letterSpacing: 0.5,
  }, */
  /*   paragraphContainer: {
    marginTop: 15,
    alignItems: "center",
  }, */
  /*   paragraph: {
    width: 300,
    color: "#000",
    fontSize: 13,
    textAlign: "center",
    fontWeight: "400",
    letterSpacing: 0.25,
  }, */
  /*  AuthButton: {
    marginTop: 50,
    alignItems: "center",
    flexDirection: "column",
    gap: 13,
  }, */
  /*   FooterContainer: {
    marginTop: 45,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
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
