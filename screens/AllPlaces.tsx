import { useEffect, useState } from "react";
import PlacesList from "../components/places/PlacesList";
import { useIsFocused } from "@react-navigation/native";

export default function AllPlaces({route}) {
  const isFocused = useIsFocused();
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    if (isFocused && route.params?.place) {
      setPlaces(currentPlace => [route.params.place, ...places])
    }
  }, [isFocused, route])
  return <PlacesList places={places} />
}