import React, { createContext, useContext, useMemo, useState } from "react";
import { useCallback } from "react";

const PlacesContext = createContext();

const INITIAL_DATA = [
  {
    isSelected: false,
    id: "123",
    icon: "pizza-outline",
    name: "Pizza Margherita",
    description: "Classic tomato, mozzarella, and basil",
    info: "hier woon ik niet echt",
    price: 10.99,
    color: "fblack",
  },
  {
    isSelected: false,
    id: "456",
    icon: "briefcase",
    name: "Work",
    info:
      "Ik werk op de school. De school is Thomas More. " +
      "Er is ook nog een campus in Antwerpen waar we ook les hebben. " +
      "Dat zijn dan andere studenten.",
    description:
      "Thomas More Campus de Nayer, Jan Pieter de Nayerlaan, Sint-Katelijne-Waver, Belgium",
    location: { lat: 51.21640668638187, lng: 4.397249583341867 },
  },
  {
    isSelected: false,
    id: "457",
    icon: "briefcase",
    name: "Work2",
    color: "orange",
    info:
      "Ik werk op de school. De school is Thomas More. " +
      "Op deze campus heb ik maar af en toe les.",
    description:
      "Thomas More Antwerpen - Campus Sint-Andries, Sint-Andriesstraat, Antwerpen",
    location: { lat: 51.06846350000001, lng: 4.4988931999999 },
  },
  {
    isSelected: false,
    id: "777",
    icon: "beer",
    name: "Cafe",
    description: "Makadam, Grote Markt, Mechelen, Belgium",
    location: { lat: 51.028416, lng: 4.4805134 },
    color: "limegreen",
    imageIds: [1],
  },
  {
    isSelected: false,
    id: "778",
    icon: "cafe",
    name: "Koffie",
    description: "Kato Gateaux, Korenmarkt, Mechelen, Belgium",
    location: { lat: 51.024762, lng: 4.4767795 },
    color: "limegreen",
    imageIds: [2, 7],
  },
  {
    isSelected: false,
    id: "779",
    icon: "nutrition",
    name: "Groentenwinkel",
    description: "AGF Speciaalzaak, IJzerenleen, Mechelen",
    location: { lat: 51.026271340682534, lng: 4.478304756100222 },
    imageIds: [3],
  },
  {
    isSelected: false,
    id: "770",
    icon: "videocam",
    name: "Bioscoop",
    description: "Cinema Lumière, Frederik de Merodestraat, Mechelen",
    location: { lat: 51.030835823712366, lng: 4.4821349301245625 },
    color: "limegreen",
    imageIds: [5],
  },
  {
    isSelected: false,
    id: "771",
    icon: "train",
    name: "Station",
    description: "Station Mechelen, Mechelen",
    location: { lat: 51.018069610898685, lng: 4.483248425601653 },
  },
];

export function PlacesProvider(props) {

    const [places, setPlaces] = useState(INITIAL_DATA);

  const toggleIsSelected = useCallback(
    placeToToggle => {
        const toggledPlace = { ...placeToToggle, isSelected: !placeToToggle.isSelected }
        console.log(toggledPlace);
        setPlaces(places.map(place => placeToToggle.id === place.id ? toggledPlace : place))
    }
  )  
  
  const api = useMemo(() => ({ places, toggleIsSelected }), [places, toggleIsSelected]);
  return (
    <PlacesContext.Provider value={api}>
      {props.children}
    </PlacesContext.Provider>
  );
}

export const usePlacesContext = () => useContext(PlacesContext);
