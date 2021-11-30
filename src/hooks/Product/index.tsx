import { useState, useCallback } from 'react';

import { IProduct } from '../../interfaces';
import { TodoService } from '../../services';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Alert} from "react-native";

export const useProduct = () => {
    const [tasks, setTasks] = useState<IProduct[]>([])
    const [ totalVal, setTotalVal ] = useState(0)

    const [returnProduct, setReturnProduct] = useState()

    const getAllTodos = useCallback(async () => {
        const { status, data } = await TodoService.getAllTodos()
        if (status !== 200) throw new Error()
        setTasks(data)
    }, []);

    const getId = useCallback(async (productId) => {
        const { status, data } = await TodoService.getId(productId)
        if (status !== 200) throw new Error()
        return data
    }, []);

    function getIdPruduct () {
        Promise.all([AsyncStorage.getItem("@LIST_CART")]).then(
            (values:any)=>{
                let data = JSON.parse(values)
                if(data){
                    setTotalVal(0)
                    let temp = 0
                    data.itens.map( (x:any)=>{
                        temp = temp+ (x.price*x.quantity)
                    } )
                    setTotalVal(temp)
                    setTasks(data.itens)
                }
            }
        )
    }

    return {
        tasks,
        getAllTodos,
        getIdPruduct,
        totalVal,
        setTasks,
        getId
    };
};

// const getIdPruduct = useCallback(async () => {
//
//     // try{
//     let returnCardList = await AsyncStorage.getItem("@LIST_CART")
//     if(returnCardList !== null){
//         let data = JSON.parse(returnCardList)
//         setTheArray([])
//         data.itens.map( (product:any) =>  {
//             arrayTemp.push(product)
//             getId(product.productId).then( ()=>{} )
//         } )
//         // unica solucao encontrada na epoca para resolver o bug do retorno do component vazio devio chamar uma funcao async dentro de um Callback
//         setTimeout( ()=>{
//             let tempVal = 0
//             theArray.map( (i)=> {
//                 // @ts-ignore
//                 arrayTemp.map( (x) => {
//                     // @ts-ignore
//                     if(x.productId == i.id){
//                         // @ts-ignore
//                         i.quantity = x.qtd
//                         // @ts-ignore
//                         tempVal += (x.qtd*i.price)
//                     }
//                     setTotalVal(tempVal)
//                 } )
//                 return setTasks(theArray)
//             })
//         },1000)
//     }else
//         Alert.alert("Warning",'Cart is Empty, you need add products in Cart!')
//
//     // }catch (e){
//     //     console.log(e)
//     // }
// }, []);


