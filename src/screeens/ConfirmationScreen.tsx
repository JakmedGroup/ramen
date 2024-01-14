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
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';

import Header from '../components/Header';
type Props = any;
const ConfirmationScreen: React.FC<Props> = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const width = Dimensions.get('window').width;
  const [selected, setSelected] = useState('sudah');
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
        <Text>Apakah Pembayaran Sudah Diterima?</Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'green',
            borderRadius: 5,
            padding: 15,
            margin: 10,
          }}>
          <Pressable
            onPress={() => setSelected('sudah')}
            style={{flexDirection: 'row'}}>
            <RadioButton selected={selected == 'sudah' ? true : false} />
            <Text style={{marginLeft: 15, fontSize: 15, fontWeight: '700'}}>
              Sudah
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#e05774',
            borderRadius: 5,
            padding: 15,
            margin: 10,
          }}>
          <Pressable
            onPress={() => setSelected('batal')}
            style={{flexDirection: 'row'}}>
            <RadioButton selected={selected == 'batal' ? true : false} />
            <Text
              style={{
                marginLeft: 15,
                fontSize: 15,
                fontWeight: '700',
              }}>
              Batal
            </Text>
          </Pressable>
        </View>
        <View style={{flex: 1, marginTop: 20}}>
          {selected == 'sudah' ? (
            <Pressable
              style={{
                backgroundColor: 'green',
                justifyContent: 'center',
                margin: 20,
                padding: 15,
                borderRadius: 20,
              }}
              onPress={() =>
                navigation.navigate('InvoiceScreen', {
                  payment: route.params.payment,
                  pelanggan: route.params.pelanggan,
                })
              }>
              <Text style={{color: '#fff', textAlign: 'center'}}>
                Simpan & Cetak Struk
              </Text>
            </Pressable>
          ) : (
            <Pressable
              style={{
                backgroundColor: 'red',
                justifyContent: 'center',
                margin: 20,
                padding: 15,
                borderRadius: 20,
              }}
              onPress={() => navigation.navigate('Root')}>
              <Text style={{color: '#fff', textAlign: 'center'}}>
                Batalkan Pesanan
              </Text>
            </Pressable>
          )}
        </View>
      </ScrollView>
      {/* <View
        style={{alignItems: 'center', justifyContent: 'center', padding: 20}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('TransactionScreen')}
          style={{
            backgroundColor: '#fa4c64',
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderRadius: 10,
            width: 300,
          }}>
          <Text style={{color: '#fff', textAlign: 'center',color: '#000',}}>
            Konfirmasi Pembayaran
          </Text>
        </TouchableOpacity>
      </View> */}
    </>
  );
};
export default ConfirmationScreen;
