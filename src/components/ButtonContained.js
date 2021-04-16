import React from 'react'
import { Button } from 'react-native-paper'

const ButtonContained = ({children, press}) => {
    return (
        <Button
            mode="contained"
            onPress={press}
        >{children}
        </Button>
    )
}

export default ButtonContained
