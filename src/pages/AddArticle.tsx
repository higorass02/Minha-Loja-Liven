import React, {useEffect,useState} from "react"
import {Button, FlatList, Text, TouchableOpacity, View} from "react-native";
import TopBar from "../components/TopBar/TopBar";
import {useTodoList} from "../hooks/actionListCart";
import styles from "./Home/style";
import CardProduct from "../components/CardProduct";

const Index = () => {

    const { myArray,clearAll,valid,verificarMyarray,getAll, } = useTodoList()

    const obj = {'productId':2,'qtd':20};
    const vdd = false;
    // const obj = {};

    useEffect(() => {
        verificarMyarray().then(()=>{})
        console.log(myArray)
        // console.log(myArray)
        // clearAll().then(()=>{})
        // setInArray(obj).then(()=>{})
        // getItens(obj).then(()=>{})
    }, [])


    // if(myArray == []){
    //     console.log('setar false')
    //     setValid(0)
    // }else{
    //     console.log('setar true')
    //     setValid(1)
    // }
    // @ts-ignore
    const itemCardProd = ( {item} ) => {
        return (
            <TouchableOpacity
                onPress={()=>{}}
            >
                <Text>{item.productId}</Text>
                <Text>{item.qtd}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <TopBar/>
            {valid ? (
                <FlatList
                    style={styles.containerList}
                    data={myArray}
                    renderItem={itemCardProd}
                    keyExtractor={(item) => item.prodcutId}
                    horizontal={false}
                    numColumns={2}
                />
            ) : (
                <Text>Lista Vazia</Text>
            )}
        </View>
    )
}
export default Index