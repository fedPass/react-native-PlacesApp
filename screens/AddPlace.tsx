import PlaceForm from "../components/places/PlaceForm";

export default function AddPlace({navigation}) {

  const createPlaceHandler = (place) => {
    navigation.navigate('AllPlaces', {place})
  }

  return (
    <PlaceForm onCreatePlace={createPlaceHandler} />
  )
}