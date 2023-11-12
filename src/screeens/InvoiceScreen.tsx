import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Modal,
  StyleSheet,
} from 'react-native';

import {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';

import Header from '../components/Header';
type Props = any;
const today = new Date();
const date = today.getFullYear() + '' + today.getMonth() + '' + today.getDate();
const time = today.getMinutes() + '' + today.getSeconds();
const InvoiceScreen: React.FC<Props> = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const width = Dimensions.get('window').width;
  const [modalVisible, setModalVisible] = useState(false);
  const payment = route.params.payment;
  return (
    <>
      {/* <Header /> */}
      <ScrollView style={{backgroundColor: '#fff', padding: 20}}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../assets/icons/abang_ramen.png')}
            style={{width: 90, height: 90}}
          />
          <Text style={{fontSize: 20, fontWeight: '700'}}>Abang Ramen</Text>
          <Text style={{textAlign: 'center', marginBottom: 10}}>
            Jl. Raya Bambu Apus No. 49A RT003/RW03, Bambu Apus, Cipayung,
            Jakarta Timur
          </Text>
          <Text style={{fontSize: 20, fontWeight: '700'}}>
            Struk No. #{time}
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
              marginTop: 25,
            }}>
            <Text>Tanggal: </Text>
            <Text style={{flex: 1}}>{today.toLocaleDateString('id-ID')}</Text>
            <Text style={{flex: 1, textAlign: 'right'}}>Kasir: Kasir 01</Text>
          </View>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: 'black',
              width: width,
              marginVertical: 7,
            }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <Text style={{flex: 1}}>Item</Text>
            <Text style={{flex: 1}}>QTY</Text>
            <Text style={{flex: 1, textAlign: 'right'}}>Price</Text>
          </View>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: 'black',
              width: width,
              marginVertical: 7,
            }}
          />
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{flex: 1}}>Spicy Miso</Text>
            <Text style={{flex: 1}}>2</Text>
            <Text style={{flex: 1, textAlign: 'right'}}>Rp104.000,-</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={{flex: 1}}>Chicken Soyu</Text>
            <Text style={{flex: 1}}>1</Text>
            <Text style={{flex: 1, textAlign: 'right'}}>Rp42.000,-</Text>
          </View>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: 'black',
              width: width,
              marginVertical: 7,
            }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={{flex: 1}}>Subtotal</Text>
            <Text style={{flex: 1}}></Text>
            <Text style={{flex: 1, textAlign: 'right'}}>Rp146.000,-</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={{flex: 1}}>Tax</Text>
            <Text style={{flex: 1}}></Text>
            <Text style={{flex: 1, textAlign: 'right'}}>Rp16.060,-</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={{flex: 1}}>Discount (-)</Text>
            <Text style={{flex: 1}}></Text>
            <Text style={{flex: 1, textAlign: 'right'}}>Rp-</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={{flex: 1, fontSize: 18, fontWeight: '700'}}>
              TOTAL
            </Text>
            <Text style={{flex: 1}}></Text>
            <Text
              style={{
                flex: 1,
                textAlign: 'right',
                fontSize: 16,
                fontWeight: '700',
              }}>
              Rp162.060,-
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: 'black',
              width: width,
              marginVertical: 7,
            }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={{flex: 1}}>Payment Method</Text>

            <Text
              style={{
                flex: 1,
                textAlign: 'right',
              }}>
              {payment.toUpperCase()}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={{flex: 1}}>Nama Pelanggan</Text>

            <Text
              style={{
                flex: 1,
                textAlign: 'right',
              }}>
              {route.params.pelanggan}
            </Text>
          </View>
          <View>
            <Text
              style={{textAlign: 'center', marginTop: 25, fontWeight: '700'}}>
              Terima kasih atas kunjungan anda
            </Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{alignItems: 'center', justifyContent: 'center', padding: 20}}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{
            backgroundColor: '#fa4c64',
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderRadius: 10,
            width: 300,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Icon
            name="print"
            size={20}
            style={{marginRight: 10, color: '#fff'}}
          />
          <Text style={{color: '#fff', textAlign: 'center'}}> Cetak Struk</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => navigation.navigate('Root')}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.textStyle}>Struk Berhasil Dicetak</Text>
            <Pressable
              style={{
                marginTop: 20,
                backgroundColor: 'green',
                padding: 10,
                borderRadius: 5,
              }}
              onPress={() => navigation.navigate('Root')}>
              <Text style={{textAlign: 'center', color: '#fff'}}>Kembali</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 25,
    width: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'left',
  },
});
export default InvoiceScreen;
