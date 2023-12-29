import { StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import tw from "twrnc";

export function PlaceIcon({ place }) {
  return (
    <Icon
      name={place.icon}
      color={place.color}
      type="ionicon"
      size={24}
      style={styles.icon}
    />
  );
}

const styles = StyleSheet.create({
  icon: tw`mr-4 p-3 bg-purple-300 rounded-full`,
});
