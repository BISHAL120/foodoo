import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "../Shared/Input";
import ColorAuthBtn from "../Shared/Color-Auth-Btn";

const ForgotPassword1 = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View>
        <View style={styles.HeaderContainer}>
          <Text style={styles.HeaderText}>Reset your password</Text>
        </View>
        <View style={styles.ParagraphContainer}>
          <Text style={styles.Paragraph}>
            Enter your registered email below
          </Text>
        </View>
        <View style={styles.Input}>
          <Input type="Email" name="Email" />
        </View>
        <View style={styles.LoginContainer}>
          <Text style={styles.LoginText}>
            Remember the password? <Text style={styles.LoginLink}>Login</Text>
          </Text>
        </View>
        <View style={styles.Submit}>
          <ColorAuthBtn name="Submit" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword1;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    color: "#fff",
  },
  HeaderContainer: {
    marginTop: 175,
  },
  HeaderText: {
    marginLeft: 43,
    fontSize: 24,
    fontWeight: "600",
    color: "#000",
    letterSpacing: 0.5,
  },
  ParagraphContainer: {
    width: 240,
    height: 20,
    marginTop: 18,
    paddingLeft: 43,
  },
  Paragraph: {
    fontSize: 13,
    lineHeight: 19.5,
    color: "#000",
    fontWeight: "400",
    letterSpacing: 0.286,
  },
  Input: {
    marginTop: 80,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  LoginContainer: {
    marginTop: 26,
  },
  LoginText: {
    marginLeft: 70,
    fontSize: 13,
    lineHeight: 19.5,
    color: "#000",
    fontWeight: "400",
    letterSpacing: 0.286,
  },
  LoginLink: {
    fontWeight: "600",
  },
  Submit: {
    marginTop: 248,
    height: 55,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
});
