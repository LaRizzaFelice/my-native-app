import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
export function ScreenButton({ navLink, text }) {
  const navigation = useNavigation();
  return (
    <View style={styles.center}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(navLink)}
      >
        <Text style={styles.buttonText}>{text || navLink}</Text>
      </TouchableOpacity>
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
  button: tw`text-3xl m-2 px-3 bg-white rounded-full w-80`,
  buttonText: tw`text-center text-black text-lg`,
  center: tw`items-center`,
  homecomponent: tw`flex-none items-center justify-center p-8`,
  hometext1: tw`text-2xl font-bold mb-4`,
  hometext2: tw`text-lg text-gray-500`,
  footer: tw`absolute bottom-0 left-0 right-0 bg-gray-200 p-4 items-center`,
  footerText: tw`text-gray-600`,
  //bannerText: {
  //fontSize: 24,
  //},
});
