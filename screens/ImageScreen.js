import { ActivityIndicator, useWindowDimensions } from "react-native";
import { StyleSheet, View, Image } from "react-native";
import tw from "twrnc";

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

export function ImagesScreen() {
  return (
    <View style={styles.container}>
      <ImageFromUri
          uri= {`https://www.reisroutes.be/userfiles/fotos/grote-markt-van-mechelen_347_xl.jpg`}
          desiredWidthRatio={0.67}
          originalWidth={1068}
          originalHeight={1600}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: tw`h-full bg-gray-200`,
  image: tw`mx-auto my-2`,
  center: tw`items-center`,
});
