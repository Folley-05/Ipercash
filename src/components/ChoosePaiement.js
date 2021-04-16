import React, { useState } from 'react'
import { StyleSheet, View  } from 'react-native'
import { Text, Dialog, Portal, Button, RadioButton } from 'react-native-paper'

const ChoosePaiement = ({view, hide, change, payment}) => {
    return (
        <View>
            <Portal>
                <Dialog visible={view} onDismiss={hide}>
                    <Dialog.Title>choose your payment way</Dialog.Title>
                    <Dialog.Content>
                        <RadioButton.Group onValueChange={val=>change(val)} value={payment} >
                            <View style={styles.radioGroup}>
                                <RadioButton value="VISA" color="red" />
                                <Text>VISA</Text>
                            </View>
                            <View style={styles.radioGroup}>
                                <RadioButton value="Mobile Money" color="red" />
                                <Text>Mobile Money</Text>
                            </View>
                        </RadioButton.Group>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={hide}>Ok</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    )
}

export default ChoosePaiement

const styles=StyleSheet.create({
    radioGroup: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
})
