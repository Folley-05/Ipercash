import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Input from './Input'
import ButtonContained from './ButtonContained'

const SignIn1 = () => {
    const [state, setState]=useState({
        lastName: '',
        firstName: '',
        country: '',
        city: '',
    })
    const [check, setCheck]=useState({
        lastName: 0,
        firstName: '',
        country: '',
        city: '',
    })
    const valid=()=>{
        var good={
            lastName: false,
            firstName: false,
            country: false,
            city: false,
            error: true,
        }
        if(state.lastName==='') good.lastName=true
        if(state.firstName==='') good.firstName=true
        if(state.country==='') good.country=true
        if(state.city==='') good.city=true
        setCheck(good)
        if(!(good.lastName || good.firstName || good.country || good.city)) submit()
    }
    return (
        <View>
            <View style={styles.input}>
                <Input label="Last Name" placeHolder="Your Name" change={(text)=>setState({...state, lastName: text})} />
                {check.lastName && <Text>Invalid amount</Text>}
            </View>
            <View style={styles.input}>
                <Input label="First Name" placeHolder="Your First Name" change={(text)=>setState({...state, firstName: text})} />
                {check.firstName && <Text>The Address is required</Text>}
            </View>
            <View style={styles.input}>
                <Input label="Country" placeHolder="Your Country" change={(text)=>setState({...state, country: text})} />
                {check.country && <Text>The Account Number is required</Text>}
            </View>
            <View style={styles.input}>
                <Input label="City" placeHolder="Your City" change={(text)=>setState({...state, city: text})} />
                {check.city && <Text>The Account Name is required</Text>}
            </View>
        </View>
    )
}

export default SignIn1

const styles=StyleSheet.create({
    input: {
        marginTop: 15,
        marginRight: 40,
    },
})
