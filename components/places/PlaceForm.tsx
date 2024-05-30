import { useCallback, useEffect, useState } from "react";
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalColors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import { convertCoordsToAddress } from "../../util/location";
import { Place } from "../../models/place";

export default function PlaceForm({onCreatePlace}: any) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [pickedLocation, setPickedLocation] = useState<{lat:string; lon: string} | undefined>();
  const [address, setAddress] = useState('');

  const pickLocationHandler = useCallback((location: {lat:string; lon: string}) => {
    setPickedLocation(location)
  }, []);

  useEffect(() => {
    const fetchAddress = async () => {
      if (pickedLocation) {
        try {
          const address = await convertCoordsToAddress(pickedLocation.lat, pickedLocation.lon);
          setAddress(address);
        } catch (error) {
          Alert.alert('Error', error)
        }
      }
    };
    fetchAddress();
  }, [pickedLocation]);

  const onSubmitForm = () => {
    const placeData = new Place(enteredTitle, selectedImage, address, pickedLocation);
    //pass data to the parent (AddPlace) calling onCreatePlace
    // TODO: form validation
    onCreatePlace(placeData)
  }
  return (
    <ScrollView style={styles.form} overScrollMode="never">
      <View>
        <Text style={styles.label}>Titolo</Text>
        <TextInput style={styles.input} onChangeText={(text) => setEnteredTitle(text)} value={enteredTitle} />
      </View>
      <ImagePicker onSelectImage={(uri: string) => setSelectedImage(uri)} />
      <LocationPicker onPickLocation={pickLocationHandler} />
      <View style={styles.btnBox}>
        <Button title="Salva Place" onPress={onSubmitForm} color={GlobalColors.primary800}/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  form: {
    flex:1,
    padding: 24
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: GlobalColors.primary500
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: GlobalColors.primary700,
    borderBottomWidth: 2,
    borderRadius: 8,
    backgroundColor: GlobalColors.primary100,
  },
  btnBox: {
    marginBottom: 50
  }
})