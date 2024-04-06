import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { onboarding } from "../../constant/onboarding";
import Onboarding from "./Onboarding";

const Onboardings = () => {
  return (
    <View className="bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <FlatList
        data={onboarding}
        renderItem={({ item }) => <Onboarding {...item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
      <View className="flex flex-row gap-[5px] mt-[50px] justify-center">
        {onboarding.map((_, i) => {
          return (
            <View
              className="w-[10px] h-[10px] rounded-[10px] bg-[#FBDE3F]"
              key={i.toString()}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Onboardings;

const styles = StyleSheet.create({
  /*   container: {
    backgroundColor: "#fff",
  }, */
  /*   dots: {
    marginTop: 50,
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
  }, */
  /*   dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "#FBDE3F",
  }, */
});
