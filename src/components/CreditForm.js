import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Input from './Input'
import ButtonContained from './ButtonContained'

const CreditForm = ({submit}) => {
    const [state, setState]=useState({
        name: '',
        phone: '',
        confirm: ''
    })
    const [check, setCheck]=useState({
        name: false,
        confirm: false
    })
    const valid=()=>{
        var good={name: false, confirm: false}
        if(state.phone==='' || state.confirm!==state.phone) good.confirm=true
        if(state.name=='') good.name=true
        setCheck(good)
        console.log(good)
        if(!(good.name || good.confirm )) submit()
    }
    return (
        <View style={styles.form}>
            <View style={styles.input}>
                <Input label="Full Name" placeHolder="receiver's name" change={(text)=>{setState({...state, name: text})}} />
                { check.name && <Text style={styles.errorText}>The name is require</Text>}
            </View>
            <View style={styles.input}>
                <Input label="Phone Number" placeHolder="receiver's phone number" type="numeric" change={(text)=>{setState({...state, phone: text})}} />
            </View>
            <View style={styles.input}>
                <Input label="Confirm Phone Number" placeHolder="confirm receiver's phone number" type="numeric" change={(text)=>{setState({...state, confirm: text})}} />
                { check.confirm && <Text style={styles.errorText}>Aucune correspondance</Text>}
            </View>
            <View style={styles.button}>
                <ButtonContained press={valid}>Envoyer</ButtonContained>
            </View>
        </View>
    )
}

export default CreditForm

const styles=StyleSheet.create({
    form: {
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
    errorText: {
        color: '#dd1a14',
    },
})
