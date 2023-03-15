import {
    DrawerContentScrollView,
    DrawerContentComponentProps,
    DrawerItem

} from '@react-navigation/drawer';
import { View, StyleSheet, Image } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph
} from 'react-native-paper'

import Icon from 'react-native-vector-icons/Ionicons';

const MenuTransparencia = (props: DrawerContentComponentProps) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
            >
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15, alignItems:'center' }}>
                            <Avatar.Image
                                source={require('../assets/img/pj.jpg')}
                                size={50}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>BIENVENIDO</Title>
                            </View>
                        </View>

                        <View style={{marginTop:15}}>
                            <View >
                                <Paragraph style={{fontWeight:'500', color:'white'}}>PODER JUDICIAL DEL PERU</Paragraph>
                            </View>
                            <View >
                                <Caption style={{fontWeight:'500', color:'white'}}>Corte Superior de Justicia de Ucayali</Caption>
                            </View>
                        </View>
                    </View>

                    <View style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-sharp"
                                    color={color}
                                    size={size}
                                    style={{
                                        marginRight:-20
                                    }}
                                />
                            )}
                            label="Inicio"
                            onPress={() => { props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="grid-sharp"
                                    color={color}
                                    size={size}
                                    style={{
                                        marginRight:-20
                                    }}
                                />
                            )}
                            label="Menu Principal"
                            onPress={() => { props.navigation.navigate('Transparencia') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Image
                                source={require('../assets/img/icono-transparencia/iconos_negros/geolocalizacion.png')}
                                style={styles.Icon}
                                />
                            )}
                            label="Gelocalizacion"
                            onPress={() => { props.navigation.navigate('Geolocalizacion') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Image
                                source={require('../assets/img/icono-transparencia/iconos_negros/tendencia.png')}
                                style={styles.Icon}
                                />
                            )}
                            label="Estadistica"
                            onPress={() => {
                                props.navigation.navigate('LinkTransparencia', {
                                  link: 'https://cej.pj.gob.pe/cej/forms/busquedaform.html',
                                });
                              }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Image
                                source={require('../assets/img/icono-transparencia/iconos_negros/consultante.png')}
                                style={styles.Icon}
                                />
                            )}
                            label="Consulta Amigable"
                            onPress={() => {
                                props.navigation.navigate('LinkTransparencia', {
                                  link: 'https://apps5.mineco.gob.pe/transparencia/Navegador/default.aspx',
                                });
                              }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Image
                                source={require('../assets/img/icono-transparencia/iconos_negros/directorio.png')}
                                style={styles.Icon}
                                />
                            )}
                            label="Directorio"
                            onPress={() => {
                                props.navigation.navigate('DirectorioGeneral');
                              }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Image
                                source={require('../assets/img/icono-transparencia/iconos_negros/documento.png')}
                                style={styles.Icon}
                                />
                            )}
                            label="Resoluciones"
                            onPress={() => {
                                props.navigation.navigate('LinkTransparencia', {
                                  link: 'https://www.gob.pe/institucion/csjucayali/normas-legales',
                                });
                              }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Image
                                source={require('../assets/img/icono-transparencia/iconos_negros/facebook.png')}
                                style={styles.Icon}
                                />
                            )}
                            label="Facebook Noticias"
                            onPress={() => {
                                props.navigation.navigate('LinkTransparencia', {
                                  link: 'https://www.facebook.com/CSJUC',
                                });
                              }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Image
                                source={require('../assets/img/icono-transparencia/iconos_negros/desiciones.png')}
                                style={styles.Icon}
                                />
                            )}
                            label="Decisiones Judiciales"
                            onPress={() => {
                                props.navigation.navigate('LinkTransparencia', {
                                  link: 'https://gestionsij.pj.gob.pe/sentidoFallo-web/#/busqueda',
                                });
                              }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Image
                                source={require('../assets/img/icono-transparencia/iconos_negros/publico.png')}
                                style={styles.Icon}
                                />
                            )}
                            label="Programacion de Audiencias"
                            onPress={() => {
                                props.navigation.navigate('LinkTransparencia', {
                                  link: 'https://apps.pj.gob.pe/guiaprogramacion/',
                                });
                              }}
                        />
                    </View>

                </View>
            </DrawerContentScrollView>


        </View>


    )
}

export default MenuTransparencia;

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
        backgroundColor:'#960b28',
        height:150,
        marginTop:-10
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
        color:'white'
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    Icon:{
        marginRight:-20,
        width:25,
        height:25
      }
});

