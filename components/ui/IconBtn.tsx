import {Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function IconBtn({name, onPress, size, color, bkgColor}: any) {
  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.pressed]}>
      <Icon.Button
        name={name}
        backgroundColor={bkgColor ?? '#fff'}
        size={size}
        color={color}
        onPress={onPress}></Icon.Button>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
});
