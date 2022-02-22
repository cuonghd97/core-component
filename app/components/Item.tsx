import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ModelItem} from '../models/item';

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

type props = {
    item: ModelItem;
    onPress: () => void;
    backgroundColor: string;
    textColor: string;
};

const Item: React.FC<props> = ({item, onPress, backgroundColor, textColor}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.item, {backgroundColor: backgroundColor}]}
        >
            <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
        </TouchableOpacity>
    );
};

export default Item;
