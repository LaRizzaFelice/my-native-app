import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { StyleSheet } from "react-native";
import tw from "twrnc";


const DATA = [
  {
    id: "487f68b4-1746-438c-920e-d67b7df46247",
    name: "your choice",
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
    <div className="layout__wrapper">
      <div className="card">
        <DragDropContext onDragEnd={handleDragAndDrop}>
          <div className="header">
            <h1>Composed</h1>
          </div>
          <Droppable droppableId="ROOT" type="group">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {stores.map((store, index) => (
                  <Draggable
                    draggableId={store.id}
                    index={index}
                    key={store.id}
                  >
                    {(provided) => (
                      <div
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        className="store-draggable"
                      >
                        <StoreList {...store} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

const StoreList = ({ name, items, id }) => {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="store-list-droppable"
        >
          <div className="store-container">
            <h3>{name}</h3>
          </div>
          <div className="items-container">
            {items.map((item, index) => (
              <Draggable draggableId={item.id} index={index} key={item.id}>
                {(provided) => (
                  <div
                    className="item-container"
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                  >
                    <h4>{item.name}</h4>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

const styles = StyleSheet.create({
  center: tw`items-center`,
  flatlist: tw`flex-1 mb-12`,
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