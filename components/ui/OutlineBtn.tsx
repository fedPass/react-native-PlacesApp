import { Pressable, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { GlobalColors } from "../../constants/colors";

export default function OutlineBtn({icon, text, onPress, disabled}: any) {
  return (
    <Pressable disabled={disabled} onPress={onPress} style={({ pressed }) => [styles.button, pressed && styles.pressed, disabled && styles.disabled]}>
      <Icon style={styles.icon} name={icon} size={18} color={GlobalColors.primary500} />
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 4,
    borderColor: GlobalColors.primary500,
  },
  pressed: {
    opacity: 0.7,
  },
  icon: {
    marginRight: 6,
  },
  text: {
    color: GlobalColors.primary500,
    fontWeight: 'bold'
  },
  disabled: {
    opacity: 0.4
  }
})