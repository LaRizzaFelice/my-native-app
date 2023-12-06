import { StyleSheet, Text, TouchableOpacity, View, FlatList} from "react-native";
import { Icon } from "react-native-elements";
import tw from "twrnc";

import { usePlacesContext } from "../contexts/PlacesContext";

function PlaceIcon({ place }) {
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

function Place({ place }) {
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
      data={places}
      Keyextractor={place=>place.id}
      renderItem={({item}) => <Place place ={item} />}>
      </FlatList>
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
  icon: tw`mr-4 p-3 bg-purple-200 rounded-full`,
});
