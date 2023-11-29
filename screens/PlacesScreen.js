import { StyleSheet, TouchableOpacity, View } from "react-native";
import { StatusBar, Text } from "react-native";
import tw from "twrnc";

export function PlacesScreen() {
  return (
    <View style={styles.container}>
     <Text>Places</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: tw`h-full bg-green-500`,

});
