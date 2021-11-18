import React, { useState } from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import { SafeAreaView, StatusBar, StyleSheet, TouchableOpacity } from "react-native";

import styles from "./style";
import CardItem from "../CardItem/CardItem";

export interface Data {
    data: Array<object>
}

function FormatDate(valor:string){
    return new Date(valor);
}

let dados = [
    {
        "id": "1",
        "createdAt": FormatDate("2019-09-02T12:58:54.103Z"),
        "name": "Rustic Metal Fish",
        "price": "289.00",
        "image": "http://lorempixel.com/640/480/food",
        "stock": 65171
    },
    {
        "id": "2",
        "createdAt": FormatDate("2019-09-02T12:58:54.103Z"),
        "name": "Rustic Metal Fish",
        "price": "289.00",
        "image": "http://lorempixel.com/640/480/food",
        "stock": 65171
    }
    ,{
        "id": "3",
        "createdAt": FormatDate("2019-09-02T22:14:05.454Z"),
        "name": "Small Cotton Shoes",
        "price": "993.00",
        "image": "http://lorempixel.com/640/480/sports",
        "stock": 36608
    },
    {
        "id": "4",
        "createdAt": FormatDate("2019-09-02T07:36:56.139Z"),
        "name": "Ergonomic Frozen Towels",
        "price": "259.00",
        "image": "http://lorempixel.com/640/480/nightlife",
        "stock": 92065
    },
    {
        "id": "5",
        "createdAt": FormatDate("2019-09-02T05:18:30.393Z"),
        "name": "Awesome Metal Pants",
        "price": "69.00",
        "image": "http://lorempixel.com/640/480/sports",
        "stock": 54930
    },
    {
        "id": "6",
        "createdAt": FormatDate("2019-09-02T16:22:03.725Z"),
        "name": "Intelligent Cotton Bacon",
        "price": "14.00",
        "image": "http://lorempixel.com/640/480/fashion",
        "stock": 88996
    },
    {
        "id": "7",
        "createdAt": FormatDate("2019-09-02T02:26:28.018Z"),
        "name": "Ergonomic Plastic Tuna",
        "price": "477.00",
        "image": "http://lorempixel.com/640/480/food",
        "stock": 73117
    },
]

// @ts-ignore
const Item = ({ item, onPress }) => (
    <TouchableOpacity onPress={onPress} style={[styles.container]}>
        <CardItem
            id={item.id}
            createdAt={item.createdAt}
            name={item.name}
            price={item.price}
            image={item.image}
            stock={item.stock}
        />
    </TouchableOpacity>
);

const FlatListBasics = () => {

    const [selectedId, setSelectedId] = useState(null);
    // @ts-ignore
    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
            />
        );
    };
    return (
        <SafeAreaView style={styles.listaContainer}>
            <FlatList
                style={styles.list}
                data={dados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
                horizontal={false}
                numColumns={2}
            />
        </SafeAreaView>
    );
}

export default FlatListBasics;