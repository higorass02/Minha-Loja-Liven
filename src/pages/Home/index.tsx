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
    TextInput
} from 'react-native'

/* Meus Components */

import { useTodo } from '../../hooks';
import CardProduct from "../../components/CardProduct";
import styles from "./style";

const Index = () => {
    const [productId, setProductId] = useState()
    const [qtd, setQtd] = useState(0)
    const { tasks, getAllTodos, } = useTodo()
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        getAllTodos().then(()=>{})
    }, [getAllTodos])

    // @ts-ignore
    const itemCardProd = ( {item} ) => {
        return (
            <TouchableOpacity
                onPress={()=>{
                    setModalVisible(true)
                    setProductId(item.id)
                    setQtd(0)
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
                        <Text>Quantidade:</Text>
                        <View style={styles2.buttonContext}>
                            <Pressable
                                style={[styles2.button]}
                                onPress={() => {
                                    setQtd(qtd-1)
                                }}
                            ><Text> - </Text></Pressable>
                            <Text>{qtd}</Text>
                            <Pressable
                                style={[styles2.button]}
                                onPress={() => {
                                    setQtd(qtd+1)
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
                                    console.log({productId})
                                    console.log({qtd})
                                    setModalVisible(!modalVisible)
                                }}
                            >
                                <Text style={styles2.textStyle}>Add to Cart</Text>
                            </Pressable>

                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
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