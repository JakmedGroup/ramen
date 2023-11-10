/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// SCREENS
import HomeScreen from './src/screeens/HomeScreen';
import DetailsScreen from './src/screeens/DetailScreen';
import FeedScreen from './src/screeens/FeedScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Beranda'}}
      />
      <Drawer.Screen name="Details" component={DetailsScreen} />
    </Drawer.Navigator>
  );
}
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{headerShown: false}}
        />
        <Stack.Screen name="FeedScreen" component={FeedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
