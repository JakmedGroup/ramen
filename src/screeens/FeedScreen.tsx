import {View, Button, Text} from 'react-native';
function FeedScreen({navigation}: {navigation: any}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Feed Screen</Text>
      <Button title="Go to Root" onPress={() => navigation.navigate('Root')} />
      <Button
        title="Go to Root, Profile"
        onPress={() => navigation.navigate('Root', {screen: 'Profile'})}
      />
    </View>
  );
}
export default FeedScreen;
