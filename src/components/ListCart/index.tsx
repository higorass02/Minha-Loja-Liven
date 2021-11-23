import React from "react";
import {Text, View, FlatList} from 'react-native';
import styles from "./style";
// import {useTodo} from "../../hooks";
import Index from "../TopBar";

const CardProduct = () => {
    // const { tasks, getAllTodos } = useTodo()
    //
    // useEffect(() => {
    //     getAllTodos().then(()=>{})
    // }, [getAllTodos])

    const tasks = [
        {'productId':10,qtd:10}
    ]

    // @ts-ignore
    const itemCardCart = ( {item} ) => {
        return (
            <View>
                <Text>{item.productId}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Index/>
            <FlatList
                style={styles.containerList}
                data={tasks}
                renderItem={itemCardCart}
                // @ts-ignore
                keyExtractor={(item) => item.id}
                horizontal={false}
                numColumns={2}
            />
            <Text>asd</Text>
        </View>
    );
}

export default CardProduct;