import React, {useEffect} from 'react';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';
import {RootDrawerTransparenciaParams} from '../navigation/DrawerTransparencia';
import {drawerStyle} from '../style/DrawerMenuStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import LogoComponent from '../components/LogoComponent';

interface Props
  extends DrawerScreenProps<RootDrawerTransparenciaParams, 'Directorio'> {}

const DirectorioScreen = ({navigation, route}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <View style={drawerStyle.container}>
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={{
              marginLeft: 10,
            }}>
            <Icon
              name="menu"
              style={{
                fontSize: 30,
                color: 'white',
              }}
            />
          </TouchableOpacity>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: 'white'}}>
            CSJ Ucayali
          </Text>
          <TouchableOpacity
          style={{ marginLeft:190, borderRadius:2, width:30, alignItems:'center'}}
          onPress={()=>{navigation.navigate('DirectorioGeneral')}}
        >
          <Icon
            name='arrow-back-sharp'
            size={25}
            style={{color:'white'}}
          />
        </TouchableOpacity>
        </View>
      ),
      drawerPosition: 'left',
    });
  }, []);

  return (
    <ImageBackground
      source={require('../assets/img/shipibo-2.png')}
      resizeMode="cover"
      style={styles.container}
      imageStyle={{
        opacity: 0.4
      }}
      >
      <LogoComponent />
      <Text style={styles.titulo}>DIRECTORIO TELEFONICO</Text>
      <Text style={styles.textCentral}>CENTRAL TELEF. N° {route.params.telefono}</Text>
      <SafeAreaView style={styles.containerSafe}>
      <FlatList
        data={route.params.dato}
        renderItem={({item}) => (
          <View style={styles.item}>
            <View style={{
              padding:8,
              backgroundColor:'white',
              borderRadius:50,
              marginRight:10
            }}>
              <Image
                source={require('../assets/img/icono-transparencia/iconos_negros/telefono-fijo.png')}
                style={styles.image}
              />
            </View>
            <View>
              <Text style={styles.title}>{item.dependencia}</Text>
              {/* Descomentar la linea de abajo cuando hayas agregados los nombres en todas las apis */}
              {/* <Text style={styles.textAnexo}>{item.nombre}</Text> */}
              <Text style={styles.textAnexo}>Anexo: {item.anexo}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.anexo}
      />
    </SafeAreaView>
    </ImageBackground>
  );
};

export default DirectorioScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: -100,
    marginBottom: -100,
  },
  titulo: {
    textAlign: 'center',
    fontWeight: '700',
    color: 'black',
    fontSize: 18,
    /*marginTop: 20,*/
    marginBottom: 8,
    textDecorationLine: 'underline',
  },
  textCentral:{
    color:'black',
    fontSize:13,
    textAlign:'center',
    fontWeight:'bold',
    textDecorationLine:'underline',
    marginBottom:10
  },
  containerSafe:{
    flex: 1,
  },
  item: {
    flexDirection:'row',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor:'#960b28',
    borderRadius:10,
  },
  image:{
    width:35,
    height:35,
  },
  title: {
    fontSize: 11,
    fontWeight:'bold',
    color:'white',
    marginRight:50,
  },
  textAnexo:{
    fontSize: 12,
    color:'white'
  }
});
