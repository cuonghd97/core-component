import React, { useState } from 'react';
import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Switch, Text, View } from 'react-native';

const App = () => {
    return (
        <View accessible={true}>
            <Text>text one</Text>
            <Text>text two</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    baseText: {
        fontWeight: 'bold',
        fontSize: 50
    },
    innerText: {
        color: 'red'
    }
});

export default App;