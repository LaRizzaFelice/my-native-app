import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { StatusBar, Text } from "react-native";
import tw from "twrnc";
import { NAV_PLACES } from "../navigation_constants";


export function Banner() {
  return (
    <View style={styles.banner}>
      <Text style={styles.bannerText}>React Native Exercices</Text>
    </View>
  );
}

export function HomeScreenButton() {
  const navigation = useNavigation();
  return (
    <View style={styles.center}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(NAV_PLACES)}
      >
        <Text style={styles.buttonText}>Homescreen</Text>
      </TouchableOpacity>
    </View>
  );
}


export function HomeScreen() {
  return (
    <View style={styles.background}>
      <Banner/>
      <HomeScreenButton />
      <HomeScreenButton />
      <HomeScreenButton />
    </View>
  );
}

const styles = StyleSheet.create({
  //banner: {
  //backgroundColor: "purple",
  //padding: 24,
  //alignItems: "center",
  //},
  background: tw`h-full bg-green-200`,
  banner: tw`bg-purple-700 p-4`,
  bannerText: tw`text-center text-white text-2xl`,
  button: tw`text-3xl m-2 px-3 bg-white rounded-full w-40`,
  buttonText: tw`text-center text-black text-lg`,
  center: tw`items-center`,
  //bannerText: {
  //fontSize: 24,
  //},
});
