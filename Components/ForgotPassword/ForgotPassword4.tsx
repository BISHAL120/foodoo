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
    <SafeAreaView style={styles.Container}>
      <StatusBar barStyle={"dark-content"} backgroundColor="#fff" />
      <View style={styles.ImageContainer}>
        <View style={styles.Image}>
          <Image source={require("../../assets/Success.png")} />
        </View>
      </View>
      <View style={styles.HeaderContainer}>
        <Text style={styles.HeaderText}>Password updated</Text>
      </View>
      <View style={styles.ParagraphContainer}>
        <Text style={styles.Paragraph}>
          Congratulation your password has been updated
        </Text>
      </View>
      <View style={styles.Submit}>
        <ColorAuthBtn name="Continue" />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword4;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    color: "#fff",
    flexDirection: "column",
    alignItems: "center",
  },
  ImageContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 229,
  },
  Image: {
    width: 81,
    height: 81,
    backgroundColor: "#FBDE3F",
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
  },
  HeaderContainer: {
    marginTop: 24,
    width: 222,
    height: 36,
  },
  HeaderText: {
    textAlign: "center",
    fontSize: 24,
    lineHeight: 36,
    fontWeight: "600",
    color: "#000",
    letterSpacing: 0.528,
  },
  ParagraphContainer: {
    width: 201,
    height: 40,
    marginTop: 16,
  },
  Paragraph: {
    textAlign: "center",
    fontSize: 13,
    lineHeight: 19.5,
    color: "#000",
    fontWeight: "400",
    letterSpacing: 0.286,
  },
  TextLink: {
    fontWeight: "600",
  },
  Submit: {
    marginTop: 247,
    width: "100%",
    height: 55,
    flexDirection: "row",
    justifyContent: "center",
  },
});
