import { StyleSheet, TouchableOpacity, View } from "react-native";
import { StatusBar, Text } from "react-native";
import tw from "twrnc";


export function Banner() {
  return (
    <View style={styles.banner}>
      <Text style={styles.bannerText}>React Native Exercices</Text>
    </View>
  );
}

export function HomeScreenButton() {
  return (
      <View style={styles.center}>
      <TouchableOpacity style={styles.button} onPress={() => console.log("Button pressed")}>
        <Text style={styles.buttonText}>Homescreen</Text>
      </TouchableOpacity>
      </View>
  )
}


export function HomeScreen() {
  return (
    <View style={styles.background}>
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
