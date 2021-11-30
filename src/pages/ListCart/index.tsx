import React, {useEffect, useState} from "react"
import {Alert, FlatList, Modal, Pressable, Text, TouchableOpacity, View, ToastAndroid} from "react-native";
import TopBar from "../../components/TopBar";
import styles from "./style";
import CardItensCart from "../../components/ItensCart";
import { useProduct, useTodoList } from "../../hooks";
import {useNavigation} from "@react-navigation/native";

const Index = () => {
    const navigation = useNavigation()
    const { tasks,getIdPruduct,totalVal } = useProduct()
    const [ productId, setProductId ] = useState()
    const [ qtd, setQtd ] = useState(0)
    const [ modalVisible, setModalVisible ] = useState(false)
    const { setUpdateCart,clearAll,setRemove } = useTodoList()

    useEffect(() => {
        getIdPruduct()
    }, [])

    function manipularQuantity(typeManipulation:string){
        if (typeManipulation == 'reduce'){
            if(qtd != 0)
                setQtd(qtd-1)
        } else if(typeManipulation == 'raise') setQtd(qtd+1)
    }

    function setProductUpdateCart(product:any,quantity:number){
        if(!product)
            Alert.alert("Error",'it was not possible to add this product to the cart')
        else if(!quantity)
            Alert.alert("Error",'it was not possible to add this product to the cart')
        else
            setUpdateCart({'productId':product,'quantity':quantity}).then( ()=>{
                ToastAndroid.show("Update product!", ToastAndroid.BOTTOM);
                getIdPruduct()
            })
    }

    function setProductRemoveCart(product:any){
        if(!product)
            Alert.alert("Error",'it was not possible to add this product to the cart')
        else
            setRemove(product).then( ()=>{
                ToastAndroid.show("Removed product of Cart!", ToastAndroid.BOTTOM);
                getIdPruduct()
            })
    }

    // @ts-ignore
    const itemCardProd = ( {item} ) => {

        return (
            <TouchableOpacity
                onPress={()=>{
                    setModalVisible(true)
                    setProductId(item.id)
                    setQtd(item.quantity)
                }}
            >
                <CardItensCart
                    id={item.id}
                    createdAt={new Date(item.createdAt)}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    stock={item.stock}
                    quantity={item.quantity}
                />
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.mainContainer}>
            <TopBar/>
            {(tasks.length != 0) ? (
                    <View style={{flex: 1}}>
                        <View style={{alignItems: 'center'}}>
                            <TouchableOpacity
                                style={styles.btnClear}
                                //construir modal para comfirmar limpeza do carrinho
                                // @ts-ignore
                                onPress={() => clearAll().then(
                                    () => {
                                        ToastAndroid.show("Cart Empty!", ToastAndroid.BOTTOM);
                                        //@ts-ignore
                                        navigation.navigate('Products', {name: 'Products'})
                                    }
                                )}
                            >
                                <Text>Clear Cart</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            style={styles.containerList}
                            data={tasks}
                            renderItem={itemCardProd}
                            keyExtractor={(item) => item.id}
                        />
                        <View style={styles.containerTotVal}>
                            <Text style={styles.textTotVal}>Total Cart Value: $ {totalVal}</Text>
                        </View>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <View style={styles.centeredView2}>
                                <View style={styles.modalView2}>
                                    <Text>Quantity</Text>
                                    <View style={styles.buttonContext}>
                                        <Pressable
                                            style={[styles.button]}
                                            onPress={() => {
                                                manipularQuantity('reduce')
                                            }}
                                        ><Text style={styles.textStyle3}> - </Text></Pressable>
                                        <Text style={styles.textStyle2}>{qtd}</Text>
                                        <Pressable
                                            style={[styles.button]}
                                            onPress={() => {
                                                manipularQuantity('raise')
                                            }}
                                        ><Text style={styles.textStyle3}> + </Text></Pressable>
                                    </View>

                                    <View style={styles.buttonContext2}>
                                        <Pressable
                                            style={[styles.button, styles.buttonClose2]}
                                            onPress={() => {
                                                setModalVisible(!modalVisible)
                                            }}
                                        >
                                            <Text style={styles.textStyle}>Cancel</Text>
                                        </Pressable>
                                        <Pressable
                                            style={[styles.button, styles.buttonClose2]}
                                            onPress={() => {
                                                setModalVisible(!modalVisible)
                                                setProductUpdateCart(productId,qtd)
                                            }}
                                        >
                                            <Text style={styles.textStyle}>Update Quantity</Text>
                                        </Pressable>
                                    </View>
                                    <View>
                                        <Pressable
                                            style={[styles.button, styles.buttonClose2]}
                                            onPress={() => {
                                                setModalVisible(!modalVisible)
                                                setProductRemoveCart(productId)
                                            }}
                                        >
                                            <Text style={styles.textStyle}>Remove Product</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </View>
                // @ts-ignore
            ) : (tasks.length != 0) ? navigation.navigate('Products', {name: 'Products'}) : (
                <View style={styles.emptyList}>
                    <TouchableOpacity
                        style={styles.btnBack}
                        // @ts-ignore
                        onPress={() => navigation.navigate('Products', {name: 'Products'})}
                    >
                        <Text>Back to Products</Text>
                    </TouchableOpacity>
                    <Text>Cart List Empty!</Text>
                </View>
            )
            }
        </View>
    )
}
export default Index