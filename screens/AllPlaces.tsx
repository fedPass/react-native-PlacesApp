import { useEffect, useState } from "react";
import PlacesList from "../components/places/PlacesList";
import { useIsFocused } from "@react-navigation/native";
import { getDBConnection, getPlaces } from "../util/db-service";
import { Place } from "../models/place";

export default function AllPlaces() {
  const isFocused = useIsFocused();
  const [places, setPlaces] = useState<Place[]>([]);
  useEffect(() => {
    const loadPlaces = async () => {
      const db = await getDBConnection();
      const dbPlaces = await getPlaces(db);
      setPlaces(dbPlaces)
      return places
    }
    if (isFocused) {
      loadPlaces()
    }
  }, [isFocused])
  return <PlacesList places={places} />
}