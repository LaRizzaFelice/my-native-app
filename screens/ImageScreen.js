import { ActivityIndicator, useWindowDimensions } from "react-native";
import { StyleSheet, View, Image } from "react-native";
import tw from "twrnc";
import ItalianFlagBanner from "../components/ItalianFlagBanner";
import { ComposePizza } from "../components/ComposePizza";


export function ImagesScreen() {
  return (
    <View style={styles.container}>
      <ItalianFlagBanner/>
      <ComposePizza/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: tw`h-full bg-gray-200`,
  image: tw`mx-auto my-2`,
  center: tw`items-center`,
});
