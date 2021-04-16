import React, { useState } from 'react'
import { StyleSheet, View, ScrollView, TouchableOpacity, ToastAndroid  } from 'react-native'
import { Card, Chip, Text, Dialog, Portal, Button } from 'react-native-paper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import SellForm from '../components/SellForm'
import ChooseCurrency from '../components/ChooseCurrency'
import ChoosePaiement from '../components/ChoosePaiement'

const SellBC = ({navigation}) => {
    const [visibleC, setVisibleC]=useState(false)
    const [visibleP, setVisibleP]=useState(false)
    const [params, setParams]=useState({crypto: '', payment: ''})
    const showC=()=>setVisibleC(true)
    const hideC=()=>setVisibleC(false)
    const showP=()=>setVisibleP(true)
    const hideP=()=>setVisibleP(false)
    const currency=text=>setParams({...params, crypto: text})
    const payment=text=>setParams({...params, payment: text})
    
    const sell=()=>{
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
        <View style={styles.sell}>
            <View style={styles.header}>
                    <View style={styles.strip}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}><MaterialIcons name='arrow-back' size={40} /></TouchableOpacity>
                    </View>
                <View style={styles.container}>
                    <Text style={styles.text}> Sell Crypto Currency </Text>
                </View>
            </View>
            <View style={styles.body}>
                <ScrollView>
                    <View>
                        <TouchableOpacity onPress={()=>setVisibleC(true)}><Text style={styles.textChoice}> Crypto Currency : {params.crypto} </Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>setVisibleP(true)}><Text style={styles.textChoice}> Payment Way  : {params.payment} </Text></TouchableOpacity>
                    </View>
                    <SellForm submit={sell} />
                    <ChooseCurrency view={visibleC} hide={hideC} change={currency} crypto={params.crypto} />
                    <ChoosePaiement view={visibleP} hide={hideP} change={payment} payment={params.payment} />
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <View style={styles.bottomContainer}></View>
            </View>
        </View>
    )
}

export default SellBC

const styles=StyleSheet.create({
    sell: {
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
    textChoice: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 15
    },
    body: {
        flex: 8,
        marginBottom: 10,
    },
    choiceContainer: {
        padding: 10,
    },
    chipContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 15
    },
    choiceText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    chip: {
        margin: 5
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
})