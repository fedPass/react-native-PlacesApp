import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, { useCallback, useEffect, useState } from 'react';
import {Alert, StatusBar, StyleSheet, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import IconBtn from './components/ui/IconBtn';
import {GlobalColors} from './constants/colors';
import Map from './screens/Map';
import { createTable, getDBConnection, getPlaces, savePlace } from './util/db-service';
import { Place } from './models/place';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // initialize db
  const [places, setPlaces] = useState<Place[]>([]);
  const loadDataCallback = useCallback(async () => {
    try {
      const db = await getDBConnection();
      await createTable(db);
      const storedPlaces = await getPlaces(db);
      if (storedPlaces.length) {
        setPlaces(storedPlaces);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    loadDataCallback();
  }, [loadDataCallback]);

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: GlobalColors.primary700,
            },
            headerTintColor: GlobalColors.gray700,
            contentStyle: {
              backgroundColor: GlobalColors.gray700,
            },
          }}>
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({navigation}) => ({
              title: 'I tuoi Place preferiti',
              headerRight: ({tintColor}) => (
                <IconBtn
                  color={tintColor}
                  size={24}
                  name="plus"
                  bkgColor={GlobalColors.primary700}
                  onPress={() => navigation.navigate('AddPlace')}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlace}
            options={{title: 'Aggiungi nuovo Place'}}
          />
          <Stack.Screen
            name="Map"
            component={Map}
            options={{title: 'Seleziona un Place'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
