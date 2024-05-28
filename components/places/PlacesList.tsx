import {FlatList, StyleSheet, Text, View} from 'react-native';
import PlaceItem from './PlaceItem';

export default function PlacesList({places}: any) {
  if (!places || !places.length) {
    return (
      <View style={styles.fallBckContainer}>
        <Text style={styles.fallbckText}>
          Non hai ancora aggiunto Place! Inizia!
        </Text>
      </View>
    )
  }
  return (
    <FlatList
      data={places}
      keyExtractor={item => item.id}
      renderItem={({item}) => <PlaceItem place={item}/>}
    />
  );
}

const styles = StyleSheet.create({
  fallBckContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fallbckText: {
    fontSize: 16,
    color: '#5CA891'
  }
})
