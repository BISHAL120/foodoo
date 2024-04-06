import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
const Onboarding = ({
  id,
  image,
  tittle,
  description,
}: {
  id: number;
  image: string;
  tittle: string;
  description: string;
}) => {
  const windowWidth = useWindowDimensions().width;
  return (
    <ScrollView horizontal={true}>
      <View style={[{ width: windowWidth }]} key={id}>
        <View className="w-full h-[30px] justify-center items-end pr-[19px] mb-[77px]">
          <Text className="h-[26px] text-[#FBDE3F] font-semibold">Skip</Text>
        </View>
        <Image source={image} className="w-[300px] h-[300px] mx-auto" />
        <View>
          <Text className="text-black text-[26px] font-semibold text-center tracking-[-0.572px] mt-[77px]">
            {tittle}
          </Text>
        </View>
        <View className="w-full items-center">
          <Text className="w-[305px] text-black text-[13px] font-normal text-center tracking-[-0.286px] mt-[20px]">
            {description}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  /*   skipContainer: {
    width: "100%",
    height: 30,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 19,
    marginBottom: 77,
  }, */
  /*  SkipText: {
    height: 26,
    color: "#FBDE3F",
    fontWeight: "600",
  }, */
  /*   HeroImage: {
    width: "100%",
    height: 300,
    marginHorizontal: "auto",
  }, */
  /*   Header: {
    color: "#000000",
    fontSize: 26,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: -0.572,
    marginTop: 77,
  }, */
  /*   paragraphContainer: {
    width: "100%",
    alignItems: "center",
  }, */
  /*   paragraph: {
    width: 305,
    color: "#000000",
    fontSize: 13,
    textAlign: "center",
    fontWeight: "400",
    letterSpacing: -0.286,
    marginTop: 20,
  }, */
});
