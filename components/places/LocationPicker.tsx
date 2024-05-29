import { Image, StyleSheet, Text, View } from "react-native";
import OutlineBtn from "../ui/OutlineBtn";
import { GlobalColors } from "../../constants/colors";
import Geolocation from '@react-native-community/geolocation';
import { useEffect, useState } from "react";
import { getMapPreview } from "../../util/location";
import { useNavigation, useRoute } from "@react-navigation/native";


export default function LocationPicker() {
  const [pickedLocation, setPickedLocation] = useState<{lat:string; lon: string} | undefined>();
  const navigation = useNavigation();
  const route = useRoute();

  const mapLocationPicker = route.params && {
    lat: route.params.pickedLocation.latitude.toString(),
    lon: route.params.pickedLocation.longitude.toString()
  }

  //side-effect when mapLocationPiker change
  useEffect(() => {
    if (mapLocationPicker) {
      setPickedLocation(mapLocationPicker)
    }
  }, [mapLocationPicker])

  const onGetCurrentLocation = () => {
    Geolocation.getCurrentPosition(position => setPickedLocation({
      lat: position.coords.latitude.toString(),
      lon: position.coords.longitude.toString()
    }));
  };
  const onMapLocation = () => {
    navigation.navigate('Map');
  };

  let mapPreview = <Text>Non hai ancora inserito una posizione per questo Place</Text>
  if (pickedLocation) {
    // mapPreview = <Image source={{uri: getMapPreview(pickedLocation.lat, pickedLocation.lon)}} style={styles.map} />
    mapPreview = <View>
        <Text style={styles.titleCoords}>Coordinate Place</Text>
        <Text>Latitudine: {pickedLocation.lat}</Text>
        <Text>Longitudine: {pickedLocation.lon}</Text>
      </View>
  }


  return (
    <View>
      <View style={styles.mapPreview}>{mapPreview}</View>
      <View style={styles.btnBox}>
        <OutlineBtn text="Posizione attuale" icon="map-pin" onPress={onGetCurrentLocation} />
        <OutlineBtn text="Apri mappa" icon="map" onPress={onMapLocation} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mapPreview: {
    width: '100%',
    height: 300,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalColors.primary100,
    borderRadius: 4,
  },
  btnBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 50
  },
  map: {
    marginHorizontal: 16,
    paddingTop: 8,
    width: '100%',
    height: '100%'
  },
  titleCoords: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }

})