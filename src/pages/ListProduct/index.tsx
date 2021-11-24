import React, {useEffect, useState} from 'react'
import {
    Text,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    Modal,
    Alert,
    View,
    Pressable,
    StyleSheet,
    TextInput, Keyboard
} from 'react-native'

/* Meus Components */

import { useTodo } from '../../hooks';
import CardProduct from "../../components/CardProduct";
import styles from "./style";
import TopBar from "../../components/TopBar";

import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"

import reducer from "../../store/reduces/reducer"
import {useTodoList} from "../../hooks/actionListCart";
import AsyncStorage from "@react-native-async-storage/async-storage";

const store: Store<ArticleState, ArticleAction> & {
    dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))


const Index = () => {
    const [productId, setProductId] = useState()
    const [qtd, setQtd] = useState(0)
    const { tasks, getAllTodos, } = useTodo()
    const [modalVisible, setModalVisible] = useState(false)

    const { setItens,getAll,clearAll,dados } = useTodoList()



    useEffect(() => {
        getAllTodos()
        //clearAll()
        //getAll()
        //setItens(obj)
        //getAll()
    }, [])

    // @ts-ignore
    const itemCardProd = ( {item} ) => {
        return (
            <TouchableOpacity
                onPress={()=>{
                    setModalVisible(true)
                    setProductId(item.id)
                    setQtd(1)
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
        )
    }

    function manipularQuantity(typeManipulation:string){
        if (typeManipulation == 'reduce')
            setQtd(qtd-1)
        else if(typeManipulation == 'raise')
            setQtd(qtd+1)
    }

    function setProductToCart(product:any,quantity:number){
        if(!product)
            Alert.alert("Error",'it was not possible to add this product to the cart')
        else if(!quantity)
            Alert.alert("Error",'it was not possible to add this product to the cart')
        else
        //AQUI PODE ENTRAR ALGUMA VALIDACAO PARA VALIDAR A QUANTIDADE DE PRODUTOS NA API
            setItens({'productId':product,'qtd':quantity})
    }

    return(
        <View>
            <TopBar/>
            <SafeAreaView style={styles.container}>
                <FlatList
                    style={styles.containerList}
                    data={tasks}
                    renderItem={itemCardProd}
                    keyExtractor={(item) => item.id}
                    horizontal={false}
                    numColumns={2}
                />
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles2.centeredView}>
                        <View style={styles2.modalView}>
                            <Text>Quantity</Text>
                            <View style={styles2.buttonContext}>
                                <Pressable
                                    style={[styles2.button]}
                                    onPress={() => {
                                        manipularQuantity('reduce')
                                    }}
                                ><Text> - </Text></Pressable>
                                <Text>{qtd}</Text>
                                <Pressable
                                    style={[styles2.button]}
                                    onPress={() => {
                                        manipularQuantity('raise')
                                    }}
                                ><Text> + </Text></Pressable>
                            </View>

                            <View style={styles2.buttonContext}>
                                <Pressable
                                    style={[styles2.button, styles2.buttonClose]}
                                    onPress={() => {
                                        setModalVisible(!modalVisible)
                                    }}
                                >
                                    <Text style={styles2.textStyle}>Cancel</Text>
                                </Pressable>
                                <Pressable
                                    style={[styles2.button, styles2.buttonClose]}
                                    onPress={() => {
                                        // console.log({productId})
                                        // console.log({qtd})
                                        setModalVisible(!modalVisible)
                                        setProductToCart(productId,qtd)
                                    }}
                                >
                                    <Text style={styles2.textStyle}>Add to Cart</Text>
                                </Pressable>

                            </View>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        </View>
    )
}

const styles2 = StyleSheet.create({
    buttonContext: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginHorizontal: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
export default Index