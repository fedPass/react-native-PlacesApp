// TODO: npm install react-native-maps

import {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {GlobalColors} from '../constants/colors';
import IconBtn from '../components/ui/IconBtn';

// https://github.com/react-native-maps/react-native-maps
export default function Map({navigation}: any) {
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

  // we use useCallback() to avoid that function inside component is not recreated unnecessary
  // first parm is the function, second in dependency array
  // function will be recreated only if change navigation prop or selectedLocation state
  const savePickedLocation = useCallback(() => {
    // TODO: to pass dinamically position
    // if (!selectedLocation) {
    //   Alert.alert(
    //     'Nessuna località selezionata',
    //     'Devi selezionare una località facendo tap sulla mappa',
    //   );
    //   return;
    // }
    // navigation.navigate('AddPlace', {pickedLocation: selectedLocation});
    navigation.navigate('AddPlace', {pickedLocation: 
      {
      latitude: 37.78825,
      longitude: -122.4324
      }
    });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({tintColor}) => (
        <IconBtn
          name="save"
          size={24}
          color={tintColor}
          onPress={savePickedLocation}
          bkgColor={GlobalColors.primary700}
        />
      ),
    });
    // passing a funct into dependencies array we need to use useCallback hooks inside this funtion
  },[navigation, savePickedLocation]);

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
