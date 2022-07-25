import *as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class MeteorsScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>Meteors Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: "#000000"
    },
    text: { color: "#FFFFFF", fontSize: 28, fontWeight: "bold", alignSelf: "center", marginTop: 200 }
})