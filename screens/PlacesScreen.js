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
import { NAV_PLACE_DETAILS, ORDERCONFIRM } from "../navigation_constants";
import ItalianFlagBanner from "../components/ItalianFlagBanner";
import { Footer } from "../components/Footer";

function Place({ place }) {
  const navigation = useNavigation();
  const { toggleIsSelected } = usePlacesContext();

  return (
    <View style={styles.placeContainer}>
      <TouchableOpacity
        style={[styles.center, styles.touchable(place.isSelected)]}
      >
        <PlaceIcon place={place} />
        <View style={tw`flex-1`}>
          <Text style={styles.name}>{place.name}</Text>
          <Text style={styles.description}>{place.description}</Text>
        </View>
        {place.id !== "specialPlace" && ( // Add a condition for the special place
          <TouchableOpacity onPress={() => navigation.navigate(ORDERCONFIRM)}>
            <Icon name={"chevron-right"} style={styles.rightButton} />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
      <View style={styles.hairline} />
    </View>
  );
}

export function PlacesScreen() {
  const { places } = usePlacesContext();
  return (
    <View style={styles.container}>
      <ItalianFlagBanner />
      <Text style={styles.choosecomponent}>Make your choise:</Text>
      <FlatList
        style={styles.flatlist}
        data={places}
        keyExtractor={(place) => place.id}
        renderItem={({ item }) => <Place place={item} />}
      />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  center: tw`items-center`,
  container: tw`h-full bg-gray-100`,
  placeContainer: tw`w-full`,
  choosecomponent: tw`text-center text-2xl font-bold mb-4 flex-none items-center justify-center p-2 `,
  hometext2: tw`text-lg text-gray-500`,
  hairline: { height: StyleSheet.hairlineWidth, backgroundColor: "gray" },
  touchable: (isSelected) =>
    tw`flex-row p-3 ${isSelected ? "bg-purple-100" : ""}`,
  name: tw`font-semibold text-lg`,
  description: tw`text-gray-500`,
  rightButton: tw`bg-green-200 rounded-full p-3`,
});
