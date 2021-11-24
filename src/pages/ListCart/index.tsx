import React, {useEffect} from "react"
import {FlatList, Text, View} from "react-native";
import TopBar from "../../components/TopBar";
import styles from "./style";
import CardItensCart from "../../components/ItensCart";
import { useProduct } from "../../hooks";

const Index = () => {
    const { tasks,getIdPruduct } = useProduct()

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
            {tasks ? (
                <FlatList
                    style={styles.containerList}
                    data={tasks}
                    renderItem={itemCardProd}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <Text>Lista Vazia</Text>
            )}
        </View>
    )
}
export default Index