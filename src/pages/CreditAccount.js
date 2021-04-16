import React from 'react'
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import CreditForm from '../components/CreditForm'

const CreditAccount = ({navigation}) => {
    const credit=()=>{
        console.log("you can credit")
        ToastAndroid.showWithGravityAndOffset(
            "starting operation ...",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
        )
        //ToastAndroid.show("starting operation ...", ToastAndroid.SHORT)
    }
    return (
        <View style={styles.credit}>
            <View style={styles.header}>
                <View style={styles.strip}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}><MaterialIcons name='arrow-back' size={40} /></TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}> Fill Receiver Information </Text>
                </View>
            </View>
            <ScrollView>
            <View style={styles.body}>
                <CreditForm submit={credit} />
            </View>
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.bottomContainer}></View>
            </View>
        </View>
    )
}

export default CreditAccount

const styles=StyleSheet.create({
    credit: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flex: 1,
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
        flex: 8,
        //marginTop: 15,
        marginBottom: 10,
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