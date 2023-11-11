import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome6';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';

function HomeScreen({navigation}: {navigation: any}) {
  const width = Dimensions.get('window').width;
  const data = ['desktop.jpg', 'desktop.jpg'];
  return (
    <>
      <View
        style={{
          width: width,
          backgroundColor: '#fff',
          elevation: 1,
          height: 55,
          padding: 15,
          flexDirection: 'row',
        }}>
        <Image
          source={require('../assets/icons/abang_ramen.png')}
          style={{width: 30, height: 30, marginRight: 15}}
        />
        <Text style={{fontSize: 17, fontWeight: '700'}}>Ramen Abang</Text>
      </View>
      <ScrollView>
        <LinearGradient
          colors={['#fa4c64', '#f61c6e', '#ec94a0']}
          style={{
            elevation: 2,
            margin: 10,
            backgroundColor: '#fff',
            borderRadius: 5,
            minHeight: 100,
            padding: 20,
          }}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Text style={{color: '#fff'}}>Penjualan Hari Ini</Text>
              <Text style={{color: '#fff', fontSize: 22, fontWeight: '700'}}>
                Rp. 300.000,-
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{color: '#fff'}}>Penjualan Bulan Lalu</Text>
              <Text style={{color: '#fff', fontSize: 22, fontWeight: '700'}}>
                Rp. 6.300.000,-
              </Text>
            </View>
          </View>
        </LinearGradient>
        <View
          style={{
            elevation: 2,
            margin: 10,
            backgroundColor: '#fff',
            borderRadius: 5,
            minHeight: 100,
            padding: 10,
            width: width,
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              flex: 1,
              alignContent: 'flex-start',
            }}>
            <TouchableOpacity
              style={{
                padding: 5,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                margin: 10,
                flex: 1,
              }}>
              <Icon name="cash-register" size={30} color="#cf1831" />
              <Text style={{fontSize: 11, textAlign: 'center', marginTop: 10}}>
                Riwayat Penjualan
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 5,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                margin: 10,
                flex: 1,
              }}>
              <Icon name="cart-flatbed" size={30} color="#cf1831" />
              <Text style={{fontSize: 11, textAlign: 'center', marginTop: 10}}>
                Kelola Produk
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 5,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                margin: 10,
                flex: 1,
              }}>
              <Icon name="store" size={30} color="#cf1831" />
              <Text style={{fontSize: 11, textAlign: 'center', marginTop: 10}}>
                Kelola Outlet
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 5,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                margin: 10,
                flex: 1,
              }}>
              <Icon name="gears" size={30} color="#cf1831" />
              <Text style={{fontSize: 11, textAlign: 'center', marginTop: 10}}>
                Pengaturan Toko
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            margin: 10,

            minHeight: 100,

            width: width,
          }}>
          <Carousel
            loop
            width={width / 1.05}
            height={width / 2.5}
            autoPlay={true}
            data={data}
            scrollAnimationDuration={1000}
            renderItem={({index: i}) => {
              return (
                <View
                  style={{
                    flex: 1,
                    borderWidth: 1,
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../assets/images/sliders/desktop.jpg')}
                    style={{width: width / 1.05, height: width / 2.5}}
                  />
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            elevation: 2,
            margin: 10,
            padding: 10,
            borderRadius: 5,
            minHeight: 100,
            backgroundColor: '#fff',
            width: width,
          }}>
          <Text style={{fontWeight: '700', marginBottom: 10}}>
            Produk Terlaris
          </Text>
          <View style={{flexDirection: 'row', flex: 1}}>
            <View
              style={{
                borderRadius: 5,
                margin: 6,
                padding: 5,
                borderWidth: 0.5,
                borderColor: '#ccc',
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
            </View>
            <View
              style={{
                borderRadius: 5,
                margin: 6,
                padding: 5,
                borderWidth: 0.5,
                borderColor: '#ccc',
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
            </View>
            <View
              style={{
                borderRadius: 5,
                margin: 6,
                padding: 5,
                borderWidth: 0.5,
                borderColor: '#ccc',
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
            </View>
            <View
              style={{
                borderRadius: 5,
                margin: 6,
                padding: 5,
                borderWidth: 0.5,
                borderColor: '#ccc',
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
            </View>
          </View>
        </View>
      </ScrollView>
      <View
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
          <Text style={{color: '#fff', textAlign: 'center'}}>
            Buat Transaksi
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
export default HomeScreen;
