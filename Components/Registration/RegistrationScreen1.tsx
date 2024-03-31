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
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor="#fff" />
      <View style={styles.Image}>
        <Image source={require("../../assets/Group 7.png")} />
      </View>
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.WelcomeText}>Welcome to Super Foodo</Text>
      </View>
      <View style={styles.paragraphContainer}>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur. Ut cras pellentesque{" "}
        </Text>
      </View>
      <View style={styles.AuthButton}>
        <Pressable>
          <ColorAuthBtn name={"Create Account"} />
        </Pressable>
        <Pressable>
          <TransAuthBtn name={"Login"} />
        </Pressable>
      </View>
      <View style={styles.FooterContainer}>
        <Text style={styles.FooterText}>
          By <Text style={styles.FooterLink}>Registering</Text> or{" "}
          <Text style={styles.FooterLink}>Login</Text> you have agreed to these{" "}
          <Text style={styles.FooterLink}>Terms and Conditions.</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default RegistrationScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Image: {
    alignItems: "center",
  },
  welcomeTextContainer: {
    marginTop: 48,
  },
  WelcomeText: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
    color: "#000",
    letterSpacing: 0.5,
  },
  paragraphContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  paragraph: {
    width: 300,
    color: "#000",
    fontSize: 13,
    textAlign: "center",
    fontWeight: "400",
    letterSpacing: 0.25,
  },
  AuthButton: {
    marginTop: 50,
    alignItems: "center",
    flexDirection: "column",
    gap: 13,
  },
  FooterContainer: {
    marginTop: 45,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
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
