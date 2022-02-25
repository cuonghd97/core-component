import React, { useCallback, useState } from 'react';
import { Alert, Modal, StyleSheet, View, Text, Pressable, SafeAreaView, ScrollView, RefreshControl, StatusBar } from 'react-native';

const wait = (timeout: number | undefined) => {
    return new Promise(resolve => setTimeout(resolve, timeout))
}

const App = () => {


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                alwaysBounceHorizontal={true}
                decelerationRate="normal"
                scrollEnabled={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium deserunt consequuntur ea esse autem, at laboriosam. Ducimus vero molestias laudantium quo facere porro dignissimos sed. Iusto ipsa provident dolores fugit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat consectetur aliquid amet, maxime ex, aut perspiciatis tempora aperiam, est eos vitae labore autem. Adipisci nisi cum, cumque sapiente vitae explicabo.
                </Text>
            </ScrollView>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
    },
});


export default App;
