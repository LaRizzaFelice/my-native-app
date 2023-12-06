import { StyleSheet, View } from "react-native";
import { Text } from "react-native";
import tw from "twrnc";

export function PlaceDetailScreen() {
  return (
    <View style={styles.container}>
      <Text>Place Details</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: tw`h-full bg-green-500`,
});
