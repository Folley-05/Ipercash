import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import Input from '../components/Input'
import ButtonContained from '../components/ButtonContained'
import {primaryColor, secondaryColor} from '../asset/data/Colors'

const Login = ({navigation}) => {
    const [state, setState] = useState({
        pseudo: '',
        password: ''
    })
    const [check, setCheck] = useState({
        pseudo: false,
        password: false
    })
    const login=()=>{
        const good={
            pseudo: false,
            password: false
        }
        if(state.pseudo==='') good.pseudo=true
        if(state.password==='') good.password=true
        setCheck(good)
        if(state.pseudo && state.password) console.log(" ok Tout est bon ")
    }
    return (
        <View style={styles.login}>
            <View style={styles.header}>
                    <View style={styles.strip}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}><MaterialIcons name='arrow-back' size={40} /></TouchableOpacity>
                    </View>
                <View style={styles.container}>
                    <Text style={styles.text}> Login</Text>
                </View>
            </View>
            <View style={styles.body}>
                <View>
                    <View style={styles.input}>
                        <Input label="Pseudo" placeHolder="Your Pseudo" change={(text)=>setState({...state, pseudo: text})} />
                        {check.pseudo && <Text style={styles.errorText}>A Pseudo is required</Text>}
                    </View>
                    <View style={styles.input}>
                        <Input label="Password" placeHolder="" secure={true} change={(text)=>setState({...state, password: text})} />
                        {check.password && <Text style={styles.errorText}>Invalid password</Text>}
                    </View>
                    <View style={styles.button}>
                        <ButtonContained press={login}>  Login  </ButtonContained>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                {/* <View style={styles.bottomContainer}></View> */}
            </View>
        </View>
    )
}

export default Login

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
        flex: 10,
        justifyContent: 'center',
        paddingLeft: 20,
    },
    input: {
        marginTop: 15,
        marginRight: 40,
    },
    button: {
        display: 'flex',
        flexDirection: 'row-reverse',
        marginTop: 25,
        marginLeft: 30,
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
    errorText: {
        color: '#dd1a14',
    },
})
