import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
const OnboardingSix = ({
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
        <View style={styles.skipContainer}>
          <Text style={styles.SkipText}>Skip</Text>
        </View>
        <Image source={image} style={styles.HeroImage} />
        <View>
          <Text style={styles.Header}>{tittle}</Text>
        </View>
        <View style={styles.paragraphContainer}>
          <Text style={styles.paragraph}>{description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default OnboardingSix;

const styles = StyleSheet.create({
  skipContainer: {
    width: "100%",
    height: 30,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 19,
    marginBottom: 77,
  },
  SkipText: {
    height: 26,
    color: "#FBDE3F",
    fontWeight: "600",
  },
  HeroImage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  Header: {
    color: "#000000",
    fontSize: 26,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: -0.572,
    marginTop: 77,
  },
  paragraphContainer: {
    width: "100%",
    alignItems: "center",
  },
  paragraph: {
    width: 305,
    color: "#000000",
    fontSize: 13,
    textAlign: "center",
    fontWeight: "400",
    letterSpacing: -0.286,
    marginTop: 20,
  },
});
