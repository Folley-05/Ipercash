import React, { useState } from 'react'
import { StyleSheet, View  } from 'react-native'
import { Text, Dialog, Portal, Button, RadioButton } from 'react-native-paper'


const ChooseCurrency = ({view, hide, change, crypto}) => {
    return (
        <View>
            <Portal>
                <Dialog visible={view} onDismiss={hide}>
                    <Dialog.Title>choose your crypto currency</Dialog.Title>
                    <Dialog.Content>
                        <RadioButton.Group onValueChange={val=>change(val)} value={crypto} >
                            <View style={styles.radioGroup}>
                                <RadioButton value="bitcoin" color="red" />
                                <Text>Bit Coin</Text>
                            </View>
                            <View style={styles.radioGroup}>
                                <RadioButton value="eutherieum" color="red" />
                                <Text>Eutherieum</Text>
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

export default ChooseCurrency

const styles=StyleSheet.create({
    radioGroup: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
})
