// ThankYouScreen.js
import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";

const OrderConfirmScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate back to the homepage after 10 seconds
      navigation.navigate("Home");
    }, 10000);

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>
        Thank you for your order!
        </Text>
      <Text style={styles.text2}>
        You will receive a confirmation within a minute.
      </Text>
    </View>
  );
};

export default OrderConfirmScreen;

const styles = StyleSheet.create({
  container: tw`flex-1 items-center justify-center`,
  text1: tw`text-2xl font-bold mb-4`,
  text2: tw`text-lg text-gray-500`,
});

