import { StyleSheet, View } from "react-native";
import { StatusBar, Text } from "react-native";
import tw from "twrnc";


export function Banner() {
  return (
    <View style={styles.banner}>
      <Text style={styles.bannerText}>React Native Exercices</Text>
    </View>
  );
}

export function HomeScreen() {
  return (
    <View>
      <Text>Homescreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  //banner: {
  //backgroundColor: "purple",
  //padding: 24,
  //alignItems: "center",
  //},
  banner: tw`bg-purple-700 p-4`,
  bannerText: tw`text-center text-white text-2xl`,
  //bannerText: {
  //fontSize: 24,
  //},
});
