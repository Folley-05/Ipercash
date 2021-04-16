import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import { Menu, Divider, Button } from 'react-native-paper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import {primaryColor, secondaryColor} from '../asset/data/Colors'



const Home = ({navigation}) => {
    const [visible, setVisible]=useState(false)
    const openMenu=()=>setVisible(true)
    const closeMenu=()=>setVisible(false)
    return (
        <View style={styles.home}>
            <View style={styles.header}>
                <View style={styles.titleBar}>
                    <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                        <MaterialIcons name="menu" size={30} color='#fff' /> 
                    </TouchableOpacity>
                        <Menu
                            visible={visible}
                            onDismiss={closeMenu}
                            anchor={<TouchableOpacity onPress={openMenu}>
                                        <MaterialIcons name="more-vert" size={30} color='#fff' /> 
                                    </TouchableOpacity>}
                        >
                            <Menu.Item title="Log In" onPress={()=>{navigation.navigate('login')}} />
                            <Menu.Item title="Log Out" onPress={()=>{}} />
                            <Divider />
                            <Menu.Item title="Sign Up" onPress={()=>{navigation.navigate('signin')}} />
                        </Menu>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.banner}>
                    {/* <Text style={styles.name}>IperCash</Text> */}
                    <Image source={require('../asset/logotransparent.jpg')} style={styles.bannerImage} />
                    <Text style={styles.bannerText}> Buy and sell cryptocurrencies </Text>
                </View>
                <View style={styles.actionContainer}>
                    <TouchableOpacity style={styles.action} onPress={()=>navigation.navigate('credit')}>
                        <Text style={styles.actionText}>Credit Mobile Account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={()=>navigation.navigate('buy')}>
                        <Text style={styles.actionText}>Buy Crypto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={()=>navigation.navigate('sell')}>
                        <Text style={styles.actionText}>Sell Crypto</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.bottomContainer}>

                </View>
            </View>
        </View>
    )
}

export default Home

const styles=StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flex: 1,
        //backgroundColor: 'red',
    },
    titleBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: '#dd1a14',
    },
    body: {
        flex: 5,
        //backgroundColor: 'green',
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#dd1a14',
    },
    banner: {
        display: 'flex',
        alignItems: 'center',
    },
    bannerImage: {
        width: 150,
        height: 150
    },
    bannerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: primaryColor,
        marginRight: 20,
        marginLeft: 10,
        textAlign: 'center',
    },
    actionContainer: {
        display: 'flex',
        alignItems: 'stretch',
        padding: 50,
    },
    action: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 75,
        marginTop: 25,
        backgroundColor: secondaryColor,
        borderColor: '#958f8f',
        borderWidth: 2,
        borderRadius: 2,
    },
    actionText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    footer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column-reverse',
    },
    bottomContainer: {
        height: 40,
        backgroundColor: '#dd1a14',
    },
    test: {
        borderWidth: 2,
        flexGrow: 1,
        backgroundColor: 'green',
    }
})