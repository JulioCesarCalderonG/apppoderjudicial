import React, {useEffect, useState} from 'react';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
  Linking,
  Modal,
  Alert,
  Pressable,
} from 'react-native';
import {RootDrawerParams} from '../navigation/DrawerJudicial';
import {drawerStyle} from '../style/DrawerMenuStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import LogoComponent from '../components/LogoComponent';

interface Props extends DrawerScreenProps<RootDrawerParams, 'MAU'> {}

const MauScreen = ({navigation}: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
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
        </View>
      ),
      drawerPosition: 'left',
    });
  }, []);

  return (
    <ImageBackground
      source={require('../assets/img/shipibo-2.png')}
      resizeMode="cover"
      style={style.container}
      imageStyle={{
        opacity: 0.4,
      }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={style.modalText}>
              Es un canal de atención presencial al usuario que consta de
              computadoras instaladas en el Módulo de Atención al Usuario (MAU)
              en las Cortes Superiores de Justicia, a través del cual podrá
              acceder a los servicios digitales que brinda el Poder Judicial
              guiados por un personal especializado por un tiempo de 15 minutos.
            </Text>
            <Text style={{color: 'black', textAlign: 'justify'}}>
              Para cualquier consulta comunicarse al número:
            </Text>
            <TouchableOpacity
              onPress={async () => {
                await Linking.openURL('tel:+51922459699');
              }}>
              <Text style={{color: 'blue', fontWeight: 'bold'}}>922459699</Text>
            </TouchableOpacity>
            <Pressable
              style={[style.button, style.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={style.textStyle}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <LogoComponent />
      <Text style={style.titulo}>MÓDULO DE ATENCIÓN AL USUARIO - MAU</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={style.containerBtn}>
        <View style={style.btnCentral}>
          <View style={style.viewIcono}>
            <Image
              source={require('../assets/img/iconos/computadora.png')}
              style={style.imgIcon}
            />
          </View>
          <View style={style.viewText}>
            <Text style={style.textBtn}>CONSULTA DIRECTAMENTE EN PLATAFORMA</Text>
            <View style={style.viewSubButton}>
              <TouchableOpacity
                style={style.btnSub}
                onPress={() => {
                  navigation.navigate('LinkJudiciales', {
                    link: 'https://serjus.pj.gob.pe/consultajudicialviaweb/Ucayali',
                  });
                }}>
                <Icon
                  name="caret-forward-outline"
                  style={{
                    color: '#960b28',
                  }}
                />
                <Text style={style.btnText}>Registrar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={style.btnSub}
                onPress={() => {
                  navigation.navigate('LinkJudiciales', {
                    link: 'https://serjus.pj.gob.pe/seguimientoconsultajudicialviaweb/Ucayali',
                  });
                }}>
                <Icon
                  name="search"
                  style={{
                    color: '#960b28',
                  }}
                />
                <Text style={style.btnText}>Seguimiento</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={style.btnCentral}
          onPress={async () => {
            await Linking.openURL('tel:+51922459699');
          }}>
          <View style={style.viewIcono}>
            <Image
              source={require('../assets/img/iconos/consulta-telefonica.png')}
              style={style.imgIcon}
            />
          </View>
          <View style={style.viewText}>
            <Text style={style.textBtn}>CONSULTA VÍA TELEFÓNICA</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={style.btnCentral}
          onPress={async () => {
            /* await Linking.openURL("mailto:juliocesar.calderong@gmail.com") */
            await Linking.openURL('https://wa.me/+51922459699');
          }}>
          <View style={style.viewIcono}>
            <Image
              source={require('../assets/img/iconos/whatsapp.png')}
              style={style.imgIcon}
            />
          </View>
          <View style={style.viewText}>
            <Text style={style.textBtn}>CONSULTA POR WHATSAPP</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={style.btnCentral}
          onPress={() => {
            /* navigation.navigate('LinkJudiciales', {
              link: 'https://serjus.pj.gob.pe/consultayorientacionjuridica/Ucayali',
            }); */
            navigation.navigate('Prueba');
          }}>
          <View style={style.viewIcono}>
            <Image
              source={require('../assets/img/iconos/meet.png')}
              style={style.imgIcon}
            />
          </View>
          <View style={style.viewText}>
            <Text style={style.textBtn}>CONSULTA VIRTUAL - GOOGLE MEET</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={style.btnCentral}
          onPress={() => {
            navigation.navigate('LinkJudiciales', {
              link: 'https://serjus.pj.gob.pe/consultayorientacionjuridicapresencial/Ucayali',
            });
          }}>
          <View style={style.viewIcono}>
            <Image
              source={require('../assets/img/iconos/reunion2.png')}
              style={style.imgIcon}
            />
          </View>
          <View style={style.viewText}>
            <Text style={style.textBtn}>SOLICITA TU CITA CON EL ABOGADO ORIENTADOR</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={style.btnCentral}
          onPress={() => {
            setModalVisible(true);
          }}>
          <View style={style.viewIcono}>
            <Image
              source={require('../assets/img/iconos/cabina.png')}
              style={style.imgIcon}
            />
          </View>
          <View style={style.viewText}>
            <Text style={style.textBtn}>
              CABINA - CONOCE NUESTROS SERVICIOS
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={style.btnCentral}
          onPress={() => {
            navigation.navigate('LinkJudiciales', {
              link: 'https://serjus.pj.gob.pe/calificacionatencionalusuario/Ucayali',
            });
          }}>
          <View style={style.viewIcono}>
            <Image
              source={require('../assets/img/iconos/califica-atencion.png')}
              style={style.imgIcon}
            />
          </View>
          <View style={style.viewText}>
            <Text style={style.textBtn}>CALIFICA MI ATENCIÓN</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={style.btnCentral}
          onPress={async () => {
            /* await Linking.openURL("mailto:juliocesar.calderong@gmail.com") */
            await Linking.openURL('https://wa.me/+51922484147');
          }}>
          <View style={style.viewIcono}>
            <Image
              source={require('../assets/img/robot.png')}
              style={style.imgIcon}
            />
          </View>
          <View style={style.viewText}>
            <Text style={style.textBtn}>CHATBOT</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default MauScreen;
const style = StyleSheet.create({
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
    marginBottom: 17,
    textDecorationLine: 'underline',
  },
  containerBtn: {
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 100,
  },
  btnCentral: {
    flexDirection: 'row',
    backgroundColor: '#960b28',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginBottom: 10,
  },
  viewIcono: {
    width: 50,
    left: -10,
  },
  imgIcon: {
    width: '100%',
    height: 50,
    marginLeft: 3,
    marginRight: 5,
  },
  viewText: {
    width: 200,
  },
  textBtn: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  /* Estilo de modal */
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
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
    marginTop: 20,
  },
  buttonOpen: {
    backgroundColor: '#960b28',
  },
  buttonClose: {
    backgroundColor: '#960b28',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'justify',
    color: 'black',
  },
  viewSubButton: {
    flexDirection: 'row',
    marginTop: 5,
  },
  btnSub: {
    backgroundColor: 'white',
    width: 105,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderRadius: 5,
    flexDirection: 'row',
  },
  btnText: {
    color: '#960b28',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
