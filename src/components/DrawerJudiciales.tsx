import {DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props{
    label:string,
    img:any,
    onPress:()=>void
}


const DrawerJudiciales = ({label,img,onPress}:Props) => {
  return (
    <DrawerItem
      icon={({color, size}) => (
        <Image
        source={img}
        style={styles.icon}
        />
      )}
      label={label}
      labelStyle={{
        fontSize: 12,
      }}
      style={{
        width: 300,
      }}
      onPress={onPress}
    />
  );
};

export default DrawerJudiciales;

const styles = StyleSheet.create({
    icon:{
        marginRight:-20,
        width:25,
        height:25
      }
})
