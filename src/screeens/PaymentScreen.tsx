import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';

import {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';

import Header from '../components/Header';

function PaymentScreen({navigation, route}: {navigation: any; route: any}) {
  const width = Dimensions.get('window').width;
  const [selected, setSelected] = useState('cash');

  function RadioButton(props: any) {
    return (
      <View
        style={[
          {
            height: 24,
            width: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: '#000',
            alignItems: 'center',
            justifyContent: 'center',
          },
          props.style,
        ]}>
        {props.selected ? (
          <View
            style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: '#000',
            }}
          />
        ) : null}
      </View>
    );
  }
  return (
    <>
      <Header />
      <ScrollView style={{backgroundColor: '#fff', padding: 20}}>
        <Text>Pilih Metode Pembayaran</Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5,
            padding: 15,
            margin: 10,
          }}>
          <Pressable
            onPress={() => setSelected('cash')}
            style={{flexDirection: 'row'}}>
            <RadioButton selected={selected == 'cash' ? true : false} />
            <Text style={{marginLeft: 15, fontSize: 15, fontWeight: '700'}}>
              Cash
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5,
            padding: 15,
            margin: 10,
          }}>
          <Pressable
            onPress={() => setSelected('edc')}
            style={{flexDirection: 'row'}}>
            <RadioButton selected={selected == 'edc' ? true : false} />
            <Text style={{marginLeft: 15, fontSize: 15, fontWeight: '700'}}>
              EDC
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5,
            padding: 15,
            margin: 10,
          }}>
          <Pressable
            onPress={() => setSelected('qris')}
            style={{flexDirection: 'row'}}>
            <RadioButton selected={selected == 'qris' ? true : false} />
            <Text style={{marginLeft: 15, fontSize: 15, fontWeight: '700'}}>
              QRIS
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5,
            padding: 15,
            margin: 10,
          }}>
          <Pressable
            onPress={() => setSelected('ewallet')}
            style={{flexDirection: 'row'}}>
            <RadioButton selected={selected == 'ewallet' ? true : false} />
            <Text style={{marginLeft: 15, fontSize: 15, fontWeight: '700'}}>
              E-Wallet
            </Text>
          </Pressable>
        </View>
      </ScrollView>
      <View
        style={{alignItems: 'center', justifyContent: 'center', padding: 20}}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ConfirmationScreen', {
              payment: selected,
              pelanggan: route.params.pelanggan,
            })
          }
          style={{
            backgroundColor: '#fa4c64',
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderRadius: 10,
            width: 300,
          }}>
          <Text style={{color: '#fff', textAlign: 'center'}}>
            Konfirmasi Pembayaran
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
export default PaymentScreen;
