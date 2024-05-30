import {Alert, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {GlobalColors} from '../../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function PlaceItem({place, onSelect}: any) {
    let imagePreview = <View style={[styles.noPhoto, styles.image]}>
      <Icon name="image" size={36} color={GlobalColors.primary100} />
    </View>
    if (place.imageUri.length) {
      imagePreview = <Image style={styles.image} source={{uri: place.imageUri}} />
    }
    return (
      <Pressable
        style={({pressed}) => [styles.container, pressed && styles.pressed]}
        onPress={() => Alert.alert('click')}>
          {imagePreview}
        <View style={styles.textBox}>
          <Text style={styles.title}>{place.title}</Text>
          <Text style={styles.text}>{place.address}</Text>
        </View>
      </Pressable>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: GlobalColors.primary100,
  },
  pressed: {
    opacity: 0.9,
  },
  image: {
    flex: 1,
    height: 100,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8
  },
  textBox: {
    flex: 2,
    margin: 8,
  },
  text: {
    color: GlobalColors.primary700,
    textAlign: 'center',
  },
  title: {
    color: GlobalColors.primary800,
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
  },
  noPhoto: {
    backgroundColor: GlobalColors.primary800,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: GlobalColors.primary100
  },
});
