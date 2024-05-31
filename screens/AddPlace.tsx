import { Alert } from "react-native";
import PlaceForm from "../components/places/PlaceForm";
import { Place } from "../models/place";
import { getDBConnection, savePlace } from "../util/db-service";

export default function AddPlace({navigation}: any) {

  const createPlaceHandler = async (place: Place) => {
    try {
      // store data on device
      const db = await getDBConnection();
      await savePlace(db, place)
      navigation.navigate('AllPlaces')
    } catch (error) {
      Alert.alert('Error', error)
    }
  }

  return (
    <PlaceForm onCreatePlace={createPlaceHandler} />
  )
}