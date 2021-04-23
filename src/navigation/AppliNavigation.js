import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { color } from 'react-native-reanimated'

import Home from '../pages/Home'
import BuyBC from '../pages/BuyBC'
import SellBC from '../pages/SellBC'
import CreditAccount from '../pages/CreditAccount'
import Login from '../pages/Login'
import SignIn from '../pages/SignIn'
import Web from '../pages/WebView'


const Stack=createStackNavigator()


const AppliNavigation=(props)=>{
    //console.log(props)
    return (
        <Stack.Navigator
            screenOptions={{
            headerShown: false
            }}
        >
            <Stack.Screen
                name="appHome"
                component={Home}
            />
            <Stack.Screen
                name="buy"
                component={BuyBC}
            />
            <Stack.Screen
                name="sell"
                component={SellBC}
            />
            <Stack.Screen
                name="credit"
                component={CreditAccount}
            />
            <Stack.Screen
                name="login"
                component={Login}
            />
            <Stack.Screen
                name="signin"
                component={SignIn}
            />
            <Stack.Screen
                name="webview"
                component={Web}
            />
        </Stack.Navigator>
    )
}

export default AppliNavigation




const styles=StyleSheet.create({
    tabBar: {
        borderTopWidth: 0.5,
        borderRadius: 10,
    },
    drawer: {
    }
})