import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalColors } from "../../constants/colors";

export default function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState('');
  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Titolo</Text>
        <TextInput style={styles.input} onChangeText={(text) => setEnteredTitle(text)} value={enteredTitle} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  form: {
    flex:1,
    padding: 24
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: GlobalColors.primary500
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: GlobalColors.primary700,
    borderBottomWidth: 2,
    borderRadius: 8,
    backgroundColor: GlobalColors.primary100,
  }
})