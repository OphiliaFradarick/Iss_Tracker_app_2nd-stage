import *as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.text}>This is the home screen</Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {flex:1, backgroundColor:"lightblue"},
    text: {fontSize:30, color:"red"}
})