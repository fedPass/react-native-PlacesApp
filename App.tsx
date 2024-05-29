import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Alert, StatusBar, StyleSheet, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import IconBtn from './components/ui/IconBtn';
import {GlobalColors} from './constants/colors';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
