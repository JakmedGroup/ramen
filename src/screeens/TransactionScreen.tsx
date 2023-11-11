import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
} from 'react-native';
function TransactionScreen({navigation}: {navigation: any}) {
  const width = Dimensions.get('window').width;
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
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
        <View style={{padding: 20}}>
          <Text style={{fontWeight: '700', marginBottom: 7}}>
            Input Transaksi
          </Text>
          <View
            style={{
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              marginBottom: 15,
            }}></View>
          <TextInput style={{borderRadius: 5, backgroundColor: '#e9e9e9'}} />
        </View>
      </ScrollView>
    </View>
  );
}
export default TransactionScreen;
