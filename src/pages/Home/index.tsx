import React,{ useEffect } from 'react'
import {Text, SafeAreaView, FlatList, TouchableOpacity} from 'react-native'

/* Meus Components */

import { useTodo } from '../../hooks';
import CardProduct from "../../components/CardProduct";
import styles from "./style";

const Index = () => {
    const { tasks, getAllTodos, } = useTodo();

    useEffect(() => {
        getAllTodos().then(()=>{});
    }, [getAllTodos]);

    // @ts-ignore
    const itemCardProd = ( {item} ) => {
        return (
            <TouchableOpacity
                onPress={()=>{
                    console.log('click')
                }}
            >
                <CardProduct
                    id={item.id}
                    createdAt={new Date(item.createdAt)}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    stock={item.stock}
                />
            </TouchableOpacity>
        );
    };

    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                style={styles.containerList}
                data={tasks}
                renderItem={itemCardProd}
                keyExtractor={(item) => item.id}
                horizontal={false}
                numColumns={2}
            />
            <Text> asd</Text>
        </SafeAreaView>
    )
}
export default Index