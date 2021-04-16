import React, { useState } from 'react'
import { StyleSheet, View, Text, _View } from 'react-native'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps'
import { Checkbox } from 'react-native-paper'

import Input from './Input'
import ButtonContained from './ButtonContained'
import {primaryColor, secondaryColor} from '../asset/data/Colors'

const btnStyle={color: primaryColor};


const SignInForm = ({submit}) => {
    const [state, setState]=useState({
        email: '',
        pseudo: '',
        password: '',
        confirm: '',
        lastName: '',
        firstName: '',
        country: '',
        city: '',
        accept: false

    })
    const [errs, setErrs]=useState({err1: true, err2: true, err3: true})
    const [check, setCheck]=useState({
        email: false,
        pseudo: false,
        password: false,
        confirm: false,
        lastName: false,
        firstName: false,
        country: false,
        city: false,
    })
    const valid1=()=>{
        let good={
            email: false,
            pseudo: false,
            password: false,
            confirm: false,
        }
        if(state.email==='') good.email=true
        if(state.pseudo==='') good.pseudo=true
        if(state.password==='') good.password=true
        if(state.password!==state.confirm) good.confirm=true
        setCheck({...check, ...good})
        if(!good.email && !good.pseudo && !good.password && !good.confirm)
            setErrs({...errs, err1: false})
    }
    const valid2=()=>{
        let good={
            lastName: false,
            firstName: false,
            country: false,
            city: false,
        }
        if(state.lastName==='') good.lastName=true
        if(state.firstName==='') good.firstName=true
        if(state.country==='') good.country=true
        if(state.city==='') good.city=true
        setCheck({...check, ...good})
        if(!good.lastName && !good.firstName && !good.country && !good.city)
            setErrs({...errs, err2: false})
    }
    return (
        <View style={styles.form}>
            <ProgressSteps
                isComplete={state.accept}
                //borderWidth={20}
                activeStepIconBorderColor={primaryColor}
                progressBarColor={primaryColor}
                completedProgressBarColor={primaryColor}
                completedStepIconColor={primaryColor}
                //activeStepIconColor={primaryColor}
                labelColor={secondaryColor}
                activeLabelColor={primaryColor}
            >
                <ProgressStep 
                    onNext={valid1}
                    errors={errs.err1}
                    label='Account' 
                    nextBtnTextStyle={btnStyle} 
                    reviousBtnTextStyle={btnStyle}
                >
                    <View>
                        <View style={styles.input}>
                            <Input label="Email" placeHolder="Your Email" change={(text)=>setState({...state, email: text})} />
                            {check.email && <Text style={styles.errorText}>Invalid email</Text>}
                        </View>
                        <View style={styles.input}>
                            <Input label="Pseudo" placeHolder="Your Pseudo" change={(text)=>setState({...state, pseudo: text})} />
                            {check.pseudo && <Text style={styles.errorText}>Invalid pseudo</Text>}
                        </View>
                        <View style={styles.input}>
                            <Input label="Password" placeHolder="" secure={true} change={(text)=>setState({...state, password: text})} />
                            {check.password && <Text style={styles.errorText}>Invalid password</Text>}
                        </View>
                        <View style={styles.input}>
                            <Input label="Confirm Password" placeHolder="" secure={true} change={(text)=>setState({...state, confirm: text})} />
                            {check.confirm && <Text style={styles.errorText}>password dont match</Text>}
                        </View>
                    </View>
                </ProgressStep>
                <ProgressStep 
                    onNext={valid2}
                    errors={errs.err2}
                    label='Personal'
                    nextBtnTextStyle={btnStyle}
                    previousBtnTextStyle={btnStyle}
                >
                    <View>
                        <View style={styles.input}>
                            <Input label="Last Name" placeHolder="Your Name" change={(text)=>setState({...state, lastName: text})} />
                            {check.lastName && <Text style={styles.errorText}>The Last Name is required</Text>}
                        </View>
                        <View style={styles.input}>
                            <Input label="First Name" placeHolder="Your First Name" change={(text)=>setState({...state, firstName: text})} />
                            {check.firstName && <Text style={styles.errorText}>The First Name is required</Text>}
                        </View>
                        <View style={styles.input}>
                            <Input label="Country" placeHolder="Your Country" change={(text)=>setState({...state, country: text})} />
                            {check.country && <Text style={styles.errorText}>The Country is required</Text>}
                        </View>
                        <View style={styles.input}>
                            <Input label="City" placeHolder="Your City" change={(text)=>setState({...state, city: text})} />
                            {check.city && <Text style={styles.errorText}>The City required</Text>}
                        </View>
                    </View>
                </ProgressStep>
                <ProgressStep 
                    onSubmit={state.accept ? submit : null}
                    label='Privacy' 
                    nextBtnTextStyle={btnStyle} 
                    previousBtnTextStyle={btnStyle}
                >
                    <View style={styles.step3}>
                        <Checkbox 
                            color={primaryColor}
                            status={state.accept ? 'checked' : 'unchecked'}
                            onPress={()=>setState({...state, accept: !state.accept})}
                        />
                        <Text style={styles.text}>j'ai lu et j'accepte les termes et conditions d'utilisation</Text>
                    </View>
                </ProgressStep>
            </ProgressSteps>
        </View>
    )
}

export default SignInForm

const styles=StyleSheet.create({
    form: {
        flex: 1,
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
    step3: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,

    },
    text: {
        fontSize: 17,
    },
    errorText: {
        color: '#dd1a14',
    },
})
