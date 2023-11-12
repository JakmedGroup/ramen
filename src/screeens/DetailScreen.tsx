import {View, Text} from 'react-native';
function DetailsScreen({navigation}: {navigation: any}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      <Text>Aplikasi Penjualan Abang Ramen Versi 1.0</Text>
    </View>
  );
}
export default DetailsScreen;
