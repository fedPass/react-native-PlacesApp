import { StyleSheet, View } from "react-native";
import OutlineBtn from "../ui/OutlineBtn";
import { GlobalColors } from "../../constants/colors";

export default function LocationPicker() {

  const onGetCurrentLocation = () => {};
  const onMapLocation = () => {};

  return (
    <View>
      <View style={styles.mapPreview}></View>
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
  }

})