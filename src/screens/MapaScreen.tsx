import React, {useEffect, useState} from 'react';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {RootDrawerTransparenciaParams} from '../navigation/DrawerTransparencia';
import {drawerStyle} from '../style/DrawerMenuStyle';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props
  extends DrawerScreenProps<RootDrawerTransparenciaParams, 'Mapa'> {}

const MapaScreen = ({  navigation, route}: Props) => {
  
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
            style={{
              marginLeft: 190,
              borderRadius: 2,
              width: 30,
              alignItems: 'center',
            }}
            onPress={() => {
              navigation.navigate('Geolocalizacion');
            }}>
            <Icon name="arrow-back-sharp" size={25} style={{color: 'white'}} />
          </TouchableOpacity>
        </View>
      ),
      drawerPosition: 'left',
    });
  }, []);
  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: route.params.lat,
          longitude: route.params.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: route.params.lat,
            longitude: route.params.lng,
          }}
          /* image={route.params.img} */
          title={route.params.titulo}
          description={route.params.direccion}>

          <Image
            source={route.params.img}
            style={{
              width:200,
              height:150,
              borderRadius:10
            }}
          />
        </Marker>
        
      </MapView>
    </View>
  );
};

export default MapaScreen;
