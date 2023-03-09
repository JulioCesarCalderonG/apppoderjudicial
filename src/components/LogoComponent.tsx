import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';

const LogoComponent = () => {
  return (
    <View
        style={styles.containerLogo}
    >
        <Image
            source={require('../assets/img/menu/PJ_UCA.png')}
            style={styles.logoPrincipal}
        />
    </View>
  )
}

export default LogoComponent;

const styles = StyleSheet.create({
    containerLogo:{
        width:'55%',
        height:50,
        padding:20,
        marginTop:150
    },
    logoPrincipal:{
        width:'100%',
        height:50
    }
});