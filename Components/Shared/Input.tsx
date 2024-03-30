import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

const Input = ({ name, icon = false }: { name: string; icon?: boolean }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <View style={styles.InputContainer}>
      <View style={styles.InputView}>
        <TextInput
          style={styles.Input}
          placeholder={`${name}`}
          keyboardType="email-address"
        />
        {icon && (
          <TouchableOpacity style={styles.Icons} onPress={handleClick}>
            {show ? (
              <Feather name="eye" size={16} color="#7D7D7D" />
            ) : (
              <Feather name="eye-off" size={16} color="#7D7D7D" />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  InputContainer: {
    width: 345,
    height: 55,
  },
  InputView: {
    flexDirection: "row",
    alignItems: "center",
    // position: "relative",
  },
  Input: {
    flexShrink: 0,
    width: 342,
    height: 55,
    paddingLeft: 34,
    paddingVertical: 16,
    backgroundColor: "transparent",
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 100,
    color: "#B4B4B4",
    textTransform: "capitalize",
    fontSize: 15,
    lineHeight: 22.5,
    fontWeight: "400",
    letterSpacing: 0.33,
  },
  Icons: {
    // position: "absolute",
    right: 40,
  },
});
