
import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import { Footer } from "../components/Footer";
import ItalianFlagBanner from "../components/ItalianFlagBanner";

const OrderConfirmScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      
      navigation.navigate("Home");
    }, 3000);

    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    <View style={styles.background}>
      <ItalianFlagBanner />
      <MessageComponent/>
      <Footer />
    </View>
  );
};

const MessageComponent = () => {
  return (
    <View style={styles.messagecomponent}>
      <Text style={styles.text1}>Thank you for your order!</Text>
      <Text style={styles.text2}>
        You will receive a confirmation soon!
      </Text>
    </View>
  );
};

export default OrderConfirmScreen;

const styles = StyleSheet.create({
  background: tw`h-full bg-green-200`,
  messagecomponent: tw`flex-1 items-center justify-center`,
  text1: tw`text-2xl font-bold mb-4`,
  text2: tw`text-lg text-gray-500`,
});

