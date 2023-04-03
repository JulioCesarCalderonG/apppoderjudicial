import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Linking,Alert, Dimensions } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { drawerStyle } from '../style/DrawerMenuStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Pdf from 'react-native-pdf';


interface Props extends DrawerScreenProps<any, any> { };

const PdfScreen = ({ navigation }: Props) => {
    
 const [datos, setDatos] = useState<boolean>(false);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (!state) return setDatos(false);
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      setDatos(state.isConnected!)
    });
  }, [datos]);
  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <View
          style={drawerStyle.container}>
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={{
              marginLeft: 10,
            }}>
            <Icon
              name='menu'
              style={{
                fontSize: 30,
                color: 'white'

              }}
            />
          </TouchableOpacity>
          <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'white' }}> CSJ Ucayali</Text>
        </View>
      ),
      drawerPosition: 'left',
    });
  }, []);
  return (
    <View style={styles.container}>
                <Pdf    
                    trustAllCerts={false}
                    source={{
                      uri: 'https://gongalsoft.com/api/politicaprivacidad/poderjudicial',
                      cache: true,
                    }}
                    onLoadComplete={(numberOfPages, filePath) => {
                      console.log(`Number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page, numberOfPages) => {
                      console.log(`Current page: ${page}`);
                    }}
                    onError={error => {
                      console.log(error);
                    }}
                    onPressLink={uri => {
                      console.log(`Link pressed: ${uri}`);
                    }}
                    style={styles.pdf}/>
            </View>
  )
}

export default PdfScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});