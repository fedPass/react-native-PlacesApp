import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {GlobalColors} from '../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import OutlineBtn from '../components/ui/OutlineBtn';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Place } from '../models/place';
import { getDBConnection, getPlaceDetails } from '../util/db-service';

export default function PlaceDetails({navigation, route}: any) {
  const placeId = route.params.placeId;
  const [place, setPlace] = useState<Place | null>() 

  useLayoutEffect(() => {
    const loadPlaceDetails = async () => {
      const db = await getDBConnection();
      const placeDetails = await getPlaceDetails(db, placeId);
      setPlace(placeDetails);
    }
    loadPlaceDetails();
  }, [placeId]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: place?.title,
    });
  }, [navigation, place]);

  let imagePreview = (
    <View style={[styles.noPhoto, styles.image]}>
      <Icon name="image" size={36} color={GlobalColors.primary100} />
    </View>
  );
  
  if (place?.imageUri?.length) {
    imagePreview = (
      <Image style={styles.image} source={{uri: place?.imageUri}} />
    );
  }

  return (
    <ScrollView style={styles.container}>
      {imagePreview}
      <Text style={styles.text}>{place?.address}</Text>
      <OutlineBtn
        icon="map"
        text="Vedi sulla mappa"
        onPress={() =>
          navigation.navigate('Map', {coords: {lat: place?.coords.lat, lon: place?.coords.lon}})
        }
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginHorizontal: 24
  },
  image: {
    flex: 1,
    height: 400,
    borderRadius: 8
  },
  text: {
    color: GlobalColors.primary700,
    textAlign: 'center',
    marginVertical: 16,
    fontSize: 18
  },
  noPhoto: {
    backgroundColor: GlobalColors.primary800,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: GlobalColors.primary100
  },
});
