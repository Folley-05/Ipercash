import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Input from './Input'
import ButtonContained from './ButtonContained'

const BuyForm = ({submit}) => {
    const [state, setState]=useState({
        montant: 0,
        adresse: '',
        numCompte: '',
        nomCompte: '',
    })
    const [check, setCheck]=useState({
        montant: false,
        adresse: false,
        numCompte: false,
        nomCompte: false
    })
    const valid=()=>{
        var good={
            montant: false,
            adresse: false,
            numCompte: false,
            nomCompte: false
        }
        if(state.montant<1) good.montant=true
        if(state.adresse==='') good.adresse=true
        if(state.numCompte==='') good.numCompte=true
        if(state.nomCompte==='') good.nomCompte=true
        setCheck(good)
        if(!(good.montant || good.adresse || good.numCompte || good.nomCompte)) submit()
    }
    return (
        <View style={styles.form}>
            <View style={styles.input}>
                <Input label="Montant" placeHolder="montant a envoyer" type="numeric" change={(text)=>setState({...state, montant: text})} />
                {check.montant && <Text style={styles.errorText}>Invalid amount</Text>}
            </View>
            <View style={styles.input}>
                <Input label="Adresse Depot Crypto" placeHolder="coller ici l'adresse de depot des crypto" change={(text)=>setState({...state, adresse: text})} />
                {check.adresse && <Text style={styles.errorText}>The Address is required</Text>}
            </View>
            <View style={styles.input}>
                <Input label="Numero Du Compte" placeHolder="numero du compte pour paiement" change={(text)=>setState({...state, numCompte: text})} />
                {check.numCompte && <Text style={styles.errorText}>The Account Number is required</Text>}
            </View>
            <View style={styles.input}>
                <Input label="Nom Du Compte" placeHolder="nom du compte pour paiement" change={(text)=>setState({...state, nomCompte: text})} />
                {check.nomCompte && <Text style={styles.errorText}>The Account Name is required</Text>}
            </View>
            <View style={styles.button}>
                <ButtonContained press={valid}>Envoyer</ButtonContained>
            </View>
        </View>
    )
}

export default BuyForm

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
