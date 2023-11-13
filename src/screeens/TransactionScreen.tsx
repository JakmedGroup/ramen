import {useState} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
  Modal,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

import Header from '../components/Header';
type Props = any;
const TransactionScreen: React.FC<Props> = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const [pelanggan, setPelanggan] = useState('');
  const [selected, setSelected] = useState('');
  const width = Dimensions.get('window').width;
  return (
    <>
      <Header />

      <ScrollView showsVerticalScrollIndicator>
        <View style={{padding: 20, backgroundColor: '#fff'}}>
          <Text style={{fontWeight: '700', marginBottom: 7}}>
            Input Transaksi
          </Text>
          <View
            style={{
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              marginBottom: 10,
            }}></View>
          <View style={{flex: 1, flexDirection: 'row', marginVertical: 15}}>
            <TouchableOpacity
              style={{flexDirection: 'row', flex: 1}}
              onPress={() => setSelected('takeaway')}>
              <RadioButton selected={selected == 'takeaway' ? true : false} />
              <Text style={{marginHorizontal: 10}}>Take Away</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flexDirection: 'row', flex: 1}}
              onPress={() => setSelected('dinein')}>
              <RadioButton selected={selected == 'dinein' ? true : false} />
              <Text style={{marginHorizontal: 10}}>Dine In</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={{
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#ccc',
              padding: 5,
              marginVertical: 5,
            }}
            value={pelanggan}
            onChangeText={e => setPelanggan(e)}
            placeholder="Nama Pelanggan"
          />
          <TextInput
            style={{
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#ccc',
              padding: 5,
              marginVertical: 5,
            }}
            placeholder="Cari Produk..."
          />
          <ScrollView horizontal>
            <View
              style={{
                borderRadius: 10,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  borderRadius: 5,
                  marginRight: 6,
                  marginTop: 6,
                  marginBottom: 6,
                  padding: 5,
                  borderWidth: 0.5,
                  borderColor: '#ccc',
                  width: width / 5,
                }}>
                <Image
                  source={require('../assets/images/products/ramen-1.jpg')}
                  style={{width: width / 6, height: width / 6}}
                />
                <Text
                  style={{
                    fontSize: 9,
                    textAlign: 'center',
                    fontWeight: '700',
                    marginTop: 10,
                  }}>
                  Chicken Soyu
                </Text>
                <Text style={{fontWeight: '700'}}>Rp42.000</Text>
              </View>
              <View
                style={{
                  borderRadius: 5,
                  margin: 6,
                  padding: 5,
                  borderWidth: 0.5,
                  borderColor: '#ccc',
                  width: width / 5,
                }}>
                <Image
                  source={require('../assets/images/products/ramen-2.jpg')}
                  style={{width: width / 6, height: width / 6}}
                />
                <Text
                  style={{
                    fontSize: 9,
                    textAlign: 'center',
                    fontWeight: '700',
                    marginTop: 10,
                  }}>
                  Mushroom
                </Text>
                <Text style={{fontWeight: '700'}}>Rp52.000</Text>
              </View>
              <View
                style={{
                  borderRadius: 5,
                  margin: 6,
                  padding: 5,
                  borderWidth: 0.5,
                  borderColor: '#ccc',
                  width: width / 5,
                }}>
                <Image
                  source={require('../assets/images/products/ramen-3.jpg')}
                  style={{width: width / 6, height: width / 6}}
                />
                <Text
                  style={{
                    fontSize: 9,
                    textAlign: 'center',
                    fontWeight: '700',
                    marginTop: 10,
                  }}>
                  Plain Soyu
                </Text>
                <Text style={{fontWeight: '700'}}>Rp32.000</Text>
              </View>
              <View
                style={{
                  borderRadius: 5,
                  margin: 6,
                  padding: 5,
                  borderWidth: 0.5,
                  borderColor: '#ccc',
                  width: width / 5,
                }}>
                <Image
                  source={require('../assets/images/products/ramen-4.jpg')}
                  style={{width: width / 6, height: width / 6}}
                />
                <Text
                  style={{
                    fontSize: 9,
                    textAlign: 'center',
                    fontWeight: '700',
                    marginTop: 10,
                  }}>
                  Spicy Miso
                </Text>
                <Text style={{fontWeight: '700'}}>Rp45.000</Text>
              </View>
            </View>
            <View
              style={{
                borderRadius: 10,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  borderRadius: 5,
                  marginRight: 6,
                  marginTop: 6,
                  marginBottom: 6,
                  padding: 5,
                  borderWidth: 0.5,
                  borderColor: '#ccc',
                  width: width / 5,
                }}>
                <Image
                  source={require('../assets/images/products/ramen-1.jpg')}
                  style={{width: width / 6, height: width / 6}}
                />
                <Text
                  style={{
                    fontSize: 9,
                    textAlign: 'center',
                    fontWeight: '700',
                    marginTop: 10,
                  }}>
                  Chicken Soyu
                </Text>
                <Text style={{fontWeight: '700'}}>Rp42.000</Text>
              </View>
              <View
                style={{
                  borderRadius: 5,
                  margin: 6,
                  padding: 5,
                  borderWidth: 0.5,
                  borderColor: '#ccc',
                  width: width / 5,
                }}>
                <Image
                  source={require('../assets/images/products/ramen-2.jpg')}
                  style={{width: width / 6, height: width / 6}}
                />
                <Text
                  style={{
                    fontSize: 9,
                    textAlign: 'center',
                    fontWeight: '700',
                    marginTop: 10,
                  }}>
                  Mushroom
                </Text>
                <Text style={{fontWeight: '700'}}>Rp52.000</Text>
              </View>
              <View
                style={{
                  borderRadius: 5,
                  margin: 6,
                  padding: 5,
                  borderWidth: 0.5,
                  borderColor: '#ccc',
                  width: width / 5,
                }}>
                <Image
                  source={require('../assets/images/products/ramen-3.jpg')}
                  style={{width: width / 6, height: width / 6}}
                />
                <Text
                  style={{
                    fontSize: 9,
                    textAlign: 'center',
                    fontWeight: '700',
                    marginTop: 10,
                  }}>
                  Plain Soyu
                </Text>
                <Text style={{fontWeight: '700'}}>Rp32.000</Text>
              </View>
              <View
                style={{
                  borderRadius: 5,
                  margin: 6,
                  padding: 5,
                  borderWidth: 0.5,
                  borderColor: '#ccc',
                  width: width / 5,
                }}>
                <Image
                  source={require('../assets/images/products/ramen-4.jpg')}
                  style={{width: width / 6, height: width / 6}}
                />
                <Text
                  style={{
                    fontSize: 9,
                    textAlign: 'center',
                    fontWeight: '700',
                    marginTop: 10,
                  }}>
                  Spicy Miso
                </Text>
                <Text style={{fontWeight: '700'}}>Rp45.000</Text>
              </View>
            </View>
          </ScrollView>
          <View
            style={{
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              marginBottom: 10,
              marginTop: 20,
            }}></View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              paddingBottom: 3,
            }}>
            <Image
              source={require('../assets/images/products/ramen-4.jpg')}
              style={{marginRight: 20, width: 40, height: 40}}
            />
            <Text style={{flex: 1}}>Spicy Miso</Text>

            <TouchableOpacity style={{marginHorizontal: 5}}>
              <Icon size={25} name="square-minus" />
            </TouchableOpacity>
            <TextInput
              value="2"
              style={{
                marginHorizontal: 5,
                borderColor: '#ccc',
                borderWidth: 1,
                height: 25,
                width: 25,
                borderRadius: 3,
                fontSize: 15,
                padding: 4,
                textAlign: 'center',
              }}
            />
            <TouchableOpacity style={{marginHorizontal: 5}}>
              <Icon size={25} name="square-plus" />
            </TouchableOpacity>
            <Text style={{flex: 1, textAlign: 'right'}}>Rp104.000,-</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              paddingBottom: 3,
            }}>
            <Image
              source={require('../assets/images/products/ramen-1.jpg')}
              style={{marginRight: 20, width: 40, height: 40}}
            />
            <Text style={{flex: 1}}>Chicken Soyu</Text>

            <TouchableOpacity style={{marginHorizontal: 5}}>
              <Icon size={25} name="square-minus" />
            </TouchableOpacity>
            <TextInput
              value="1"
              style={{
                marginHorizontal: 5,
                borderColor: '#ccc',
                borderWidth: 1,
                height: 25,
                width: 25,
                borderRadius: 3,
                fontSize: 15,
                padding: 4,
                textAlign: 'center',
              }}
            />
            <TouchableOpacity style={{marginHorizontal: 5}}>
              <Icon size={25} name="square-plus" />
            </TouchableOpacity>
            <Text style={{flex: 1, textAlign: 'right'}}>Rp42.000,-</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
            <TextInput
              placeholder="Kode Kupon"
              style={{
                flex: 1,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
                borderColor: '#ccc',
                borderWidth: 1,
              }}
            />
            <TouchableOpacity
              style={{
                backgroundColor: '#fa4c64',
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
                width: 80,
              }}>
              <Text
                style={{
                  color: '#fff',
                  textAlign: 'center',
                  justifyContent: 'center',
                }}>
                Apply
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
            <Text style={{flex: 1}}>Subtotal</Text>
            <Text style={{textAlign: 'right', flex: 1}}>Rp146.000,-</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
            <Text style={{flex: 1}}>Tax</Text>
            <Text style={{textAlign: 'right', flex: 1}}>Rp16.060,-</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
            <Text style={{flex: 1}}>Discount (-)</Text>
            <Text style={{textAlign: 'right', flex: 1}}>Rp-</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
            <Text style={{flex: 1, fontSize: 18, fontWeight: '700'}}>
              Total
            </Text>
            <Text
              style={{
                textAlign: 'right',
                flex: 1,
                fontSize: 18,
                fontWeight: '700',
              }}>
              Rp162.060,-
            </Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('PaymentScreen', {pelanggan: pelanggan})
          }
          style={{
            backgroundColor: '#fa4c64',
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderRadius: 10,
            width: 300,
          }}>
          <Text style={{color: '#fff', textAlign: 'center'}}>
            Pilih Pembayaran
          </Text>
        </TouchableOpacity>
      </View>
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
export default TransactionScreen;
