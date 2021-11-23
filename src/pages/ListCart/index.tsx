import React, {useEffect} from "react"
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import TopBar from "../../components/TopBar";
import {useTodoList} from "../../hooks/actionListCart";
import styles from "./style";
import CardItensCart from "../../components/ItensCart";

const Index = () => {
    const { dados,getListCartProducts,clearAll } = useTodoList()

    useEffect(() => {
        getListCartProducts()
    }, [])

    //console.log(dados)

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
            />
        )
    }

    return (
        <View style={styles.mainContainer}>
            <TopBar/>
            {dados ? (
                <FlatList
                    style={styles.containerList}
                    data={dados}
                    renderItem={itemCardProd}
                    keyExtractor={(item) => item.productId}
                />
            ) : (
                <Text>Lista Vazia</Text>
            )}
        </View>
    )
}
export default Index

// import React, {useEffect,useState} from "react"
// import {Button, FlatList, Text, TouchableOpacity, View} from "react-native";
// import Index from "../../components/TopBar";
// import {useTodoList} from "../../hooks/actionListCart";
// import styles from "../Home/style";
// import CardProduct from "../../components/CardProduct";
//
// const Index = () => {
//
//     const { myArray,clearAll,valid,verificarMyarray,getAll, } = useTodoList()
//
//     const obj = {'productId':2,'qtd':20};
//     const vdd = false;
//     // const obj = {};
//
//     useEffect(() => {
//         verificarMyarray().then(()=>{})
//         console.log(myArray)
//         // console.log(myArray)
//         // clearAll().then(()=>{})
//         // setInArray(obj).then(()=>{})
//         // getItens(obj).then(()=>{})
//     }, [])
//
//
//     // if(myArray == []){
//     //     console.log('setar false')
//     //     setValid(0)
//     // }else{
//     //     console.log('setar true')
//     //     setValid(1)
//     // }
//     // @ts-ignore
//     const itemCardProd = ( {item} ) => {
//         return (
//             <TouchableOpacity
//                 onPress={()=>{}}
//             >
//                 <Text>{item.productId}</Text>
//                 <Text>{item.qtd}</Text>
//             </TouchableOpacity>
//         )
//     }
//
//     return (
//         <View>
//             <Index/>
//             {valid ? (
//                 <FlatList
//                     style={styles.containerList}
//                     data={myArray}
//                     renderItem={itemCardProd}
//                     keyExtractor={(item) => item.prodcutId}
//                     horizontal={false}
//                     numColumns={2}
//                 />
//             ) : (
//                 <Text>Lista Vazia</Text>
//             )}
//         </View>
//     )
// }
// export default Index