import {View, Text, Dimensions, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

function HomeScreen({navigation}) {
  return (
    <ScrollView>
      <View
        style={{
          elevation: 2,
          margin: 10,
          backgroundColor: '#fff',
          borderRadius: 5,
          minHeight: 200,
          padding: 10,
          flexDirection: 'row',
        }}>
        <View
          style={{
            padding: 5,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 10,
          }}>
          <Icon name="shopping-bag" size={30} color="#e96510" />
          <Text>Kelola Produk</Text>
        </View>
        <View
          style={{
            padding: 5,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 10,
          }}>
          <Icon name="rocket" size={30} color="#e96510" />
          <Text>Reload</Text>
        </View>
      </View>
    </ScrollView>
  );
}
export default HomeScreen;
