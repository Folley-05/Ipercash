import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Input from './Input'
import ButtonContained from './ButtonContained'


const SignIn2 = () => {
    const [state, setState]=useState({})
    const [check, setCheck]=useState(false)
    const valid=()=>{}
    return (
        <View>
            <View style={styles.input}>
                <Input label="Last Name" placeHolder="Your Name" change={(text)=>setState({...state, montant: text})} />
                {check.montant && <Text>Invalid amount</Text>}
            </View>
            <View style={styles.input}>
                <Input label="First Name" placeHolder="Your First Name" change={(text)=>setState({...state, adresse: text})} />
                {check.adresse && <Text>The Address is required</Text>}
            </View>
            <View style={styles.input}>
                <Input label="Country" placeHolder="Your Country" change={(text)=>setState({...state, numCompte: text})} />
                {check.numCompte && <Text>The Account Number is required</Text>}
            </View>
            <View style={styles.input}>
                <Input label="City" placeHolder="Your City" change={(text)=>setState({...state, nomCompte: text})} />
                {check.nomCompte && <Text>The Account Name is required</Text>}
            </View>
        </View>
    )
}

export default SignIn2

const styles=StyleSheet.create({
    input: {
        marginTop: 15,
        marginRight: 40,
    },
})
