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
    <SafeAreaView style={styles.Container}>
      <StatusBar barStyle={"dark-content"} backgroundColor="#fff" />
      <View style={styles.ImageContainer}>
        <View style={styles.Image}>
          <Image source={require("../../assets/email check.png")} />
        </View>
      </View>
      <View style={styles.HeaderContainer}>
        <Text style={styles.HeaderText}>Check email</Text>
      </View>
      <View style={styles.ParagraphContainer}>
        <Text style={styles.Paragraph}>
          Please check your email to create a new password
        </Text>
      </View>
      <View style={styles.ParagraphContainer2}>
        <Text style={styles.Paragraph}>
          Email not received? <Text style={styles.TextLink}>Resubmit</Text>
        </Text>
      </View>
      <View style={styles.Submit}>
        <ColorAuthBtn name="Continue" />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword2;

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
    width: 148,
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
    width: 240,
    height: 40,
    marginTop: 16,
  },
  ParagraphContainer2: {
    width: 215,
    height: 20,
    marginTop: 32,
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
    marginTop: 197,
    width: "100%",
    height: 55,
    flexDirection: "row",
    justifyContent: "center",
  },
});
