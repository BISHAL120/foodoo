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

const RegistrationScreen3 = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
      <View>
        <Image source={require("../../assets/Group 34.png")} />
      </View>
      <View style={styles.Input}>
        <View>
          <Input type="Email" name="Login" />
        </View>
        <View style={styles.Password}>
          <Input type="Password" name="Password" icon={true} />
        </View>
        <View style={styles.Password}>
          <Input type="Password" name="Confirm Password" icon={true} />
        </View>
      </View>
      <View style={styles.Login2}>
        <ColorAuthBtn name={"Sign up"} />
      </View>
      <View style={styles.Divider}>
        <View style={styles.DividerLine}></View>
        <View>
          <Text>OR</Text>
        </View>
        <View style={styles.DividerLine}></View>
      </View>
      <View style={styles.SocialLogin}>
        <ImageAuthBtn type="Google" />
      </View>
      <View style={styles.SocialLogin2}>
        <ImageAuthBtn type="Facebook" />
      </View>
      <View style={styles.Footer}>
        <Text style={styles.FooterText}>
          Already have an account? <Text style={styles.FooterLink}>Log in</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default RegistrationScreen3;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Platform.OS === "android" ? 40 : 0,
    alignItems: "center",
  },
  Image: {},
  Input: {
    marginTop: 30,
  },
  Login2: {
    marginTop: 21,
  },
  Password: {
    marginTop: 21,
  },
  ForgotPass: {
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
  },
  Divider: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 17.5,
    marginTop: 36,
  },
  DividerLine: {
    width: 125.5,
    marginVertical: 0,
    backgroundColor: "#000000",
    height: 1,
  },
  SocialLogin: {
    marginTop: 33,
  },
  SocialLogin2: {
    marginTop: 21,
  },
  Footer: {
    marginTop: 73,
  },
  FooterText: {
    width: 309,
    textAlign: "center",
    fontSize: 13,
    lineHeight: 19.5,
    color: "#000",
    fontWeight: "400",
    letterSpacing: 0.286,
  },
  FooterLink: {
    fontWeight: "600",
  },
});
