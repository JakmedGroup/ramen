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
  items: string;
  trx: string;
  qty: number;
  total: number;
  status: string;
};
const Item = ({date, items, trx, qty, total, status}: ItemProps) => {
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
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text style={{flex: 1, fontWeight: '700'}}>#{trx}</Text>
          <Text style={{flex: 1}}>{date}</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignContent: 'flex-end',
          }}>
          <View style={{alignItems: 'flex-end'}}>
            <Text
              style={{
                textAlign: 'right',
                backgroundColor: statusColor,
                color: 'white',
                padding: 5,
                borderRadius: 6,
              }}>
              {status.toUpperCase()}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: '#ccc',

          marginVertical: 7,
        }}
      />
      <Text>{items}</Text>
      <Text style={{flex: 1}}>QTY: {qty}</Text>
      <Text style={{flex: 1, fontWeight: '700'}}>
        Total Harga: Rp{total.toLocaleString('id-ID')}
      </Text>
    </View>
  );
};
const TransactionHistory = () => {
  const width = Dimensions.get('window').width;
  const data = [
    {
      date: '2023-10-01',
      items: 'Mushroom,Chicken Soyu',
      trx: '0001',
      qty: 2,
      total: 200000,
      status: 'berhasil',
    },
    {
      date: '2023-10-02',
      items: 'Chicken Soyu,Mushroom',
      trx: '0002',
      qty: 2,
      total: 200000,
      status: 'pending',
    },
    {
      date: '2023-10-03',
      items: 'Chicken Soyu,Plain Soyu,Mushroom ...',
      trx: '0003',
      qty: 5,
      total: 350000,
      status: 'batal',
    },
    {
      date: '2023-10-04',
      items: 'Chicken Soyu,Mushroom',
      trx: '0004',
      qty: 2,
      total: 200000,
      status: 'berhasil',
    },
    {
      date: '2023-10-05',
      items: 'Plain Soyu,Chicken Soyu,Mushroom',
      trx: '0005',
      qty: 3,
      total: 200000,
      status: 'berhasil',
    },
  ];
  return (
    <>
      {/* <Header /> */}
      <SafeAreaView style={{backgroundColor: '#fff', padding: 20}}>
        <TextInput
          placeholder="Cari Transaksi..."
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
          renderItem={({item}) => (
            <Item
              date={item.date}
              items={item.items}
              trx={item.trx}
              qty={item.qty}
              total={item.total}
              status={item.status}
            />
          )}
          style={{height: Dimensions.get('window').height / 1.4}}
        />
      </SafeAreaView>
    </>
  );
};
export default TransactionHistory;
