import React, { useState } from 'react';
import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Switch, Text, View, TouchableHighlight, VirtualizedList, ListRenderItem } from 'react-native';



type ItemModel = {
    id: string,
    title: string
}

const DATA: ItemModel[] = []

const getItem = (data: Array<ItemModel>, index: number) => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index + 1}`
})

const getItemCount = (data: Array<ItemModel>) => 50


const Item: React.FC<{ title: String }> = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
)


const App = () => {

    return (
        <SafeAreaView style={styles.container}>
            <VirtualizedList<ItemModel>
                data={DATA}
                initialNumToRender={4}
                renderItem={({ item }) => <Item title={item.title}></Item>}
                keyExtractor={(item) => item.id}
                getItemCount={getItemCount}
                getItem={getItem}
                horizontal={false}
            >

            </VirtualizedList>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    item: {
        backgroundColor: '#f9c2ff',
        height: 150,
        justifyContent: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 20,
    },
    title: {
        fontSize: 32,
    },
});

export default App;