/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {StatusBar, Button, Alert} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome6';

// SCREENS
import HomeScreen from './src/screeens/HomeScreen';
import DetailsScreen from './src/screeens/DetailScreen';
import FeedScreen from './src/screeens/FeedScreen';
import TransactionScreen from './src/screeens/TransactionScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Beranda',
          headerRight: () => (
            <Icon
              onPress={() => Alert.alert('This is a button!')}
              name="bell"
              color="#999"
              style={{marginRight: 15}}
              size={20}
            />
          ),
        }}
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
        <Stack.Screen
          name="TransactionScreen"
          component={TransactionScreen}
          options={{title: 'Transaksi'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
