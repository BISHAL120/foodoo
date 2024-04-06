import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

const Input = ({
  name,
  icon = false,
  type = "Password",
}: {
  name: string;
  icon?: boolean;
  type: "Email" | "Password";
}) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <View className="w-[345px] h-[55px]">
      <View className="flex-row items-center">
        <TextInput
          className="flex-shrink-0 w-[342px] h-[55px] pl-[34px] py-[16px] bg-transparent border-black border rounded-[100px] text-[#B4B4B4] capitalize text-[15px] leading-[22.5px] font-normal tracking-[0.33]"
          placeholder={`${name}`}
          keyboardType={`${type === "Email" ? "email-address" : "default"}`}
        />
        {icon && (
          <TouchableOpacity className="right-10" onPress={handleClick}>
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
  /*   InputContainer: {
    width: 345,
    height: 55,
  }, */
  /*   InputView: {
    flexDirection: "row",
    alignItems: "center",
  }, */
  /*   Input: {
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
  }, */
  /*   Icons: {
    // position: "absolute",
    right: 40,
  }, */
});
