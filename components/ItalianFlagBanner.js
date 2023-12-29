import { View, StyleSheet } from "react-native";

const ItalianFlagBanner = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.colorBlock, { backgroundColor: "#009246" }]} />
      <View style={[styles.colorBlock, { backgroundColor: "#F1F2F1" }]} />
      <View style={[styles.colorBlock, { backgroundColor: "#CE2B37" }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 30,
  },
  colorBlock: {
    flex: 1,
  },
});

export default ItalianFlagBanner;
