import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

export interface Place {
  title: string;
  imageUri: string;
  address: string;
  location: {
    lat: string;
    lon: string;
  };
  id: string;
}

export default function PlaceItem({place, onSelect}:any) {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{uri: place.imageUri}}/>
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  
})
