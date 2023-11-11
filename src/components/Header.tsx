import {Image, View, Text, Dimensions} from 'react-native';
function Header() {
  const width = Dimensions.get('window').width;
  return (
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
      <Text style={{fontSize: 17, fontWeight: '700'}}>Abang Ramen</Text>
    </View>
  );
}
export default Header;
