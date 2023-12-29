import { ActivityIndicator, useWindowDimensions } from "react-native";
import { StyleSheet, View, Image } from "react-native";
import tw from "twrnc";
import ItalianFlagBanner from "../components/ItalianFlagBanner";
import { ComposePizza } from "../components/ComposePizza";
import { Footer } from "../components/Footer";
import { ORDERCONFIRM } from "../navigation_constants";
import { ScreenButton } from "../components/ScreenButton";



export function ImagesScreen() {
  return (
    <View style={styles.container}>
      <ItalianFlagBanner />
      <ComposePizza />
      <ScreenButton navLink={ORDERCONFIRM} />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: tw`h-full bg-green-200`,
  image: tw`mx-auto my-2`,
  center: tw`items-center`,
});
