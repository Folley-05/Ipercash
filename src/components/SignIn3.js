import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Checkbox } from 'react-native-paper'


const SignIn3 = () => {
    return (
        <View style={styles.step3}>
            <Checkbox />
            <Text style={styles.text}>j'ai lu et j'accepte les termes et conditions d'utilisation</Text>
        </View>
    )
}

export default SignIn3

const styles=StyleSheet.create({
    step3: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,

    },
    text: {
        fontSize: 17,
    },
})
