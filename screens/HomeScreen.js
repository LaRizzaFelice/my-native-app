import { useNavigation } from "@react-navigation/native";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { Text } from "react-native";
import tw from "twrnc";
import { NAV_IMAGES, NAV_PLACES } from "../navigation_constants";
import ItalianFlagBanner from "../components/ItalianFlagBanner";
import { Footer } from "../components/Footer";

function ImageFromUri({
  uri,
  desiredWidthRatio,
  originalWidth,
  originalHeight,
}) {
  const deviceDimensions = useWindowDimensions();
  const desiredWidth = deviceDimensions.width * desiredWidthRatio;
  const width = desiredWidth;
  const height = (desiredWidth * originalHeight) / originalWidth;
  return (
    <Image
      source={{ uri: uri }}
      style={[styles.image, { width, height }]}
      PlaceholderContent={<ActivityIndicator />}
    />
  );
}

export function HomeScreenButton({ navLink, text }) {
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

const HomeScreenComponent = () => {
  return (
    <View style={styles.homecomponent}>
      <ImageFromUri
        uri={`https://www.48hourslogo.com/oss/works/2023/08/17/3159595854/128449_80660_72598e64-532d-4054-ac8b-dc13f23d48e7.jpg`}
        desiredWidthRatio={0.45}
        originalWidth={400}
        originalHeight={300}
      />
      <Text style={styles.hometext1}>Welcome to our Pizza App</Text>
      <Text style={styles.hometext2}>Make a choise between:</Text>
    </View>
  );
};

// const Footer = () => {
//   return (
//     <View style={styles.footer}>
//       <Text style={styles.footerText}>Copyright 2024 - Felice La Rizza</Text>
//     </View>
//   );
// };

export function HomeScreen() {
  return (
    <View style={styles.background}>
      <ItalianFlagBanner />
      <HomeScreenComponent />
      <HomeScreenButton navLink={NAV_PLACES} />
      <HomeScreenButton navLink={NAV_IMAGES} />
      <Footer />
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
