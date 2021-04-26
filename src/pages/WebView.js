import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'

export  function Web() {
    return (
        <View style={styles.container}>
            <Text> La WebView </Text>
                <WebView 
                    originWhitelist={['*']}
                    source={{ uri: 'https://ipercash.fr/' }}
                />
        </View>
    )
}

export default Web

const styles=StyleSheet.create({
    container: {
        flex: 1,
    }
})
