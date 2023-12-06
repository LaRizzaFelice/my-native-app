import { StyleSheet, View } from "react-native";
import { Text } from "react-native";
import tw from "twrnc";

export function PlaceDetailScreen({route}) {
  const {place} = route.params;
  return (
    <View style={styles.container}>
      <Text>Details screen for {place.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: tw`h-full bg-green-500`,
});
