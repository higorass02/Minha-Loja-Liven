import React, {useEffect, useState} from 'react'
import { Text, SafeAreaView, FlatList, TouchableOpacity, Modal, Alert, View, Pressable, ToastAndroid } from 'react-native'

/* Meus Components */
import styles from "./style";
import { useProduct } from '../../hooks';
import { useTodoList,setPagProduct } from "../../hooks";
import CardProduct from "../../components/CardProduct";
import TopBar from "../../components/TopBar";

const Index = () => {
    const [ productId, setProductId ] = useState()
    const [ qtd, setQtd ] = useState(0)
    const [ modalVisible, setModalVisible ] = useState(false)
    const { tasks, getAllTodos,setTasks } = useProduct()
    const { setItens } = useTodoList()
    const { setNumberPag,getMaxPag,maxPag,getPagNow,pagNow } = setPagProduct()
    let pags:any = [];
    const showToast = () => {
        ToastAndroid.show("Added product!", ToastAndroid.BOTTOM);
    };

    useEffect(() => {
        getAllTodos()
        getMaxPag()
    }, [])
    // @ts-ignore
    for (let i = 1;i<= maxPag; i++){
        pags.push(i)
    }
    getPagNow()
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

    // @ts-ignore
    const itemPags = ( {item} ) => {
        return (
            <TouchableOpacity
                onPress={ ()=>{ manipularPags(item) } }
            >
                {
                    (pagNow != item)
                        ? <Text  style={styles.itemPaginate}>{item}</Text>
                        : <Text  style={styles.itemPaginateNow}>{item}</Text>
                }
            </TouchableOpacity>
        )
    }

    function manipularQuantity(typeManipulation:string){
        if (typeManipulation == 'reduce'){
            if(qtd != 0)
            setQtd(qtd-1)
        } else if(typeManipulation == 'raise') setQtd(qtd+1)
    }

    function manipularPags(numberPag:string){
        setNumberPag(numberPag).then( ()=> getAllTodos() )
    }

    function setProductToCart(product:any,quantity:number){
        if(!product)
            Alert.alert("Error",'it was not possible to add this product to the cart!')
        else if(!quantity)
            Alert.alert("Error",'it was not possible to add this product to the cart!')
        else{
            if(quantity == 0){
                Alert.alert("Error",'impossible to add zero products!')
            }else{
                //AQUI PODE ENTRAR ALGUMA VALIDACAO PARA VALIDAR A QUANTIDADE DE PRODUTOS NA API
                setItens({'productId':product,'quantity':quantity}).then( ()=>{
                    //setTasks([])
                    //getAllListCart()
                    showToast()
                })
            }
        }

    }

    return(
        <View style={styles.container}>
            <TopBar/>
            <SafeAreaView>
                <FlatList
                    style={styles.containerList}
                    data={tasks}
                    renderItem={itemCardProd}
                    keyExtractor={(item) => item.id}
                    horizontal={false}
                    numColumns={2}
                />
                <View style={styles.containerPag}>
                    <FlatList
                        data={pags}
                        renderItem={itemPags}
                        horizontal={true}
                    />
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
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
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
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => {
                                        setModalVisible(!modalVisible)
                                    }}
                                >
                                    <Text style={styles.textStyle}>Cancel</Text>
                                </Pressable>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => {
                                        // console.log({productId})
                                        // console.log({qtd})
                                        setModalVisible(!modalVisible)
                                        setProductToCart(productId,qtd)
                                    }}
                                >
                                    <Text style={styles.textStyle}>Add to Cart</Text>
                                </Pressable>

                            </View>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        </View>
    )
}

export default Index