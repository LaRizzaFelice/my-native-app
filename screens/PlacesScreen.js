import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";

import { PlaceIcon } from "../components/PlaceIcon";
import { usePlacesContext } from "../contexts/PlacesContext";
import { NAV_PLACE_DETAILS } from "../navigation_constants";

function Place({ place }) {
  const navigation = useNavigation();
  const { toggleIsSelected } = usePlacesContext();

  return (
    <View style={styles.placeContainer}>
      <TouchableOpacity
        style={[styles.center, styles.touchable(place.isSelected)]}
        onPress={() => toggleIsSelected(place)}
      >
        <PlaceIcon place={place} />
        <View style={tw`flex-1`}>
          <Text style={styles.name}>{place.name}</Text>
          <Text style={styles.description}>{place.description}</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(NAV_PLACE_DETAILS, { place })}
        >
          <Icon name={"chevron-right"} style={styles.rightButton} />
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={styles.hairline} />
    </View>
  );
}

export function PlacesScreen() {
  const { places } = usePlacesContext();
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatlist}
        data={places}
        keyExtractor={(place) => place.id}
        renderItem={({ item }) => <Place place={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  center: tw`items-center`,
  container: tw`h-full bg-gray-100`,
  placeContainer: tw`w-full`,
  hairline: { height: StyleSheet.hairlineWidth, backgroundColor: "gray" },
  touchable: (isSelected) =>
    tw`flex-row p-3 ${isSelected ? "bg-purple-100" : ""}`,
  name: tw`font-semibold text-lg`,
  description: tw`text-gray-500`,
  rightButton: tw`bg-purple-300 rounded-full p-3`,
});
