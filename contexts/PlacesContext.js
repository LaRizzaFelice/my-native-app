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
    price: 10.99,
    color: "fblack",
  },
  {
    isSelected: false,
    id: "124",
    icon: "pizza-outline",
    name: "Pepperoni Pizza",
    description: "Pepperoni, tomato sauce, and mozzarella cheese",
    price: 12.99,
    color: "fblack",
  },
  {
    isSelected: false,
    id: "125",
    icon: "pizza-outline",
    name: "Vegetarian Delight",
    description: "Assorted vegetables, tomato sauce, and mozzarella cheese",
    price: 11.99,
    color: "fblack",
  },
  {
    isSelected: false,
    id: "126",
    icon: "pizza-outline",
    name: "BBQ Chicken Pizza",
    description: "BBQ chicken, red onions, and mozzarella cheese",
    price: 14.99,
    color: "fblack",
  },
  {
    isSelected: false,
    id: "127",
    icon: "pizza-outline",
    name: "Supreme Feast",
    description:
      "Pepperoni, sausage, mushrooms, green peppers, and black olives",
    price: 15.99,
    color: "fblack",
  },
  {
    isSelected: false,
    id: "specialPlace",
    icon: "pizza-outline",
    name: "Hawaiian Paradise",
    description:
      "We don't make this kind of fake pizza, go and find it somewhere else !!!",
    price: 13.99,
    color: "fblack",
  },
  {
    isSelected: false,
    id: "129",
    icon: "pizza-outline",
    name: "Meatball Madness",
    description: "Meatballs, marinara sauce, and mozzarella cheese",
    price: 14.99,
    color: "fblack",
  },
  {
    isSelected: false,
    id: "130",
    icon: "pizza-outline",
    name: "Mushroom Delight",
    description: "Mushrooms, garlic, olive oil, and mozzarella cheese",
    price: 13.99,
    color: "fblack",
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
