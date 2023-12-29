import { StyleSheet, Text, View } from "react-native";
import tw from "twrnc";

export const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Copyright 2024 - Felice La Rizza</Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  footer: tw`absolute bottom-0 left-0 right-0 bg-gray-200 p-4 items-center mt-4`,
  footerText: tw`text-gray-600`,
});