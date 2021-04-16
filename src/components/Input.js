import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'

const Input = ({label , placeHolder, change, type, secure=false}) => {
    //const [text, setText]=useState('')
    return (
        <TextInput
            keyboardType={type}
            mode='outlined'
            label={label}
            placeholder={placeHolder}
            onChangeText={text=>change(text)}
            secureTextEntry={secure}
        />
    )
}

export default Input
