// TODO: npm install react-native-maps

import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GlobalColors} from '../constants/colors';

// https://github.com/react-native-maps/react-native-maps
export default function Map() {
  const [selectedLocation, setSelectedLocation] = useState<{
    latitude: number;
    longitude: number;
  }>();

  const region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const onSelectLocation = ({coordinate}: any) => {
    setSelectedLocation({latitude: coordinate.lat, longitude: coordinate.lon});
  };

  return (
    // <MapView style={{flex: 1}} initialRegion={region} onPress={onSelectLocation}>
    //  {selectedLocation && <Marker title="Seleziona posizione" coordinate={selectedLocation}/>}
    // </MapView>
    <View style={styles.mapPreview}>
      <Text>Qui ci verrà la mappa</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mapPreview: {
    width: '100%',
    height: '100%',
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalColors.primary100,
    borderRadius: 4,
  },
});
