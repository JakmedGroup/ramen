import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import Header from '../components/Header';
import {useCallback, useState} from 'react';
import {CameraButton} from '../components/CameraButton';

const width = Dimensions.get('window').width;
const includeExtra = true;
const ProductAdd = ({navigation}: {navigation: any}) => {
  const width = Dimensions.get('window').width;
  const [modalVisible, setModalVisible] = useState(false);
  const [response, setResponse] = useState<any>(null);
  const onButtonPress = useCallback((type: any, options: any) => {
    if (type === 'capture') {
      ImagePicker.launchCamera(options, setResponse);
    } else {
      ImagePicker.launchImageLibrary(options, setResponse);
    }
  }, []);

  return (
    <View
      style={{
        backgroundColor: '#fff',
        height: Dimensions.get('window').height,
      }}>
      <Header />
      <SafeAreaView style={{backgroundColor: '#fff', padding: 15}}>
        <Text style={{fontSize: 18, fontWeight: '700'}}>Foto Produk</Text>
        <View style={styles.buttonContainer}>
          {actions.map(({title, type, options}) => {
            return (
              <CameraButton
                key={title}
                onPress={() => onButtonPress(type, options)}>
                {title}
              </CameraButton>
            );
          })}
        </View>
        {response && (
          <Image
            source={{uri: response?.assets[0]?.uri}}
            style={{width: 150, height: 150}}
          />
        )}
        <TextInput
          placeholder="Nama Produk"
          style={{
            marginVertical: 10,
            padding: 10,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#ccc',
          }}
        />

        <TextInput
          placeholder="Harga Produk"
          style={{
            marginVertical: 10,
            padding: 10,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#ccc',
          }}
        />
        <View style={{alignItems: 'center', marginTop: 20}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              width: 200,
              padding: 10,
              borderRadius: 10,
            }}
            onPress={() => setModalVisible(true)}>
            <Text style={{textAlign: 'center', color: '#fff'}}>
              Simpan Produk
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => navigation.navigate('Root')}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.textStyle}>Produk Berhasil Ditambahkan</Text>
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: 'green',
                padding: 10,
                borderRadius: 5,
              }}
              onPress={() => navigation.navigate('ProductScreen')}>
              <Text style={{textAlign: 'center', color: '#fff'}}>Kembali</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 8,
  },
  imageContainer: {
    marginVertical: 24,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 25,
    width: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'left',
  },
});
interface Action {
  title: string;
  type: 'capture' | 'library';
  options: ImagePicker.CameraOptions | ImagePicker.ImageLibraryOptions;
}
const actions: Action[] = [
  {
    title: 'Buka Kamera',
    type: 'capture',
    options: {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra,
    },
  },
  {
    title: 'Buka Galeri',
    type: 'library',
    options: {
      selectionLimit: 0,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra,
    },
  },
];
export default ProductAdd;
