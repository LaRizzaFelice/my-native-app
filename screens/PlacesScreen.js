import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import tw from "twrnc";
import { usePlacesContext } from "../contexts/PlacesContext";

function Place ({place}) {
    const {toggleIsSelected} = usePlacesContext();

    return (
      <TouchableOpacity style={tw`p-4`} onPress={() => toggleIsSelected(place)}>
        <Text style={tw`text-lg`}>{place.name}</Text>
        <Text style={tw`text-gray-600`}>{place.description}</Text>
        <View style={styles.hairline} />
      </TouchableOpacity>
    );
}

export function PlacesScreen() {
    const {places} = usePlacesContext();

  return (
    <View style={styles.container}>
     {places.map(place => <Place key={place.id} place={place}/>)}
    </View>
  )
}

const styles = StyleSheet.create({
  container: tw`h-full bg-green-500`,
  hairline: {height: StyleSheet.hairlineWidth,backgroundColor: "gray"},
});
