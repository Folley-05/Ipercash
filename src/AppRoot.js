import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'

// import Home from './pages/applications/Home'
// import NavBar from './layout/NavBar'
import DrawerNavigation from './navigation/DrawerNavigation'
import { primaryColor, secondaryColor } from './asset/data/Colors'


const theme={
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: primaryColor,
        accent: secondaryColor
    }
}

export class AppRoot extends Component {
    render() {
        return (
            <View style={styles.appRoot} >
                <PaperProvider theme={theme}>
                    <NavigationContainer>
                        <DrawerNavigation />
                    </NavigationContainer>
                </PaperProvider>
            </View>
        )
    }
}

export default AppRoot

const styles=StyleSheet.create({
    appRoot: {
        flex: 1,
        //borderWidth: 2,
    },
})