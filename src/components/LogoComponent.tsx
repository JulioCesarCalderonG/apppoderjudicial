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
        marginTop:150,
        marginBottom:35,
        flexDirection:'row',
        
    },
    logoPrincipal:{
        width:'15%',
        height:45
    },
    viewText:{
        height:40,
        left:10,
        justifyContent:'center'
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