import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import PlaceItem from './PlaceItem';
import IconBtn from '../ui/IconBtn';
import {useNavigation} from '@react-navigation/native';
import { GlobalColors } from '../../constants/colors';

export default function PlacesList({places}: any) {
  const navigation = useNavigation();
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallBckContainer}>
        <Text style={styles.fallbckText}>
          Non hai ancora aggiunto Place! Inizia!
        </Text>
        {/* <IconBtn color={'#188F89'} name="plus" onPress={() => navigation.navigate("AddPlace")} /> */}
        <Button
          title="Aggiungi Place"
          onPress={() => navigation.navigate('AddPlace')}
          color={GlobalColors.primary700}></Button>
      </View>
    );
  }
  return (
    <FlatList
      data={places}
      keyExtractor={item => item.id}
      renderItem={({item}) => <PlaceItem place={item} />}
    />
  );
}

const styles = StyleSheet.create({
  fallBckContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbckText: {
    fontSize: 16,
    color: GlobalColors.primary200,
    marginBottom: 12
  },
});
