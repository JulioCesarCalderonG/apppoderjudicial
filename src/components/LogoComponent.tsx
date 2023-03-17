import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';

const LogoComponent = () => {
  return (
    <View
        style={styles.containerLogo}
    >
        <Image
            source={require('../assets/img/pj2.png')}
            style={styles.logoPrincipal}
        />
        <View style={styles.viewText}>
        <Text style={styles.title}>PODER JUDICIAL</Text>
        <Text style={styles.subTitle}>Corte Superior de Justicia de Ucayali</Text>
        </View>
    </View>
  )
}

export default LogoComponent;

const styles = StyleSheet.create({
    containerLogo:{
        width:'100%',
        height:50,
        padding:20,
        marginTop:160,
        marginBottom:25,
        flexDirection:'row',
        alignItems:'center'        
    },
    logoPrincipal:{
        width:'12%',
        height:40
    },
    viewText:{
        height:40,
        left:10,
    },
    title:{
        color:'black',
        fontWeight:'bold',
        fontSize:18
    },
    subTitle:{
        color:'black',
        fontWeight:'bold',
        fontSize:15
    },
    
});