import {
    DrawerContentScrollView,
    DrawerContentComponentProps,
    DrawerItem

} from '@react-navigation/drawer';
import { View, StyleSheet } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph
} from 'react-native-paper'

import Icon from 'react-native-vector-icons/Ionicons';

const MenuJudiciales = (props: DrawerContentComponentProps) => {
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
                                    name="send-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Inicio"
                            onPress={() => { props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="send-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Menu Principal"
                            onPress={() => { props.navigation.navigate('Judiciales') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="send-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Menu Principal"
                            onPress={() => { props.navigation.navigate('Judiciales') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="send-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Menu Principal"
                            onPress={() => { props.navigation.navigate('Judiciales') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="send-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Menu Principal"
                            onPress={() => { props.navigation.navigate('Judiciales') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="send-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Menu Principal"
                            onPress={() => { props.navigation.navigate('Judiciales') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="send-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Menu Principal"
                            onPress={() => { props.navigation.navigate('Judiciales') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="send-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Menu Principal"
                            onPress={() => { props.navigation.navigate('Judiciales') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="send-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Menu Principal"
                            onPress={() => { props.navigation.navigate('Judiciales') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="send-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Menu Principal"
                            onPress={() => { props.navigation.navigate('Judiciales') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="send-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Menu Principal"
                            onPress={() => { props.navigation.navigate('Judiciales') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="send-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Menu Principal"
                            onPress={() => { props.navigation.navigate('Judiciales') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="send-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Menu Principal"
                            onPress={() => { props.navigation.navigate('Judiciales') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="send-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Menu Principal"
                            onPress={() => { props.navigation.navigate('Judiciales') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="send-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Menu Principal"
                            onPress={() => { props.navigation.navigate('Judiciales') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="send-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Menu Principal"
                            onPress={() => { props.navigation.navigate('Judiciales') }}
                        />
                        
                    </View>

                </View>
            </DrawerContentScrollView>


        </View>


    )
}

export default MenuJudiciales;

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
});

