import { useEffect, useState, React } from "react";
import Drax, { DraxProvider, DraxView } from "react-native-drax";
import { ScrollView } from "react-native-gesture-handler";
import { Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import tw from "twrnc";


const DATA = [
  {
    id: "487f68b4-1746-438c-920e-d67b7df46247",
    name: "Your choice",
    items: [],
    tint: 2,
  },
  {
    id: "2",
    name: "Available ingredients",
    items: [
      {
        id: "95ee6a5d-f927-4579-8c15-2b4eb86210ae",
        name: "Assorted vegetables",
      },
      { id: "26fd50b3-3841-496e-8b32-73636f6f4197", name: "Classic tomato" },
      {
        id: "b0ee9d50-d0a6-46f8-96e3-7f3f0f9a2525",
        name: "mozzarella, and basil",
      },
      { id: "5bee94eb-6bde-4411-b438-1c37fa6af364", name: "BBQ chicken" },
      { id: "960cbbcf-89a0-4d79-aa8e-56abbc15eacc", name: "red onions" },
      { id: "d3edf796-6449-4931-a788-ff66965a025b", name: "sausage" },
      { id: "d3edf796-6449-4931-a799-ff66965a025b", name: "green peppers" },
      { id: "d3edf796-6449-4931-a785-ff66965a025b", name: "Pepperoni" },
      { id: "d3edf706-6449-4931-a777-ff66965a0", name: "black olives" },
      { id: "d3edf746-6449-4931-a777-ff66965a0", name: "marinara sauce" },
      { id: "d3edf46-6449-4931-a777-ff66965a0", name: "Meatballs" },
      { id: "d3ed696-6449-4931-a777-ff66965a0", name: "garlic" },
    ],
    tint: 2,
  },
];

export function ComposePizza() {
  const [stores, setStores] = useState(DATA);

  const handleDragAndDrop = (results) => {
    const { source, destination, type } = results;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "group") {
      const reorderedStores = [...stores];

      const storeSourceIndex = source.index;
      const storeDestinatonIndex = destination.index;

      const [removedStore] = reorderedStores.splice(storeSourceIndex, 1);
      reorderedStores.splice(storeDestinatonIndex, 0, removedStore);

      return setStores(reorderedStores);
    }
    const itemSourceIndex = source.index;
    const itemDestinationIndex = destination.index;

    const storeSourceIndex = stores.findIndex(
      (store) => store.id === source.droppableId
    );
    const storeDestinationIndex = stores.findIndex(
      (store) => store.id === destination.droppableId
    );

    const newSourceItems = [...stores[storeSourceIndex].items];
    const newDestinationItems =
      source.droppableId !== destination.droppableId
        ? [...stores[storeDestinationIndex].items]
        : newSourceItems;

    const [deletedItem] = newSourceItems.splice(itemSourceIndex, 1);
    newDestinationItems.splice(itemDestinationIndex, 0, deletedItem);

    const newStores = [...stores];

    newStores[storeSourceIndex] = {
      ...stores[storeSourceIndex],
      items: newSourceItems,
    };
    newStores[storeDestinationIndex] = {
      ...stores[storeDestinationIndex],
      items: newDestinationItems,
    };

    setStores(newStores);
  };

  return (
    //  <TouchableOpacity
    //     style={styles.button}
    //     onPress={() => navigation.navigate(navLink)}
    //   >
    //     <Text style={styles.buttonText}>{text || navLink}</Text>
    //   </TouchableOpacity>

    <View style={styles.center}>
      <DraxProvider>
        <ScrollView>
          <DraxView
            style={styles.button}
            onDragEnd={handleDragEnd}
            dragType="group"
            dragPayload="ROOT"
          >
            {stores.map((store, index) => (
              <DraxView
                key={store.id}
                draggable={true}
                payload={store.id}
                dragType="store"
              >
                <StoreList key={store.id} {...store} />
              </DraxView>
            ))}
          </DraxView>
        </ScrollView>
      </DraxProvider>
    </View>
  );
}

const StoreList = ({ name, items, id }) => {
  return (
    <DraxView
      dragType="STORE_LIST"
      payload={id}
    >
      <View>
        <Text>{name}</Text>
      </View>
      <ScrollView>
        {items.map((item, index) => (
          <DraxView
            key={item.id}
            dragType="ITEM"
            payload={item.id}
          >
            <Text>{item.name}</Text>
          </DraxView>
        ))}
      </ScrollView>
    </DraxView>
  );
};

const styles = StyleSheet.create({
  center: tw`items-center p-4`,
  flatlist: tw`flex-1 mb-12`,
  button: tw`text-3xl m-2 px-3 bg-white rounded-full w-80`,
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
  background: tw`h-full bg-green-200`,
  banner: tw`bg-purple-700 p-4`,
  bannerText: tw`text-center text-white text-2xl`,
  button: tw`text-3xl m-2 px-3 bg-white rounded-full w-80`,
  buttonText: tw`text-center text-black text-lg`,
  center: tw`items-center`,
  homecomponent: tw`flex-none items-center justify-center p-8`,
  hometext1: tw`text-2xl font-bold mb-4`,
  hometext2: tw`text-lg text-gray-500`,
  footer: tw`absolute bottom-0 left-0 right-0 bg-gray-200 p-4 items-center`,
  footerText: tw`text-gray-600`,
});