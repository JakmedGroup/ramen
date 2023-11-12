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
import PaymentScreen from './src/screeens/PaymentScreen';
import ConfirmationScreen from './src/screeens/ConfirmationScreen';
import InvoiceScreen from './src/screeens/InvoiceScreen';
import TransactionHistory from './src/screeens/TransactionHistory';
import ProductScreen from './src/screeens/ProductScreen';

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
              onPress={() =>
                Alert.alert('Notification', 'Tidak ada notifikasi baru')
              }
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
          initialParams={{navigation: 'Root', payment: 'cash'}}
          options={{title: 'Transaksi'}}
        />
        <Stack.Screen
          name="PaymentScreen"
          component={PaymentScreen}
          options={{title: 'Pembayaran'}}
        />
        <Stack.Screen
          name="ConfirmationScreen"
          component={ConfirmationScreen}
          options={{title: 'Konfirmasi Pembayaran'}}
        />
        <Stack.Screen
          name="InvoiceScreen"
          component={InvoiceScreen}
          options={{
            title: 'Cetak Struk',
            headerLeft: () => <></>,
          }}
        />
        <Stack.Screen
          name="TransactionHistory"
          component={TransactionHistory}
          options={{
            title: 'Riwayat Transaksi',
          }}
        />
        <Stack.Screen
          name="ProductScreen"
          component={ProductScreen}
          options={{
            title: 'Kelola Produk',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
