import {Image, View, Text, Dimensions} from 'react-native';
function Header() {
  const width = Dimensions.get('window').width;
  return (
    <View
      style={{
        width: width,
        backgroundColor: '#fff',
        elevation: 1,
        height: 100,
        padding: 15,
      }}>
      <Image
        source={require('../assets/icons/abang_ramen.png')}
        style={{width: 60, height: 60, marginRight: 15}}
      />
      <Text style={{fontSize: 17, fontWeight: '700', color: '#000'}}>
        Abang Ramen
      </Text>
    </View>
  );
}
export default Header;
