import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
  DrawerItem,
} from '@react-navigation/drawer';
import {View, StyleSheet, Image} from 'react-native';
import {Avatar, Title, Caption, Paragraph} from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';
import DrawerTransparencia from './DrawerTransparencia';

const MenuTransparencia = (props: DrawerContentComponentProps) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
                alignItems: 'center',
              }}>
              <Avatar.Image
                source={require('../assets/img/pj.jpg')}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>BIENVENIDO</Title>
              </View>
            </View>

            <View style={{marginTop: 15}}>
              <View>
                <Paragraph style={{fontWeight: '500', color: 'white'}}>
                  PODER JUDICIAL DEL PERU
                </Paragraph>
              </View>
              <View>
                <Caption style={{fontWeight: '500', color: 'white'}}>
                  Corte Superior de Justicia de Ucayali
                </Caption>
              </View>
            </View>
          </View>

          <DrawerTransparencia
              label="Inicio"
              img={require('../assets/img/iconos-negro/home.png')}
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerTransparencia
              label="Menu Principal"
              img={require('../assets/img/iconos-negro/menu1.png')}
              onPress={() => {
                props.navigation.navigate('Transparencia');
              }}
            />
            <DrawerTransparencia
              label="Geocalización"
              img={require('../assets/img/icono-transparencia/iconos_negros/geolocalizacion.png')}
              onPress={() => {
                props.navigation.navigate('Geolocalizacion');
              }}
            />
            <DrawerTransparencia
              label="Consulta amigable"
              img={require('../assets/img/icono-transparencia/iconos_negros/consultante.png')}
              onPress={() => {
                props.navigation.navigate('LinkTransparencia', {
                  link: 'https://apps5.mineco.gob.pe/transparencia/Navegador/default.aspx',
                });
              }}
            />
            <DrawerTransparencia
              label="Directorio Telefónico"
              img={require('../assets/img/icono-transparencia/iconos_negros/directorio.png')}
              onPress={() => {
                props.navigation.navigate('DirectorioGeneral');
              }}
            />
            <DrawerTransparencia
              label="Resoluciones Administrativas"
              img={require('../assets/img/icono-transparencia/iconos_negros/documento.png')}
              onPress={() => {
                props.navigation.navigate('LinkTransparencia', {
                  link: 'https://www.gob.pe/institucion/csjucayali/normas-legales',
                });
              }}
            />
            <DrawerTransparencia
              label="Facebook noticias"
              img={require('../assets/img/icono-transparencia/iconos_negros/facebook.png')}
              onPress={() => {
                props.navigation.navigate('LinkTransparencia', {
                  link: 'https://www.facebook.com/CSJUC',
                });
              }}
            />
            <DrawerTransparencia
              label="Decisiones judiciales"
              img={require('../assets/img/icono-transparencia/iconos_negros/desiciones.png')}
              onPress={() => {
                props.navigation.navigate('LinkTransparencia', {
                  link: 'https://gestionsij.pj.gob.pe/sentidoFallo-web/#/busqueda',
                });
              }}
            />
            <DrawerTransparencia
              label="FProgramación de audiencias"
              img={require('../assets/img/icono-transparencia/iconos_negros/publico.png')}
              onPress={() => {
                props.navigation.navigate('LinkTransparencia', {
                  link: 'https://apps.pj.gob.pe/guiaprogramacion/',
                });
              }}
            />
            <DrawerTransparencia
              label="Conoce a tu juez"
              img={require('../assets/img/icono-transparencia/iconos_negros/calendario.png')}
              onPress={() => {
                props.navigation.navigate('LinkTransparencia', {
                  link: 'https://serjus.pj.gob.pe/conocejuez',
                });
              }}
            />

        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default MenuTransparencia;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    backgroundColor: '#960b28',
    height: 150,
    marginTop: -10,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    color: 'white',
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  Icon: {
    marginRight: -20,
    width: 25,
    height: 25,
  },
});
