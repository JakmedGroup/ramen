import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';

type ItemProps = {
  name: string;
  image: string;
  qty: number;
  price: number;
};
const width = Dimensions.get('window').width;
const Item = ({name, image, qty, price}: ItemProps) => (
  <View
    style={{
      borderRadius: 5,
      marginRight: 16,
      marginTop: 6,
      marginBottom: 6,
      padding: 5,
      borderWidth: 0.5,
      borderColor: '#ccc',
      width: width / 5,
    }}>
    <Image
      source={require('../assets/images/products/ramen-1.jpg')}
      style={{width: width / 6, height: width / 6, alignItems: 'center'}}
    />
    <Text
      style={{
        fontSize: 9,
        textAlign: 'center',
        color: '#000',
        fontWeight: '700',
        marginTop: 10,
      }}>
      Chicken Soyu
    </Text>
    <Text style={{fontWeight: '700', textAlign: 'center', color: '#000'}}>
      Rp42.000
    </Text>
  </View>
);
const ProductScreen = ({navigation}: {navigation: any}) => {
  const width = Dimensions.get('window').width;
  const data = [
    {
      name: 'Chicken Soyu',
      image: '../assets/images/products/ramen-1.jpg',
      qty: 2,
      price: 42000,
    },
    {
      name: 'Mushroom',
      image: '../assets/images/products/ramen-2.jpg',
      qty: 2,
      price: 52000,
    },
    {
      name: 'Plain Chicken',
      image: '../assets/images/products/ramen-1.jpg',
      qty: 2,
      price: 200000,
    },
    {
      name: '2023-10-04',
      image: '../assets/images/products/ramen-1.jpg',
      qty: 2,
      price: 200000,
    },
  ];
  return (
    <>
      <Header />
      <SafeAreaView style={{backgroundColor: '#fff', padding: 15}}>
        <TextInput
          placeholder="Cari Produk..."
          style={{
            padding: 10,
            paddingHorizontal: 15,
            shadowOpacity: 0.5,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#ccc',
          }}
        />
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: '#ccc',
            width: width,
            marginVertical: 10,
          }}
        />
        <FlatList
          data={data}
          numColumns={4}
          renderItem={({item}) => (
            <View
              style={{
                borderRadius: 10,
                flexDirection: 'row',
              }}
              key={item.image}>
              <Item
                name={item.name}
                image={item.image}
                qty={item.qty}
                price={item.price}
              />
            </View>
          )}
          style={{height: Dimensions.get('window').height / 1.9}}
        />
      </SafeAreaView>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
          bottom: 0,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductAdd')}
          style={{
            backgroundColor: '#fa4c64',
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderRadius: 10,
            width: 300,
          }}>
          <Text style={{color: '#fff', textAlign: 'center'}}>
            Tambah Produk
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default ProductScreen;
