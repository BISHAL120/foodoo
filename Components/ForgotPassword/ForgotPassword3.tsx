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
    <SafeAreaView style={styles.Container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View>
        <View style={styles.HeaderContainer}>
          <Text style={styles.HeaderText}>Reset your password</Text>
        </View>
        <View style={styles.ParagraphContainer}>
          <Text style={styles.Paragraph}>Enter your password below</Text>
        </View>
        <View style={styles.Input}>
          <Input type="Password" name="Password" icon={true} />
        </View>
        <View style={styles.Input2}>
          <Input type="Password" name="Confirm Password" icon={true} />
        </View>
        <View style={styles.Submit}>
          <ColorAuthBtn name="Reset password" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword3;

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
    marginTop: 15,
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
    marginTop: 84,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  Input2: {
    marginTop: 25,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  Submit: {
    marginTop: 212,
    height: 55,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
});
