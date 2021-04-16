import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text, ToastAndroid } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import SignInForm from '../components/SignInForm'

const SignIn = ({navigation}) => {
    const sub=()=>{{
        console.log("ok vous avez fine")
        ToastAndroid.showWithGravityAndOffset(
            "starting registering ...",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
        )
        //ToastAndroid.show("starting operation ...", ToastAndroid.SHORT)
    }
    }
    return (
        <View style={styles.login}>
            <View style={styles.header}>
                    <View style={styles.strip}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}><MaterialIcons name='arrow-back' size={40} /></TouchableOpacity>
                    </View>
                <View style={styles.container}>
                    <Text style={styles.text}> SignIn</Text>
                </View>
            </View>
            <View style={styles.body}>
                <SignInForm submit={sub} />
            </View>
            <View style={styles.footer}>
                <View style={styles.bottomContainer}></View>
            </View>
        </View>
    )
}

export default SignIn

const styles=StyleSheet.create({
    login: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flex: 0,
    },
    strip: {
        height: 40,
        backgroundColor: '#dd1a14',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#958f8f',
    },
    body: {
        flex: 1
    },
    footer: {
        flex: 0,
        display: 'flex',
        flexDirection: 'column-reverse',
    },
    bottomContainer: {
        height: 40,
        backgroundColor: '#dd1a14',
    },
})

