import {
  Dimensions,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome6';

type ItemProps = {
  date: string;
  name: string;
  address: string;
  num: number;
  phone: number;
  status: string;
};
const Item = ({date, name, address, num, phone, status}: ItemProps) => {
  let statusColor = '';
  if (status == 'berhasil') {
    statusColor = 'green';
  } else if (status == 'batal') {
    statusColor = 'orange';
  } else {
    statusColor = 'gray';
  }
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        marginVertical: 7,
      }}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Text>Outlet No: {num}</Text>
        <Text style={{textAlign: 'right', flex: 1}}>Tanggal Buka: {date}</Text>
      </View>
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: '#ccc',
          marginVertical: 10,
        }}
      />
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Text style={{fontWeight: '700'}}>Nama Outlet : </Text>
        <Text>{name}</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Text style={{fontWeight: '700'}}>Alamat:</Text>
        <Text> {address}</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Text style={{fontWeight: '700'}}>Telepon:</Text>
        <Text> {phone}</Text>
      </View>
    </View>
  );
};
const OutletScreen = ({navigation}: {navigation: any}) => {
  const width = Dimensions.get('window').width;
  const data = [
    {
      date: '2021-10-01',
      name: 'Abang Ramen Bambu Apus',
      address:
        'Jl. Raya Bambu Apus No. 49A RT003/RW003, Bambu Apus, Cipayung, Jakarta Timur',
      num: 1,
      phone: 6281234556677,
      status: 'aktif',
    },
    {
      date: '2022-10-01',
      name: 'Abang Ramen Cilangkap',
      address: 'Jl. Raya Cilangkap No. 16A, Cipayung, Jakarta Timur',
      num: 2,
      phone: 6281234556677,
      status: 'aktif',
    },
    {
      date: '2023-10-01',
      name: 'Abang Ramen Pondok Gede',
      address: 'Ruko Taman Pondok Gede, Jakarta Timur',
      num: 3,
      phone: 6281234556677,
      status: 'aktif',
    },
  ];
  return (
    <>
      <Header />
      <SafeAreaView style={{backgroundColor: '#fff', padding: 20}}>
        {/* <TextInput
          placeholder="Cari Transaksi..."
          style={{
            padding: 10,
            paddingHorizontal: 15,
            shadowOpacity: 0.5,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#ccc',
          }}
        /> */}
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            textAlign: 'center',
            color: '#000',
          }}>
          <Icon name="store" style={{marginRight: 20}} size={20} /> Outlet Abang
          Ramen
        </Text>
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
          renderItem={({item}) => (
            <Item
              date={item.date}
              name={item.name}
              address={item.address}
              num={item.num}
              phone={item.phone}
              status={item.status}
            />
          )}
          style={{height: Dimensions.get('window').height / 1.6}}
        />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
            bottom: 0,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('OutletAdd')}
            style={{
              backgroundColor: '#fa4c64',
              paddingHorizontal: 20,
              paddingVertical: 15,
              borderRadius: 10,
              width: 300,
            }}>
            <Text style={{color: '#fff', textAlign: 'center'}}>
              Tambah Outlet
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};
export default OutletScreen;
