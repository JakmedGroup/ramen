import {
  Dimensions,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import Header from '../components/Header';

type ItemProps = {
  date: string;
  trx: string;
  qty: number;
  total: number;
};
const Item = ({date, trx, qty, total}: ItemProps) => (
  <View
    style={{
      flex: 1,
      flexDirection: 'row',
      padding: 15,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      marginVertical: 7,
    }}>
    <Text style={{flex: 1}}>{trx}</Text>
    <Text style={{flex: 1}}>{date}</Text>
    <Text style={{flex: 1, marginLeft: 10}}>QTY: {qty}</Text>
    <Text style={{flex: 1}}>Rp{total.toLocaleString('id-ID')}</Text>
  </View>
);
const ProductScreen = () => {
  const width = Dimensions.get('window').width;
  const data = [
    {date: '2023-10-01', trx: '0001', qty: 2, total: 200000},
    {date: '2023-10-02', trx: '0002', qty: 2, total: 200000},
    {date: '2023-10-03', trx: '0003', qty: 2, total: 200000},
    {date: '2023-10-04', trx: '0004', qty: 2, total: 200000},
    {date: '2023-10-05', trx: '0005', qty: 2, total: 200000},
  ];
  return (
    <>
      <Header />
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
              trx={item.trx}
              qty={item.qty}
              total={item.total}
            />
          )}
          style={{height: Dimensions.get('window').height}}
        />
      </SafeAreaView>
    </>
  );
};
export default ProductScreen;
