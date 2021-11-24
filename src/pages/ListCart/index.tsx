import React, {useEffect} from "react"
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import TopBar from "../../components/TopBar";
import styles from "./style";
import CardItensCart from "../../components/ItensCart";
import { useProduct, useTodoList } from "../../hooks";
import {useNavigation} from "@react-navigation/native";

const Index = () => {
    const { tasks,getIdPruduct, } = useProduct()
    const { clearAll } = useTodoList()
    const navigation = useNavigation();

    useEffect(() => {
        getIdPruduct().then( ()=>{} )
    }, [])

    // @ts-ignore
    const itemCardProd = ( {item} ) => {
        return (
            <CardItensCart
                id={item.id}
                createdAt={new Date(item.createdAt)}
                name={item.name}
                price={item.price}
                image={item.image}
                stock={item.stock}
                quantity={item.quantity}
            />
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
                                onPress={() => clearAll().then(() => navigation.navigate('ListProduct', {name: 'ListProduct'}))}
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
                    </View>
                // @ts-ignore
            ) : (tasks.length != 0) ? navigation.navigate('ListProduct', {name: 'ListProduct'}) : (
                <View style={styles.emptyList}>
                    <TouchableOpacity
                        style={styles.btnBack}
                        // @ts-ignore
                        onPress={() => navigation.navigate('ListProduct', {name: 'ListProduct'})}
                    >
                        <Text>Back to Products</Text>
                    </TouchableOpacity>
                </View>
            )
            }
        </View>
    )
}
export default Index