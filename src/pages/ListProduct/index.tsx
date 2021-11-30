import React, {useEffect, useState} from 'react'
import { Text, SafeAreaView, FlatList, TouchableOpacity, Modal, Alert, View, Pressable, StyleSheet } from 'react-native'

/* Meus Components */
import styles from "./style";
import { useProduct } from '../../hooks';
import { useTodoList,setPagProduct } from "../../hooks";
import CardProduct from "../../components/CardProduct";
import TopBar from "../../components/TopBar";
import { useNavigation } from '@react-navigation/native';

const Index = () => {
    const navigation = useNavigation();
    const [ productId, setProductId ] = useState()
    const [ qtd, setQtd ] = useState(0)
    const [ modalVisible, setModalVisible ] = useState(false)
    const { tasks, getAllTodos,setTasks } = useProduct()
    const { setItens } = useTodoList()
    const { setNumberPag,getMaxPag,maxPag,getPagNow,pagNow } = setPagProduct()
    let pags:any = [];

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
        if (typeManipulation == 'reduce')
            setQtd(qtd-1)
        else if(typeManipulation == 'raise')
            setQtd(qtd+1)
    }

    function manipularPags(numberPag:string){
        setNumberPag(numberPag).then( ()=> getAllTodos() )
    }

    function setProductToCart(product:any,quantity:number){
        if(!product)
            Alert.alert("Error",'it was not possible to add this product to the cart')
        else if(!quantity)
            Alert.alert("Error",'it was not possible to add this product to the cart')
        else
        //AQUI PODE ENTRAR ALGUMA VALIDACAO PARA VALIDAR A QUANTIDADE DE PRODUTOS NA API
            setItens({'productId':product,'quantity':quantity}).then( ()=>{
                //setTasks([])
                //getAllListCart()
            })
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