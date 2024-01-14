import {View, Text, TextInput, Image, Pressable} from 'react-native';
function DetailsScreen({navigation}: {navigation: any}) {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 80,
          marginBottom: 30,
        }}>
        <Image
          source={require('../assets/icons/abang_ramen.png')}
          style={{width: 120, height: 120}}
        />
      </View>
      <View style={{padding: 15}}>
        <Text>Nomor Telepon</Text>
        <TextInput
          style={{backgroundColor: '#ccc', borderRadius: 5, padding: 10}}
        />
        <Text style={{marginTop: 20}}>Password</Text>
        <TextInput
          style={{backgroundColor: '#ccc', borderRadius: 5, padding: 10}}
        />
        <Pressable
          style={{
            marginTop: 30,
            backgroundColor: '#e04863',
            alignContent: 'center',
            padding: 15,
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate('Root')}>
          <Text style={{textAlign: 'center', color: '#fff'}}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
}
export default DetailsScreen;
