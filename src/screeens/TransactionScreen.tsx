import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
} from 'react-native';
import Header from '../components/Header';

function TransactionScreen({navigation}: {navigation: any}) {
  const width = Dimensions.get('window').width;
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Header />
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
