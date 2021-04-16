import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export class DrawerContent extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <View style={{flex: 1}}>
                <Drawer.Section>
                    <View style={styles.avatar}>
                            <Image source={require('../asset/logo.jpg')} style={styles.avatarImage} />
                            <Text style={styles.avatarName}>IperCash</Text>
                    </View>
                </Drawer.Section>
                <DrawerContentScrollView {...this.props}>
                    <Drawer.Item
                        label="Settings"
                        icon={()=>(
                            <MaterialIcons
                                name='settings'
                                size={25}
                            />
                        )}
                    />
                    <Drawer.Item
                        label="Privacy Policy"
                        icon={()=>(
                            <MaterialIcons
                            name='policy'
                            size={25}
                            />
                        )}
                    />
                    <Drawer.Item
                        label="About"
                        icon={()=>(
                            <MaterialIcons
                            name='menu-book'
                            size={25}
                            />
                        )}
                    />
                </DrawerContentScrollView>
                <Drawer.Section style={styles.bottomDrawer}>
                    <Drawer.Item
                        icon={()=>(
                            <MaterialIcons
                            name='exit-to-app'
                            size={25}
                            />
                        )}
                        label="LogOut"
                    />
                </Drawer.Section>
            </View>
        )
    }
}

export default DrawerContent

const styles=StyleSheet.create({
    drawer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomDrawer: {
        backgroundColor: '#dd1a14',
        marginBottom: 0,
    },
    avatar: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 30,
    },
    avatarImage: {
        width: 120,
        height: 120,
        marginBottom: 10,
        marginTop: 15,
    },
    avatarName: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
    },
})
