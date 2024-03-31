import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { onboarding } from "../../constant/onboarding";
import Onboarding from "./Onboarding";

const Onboardings = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <FlatList
        data={onboarding}
        renderItem={({ item }) => <Onboarding {...item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
      <View style={styles.dots}>
        {onboarding.map((_, i) => {
          return <View style={styles.dot} key={i.toString()} />;
        })}
      </View>
    </View>
  );
};

export default Onboardings;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  dots: {
    marginTop: 50,
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "#FBDE3F",
  },
});
