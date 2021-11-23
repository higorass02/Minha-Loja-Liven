import { useState, useCallback } from 'react';

import {IListCart, IProduct} from '../interfaces';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Alert} from "react-native";
import {useTodo} from "./useTodo";
import {err} from "react-native-svg/lib/typescript/xml";

export const useTodoList = () => {
    const [myArray, setMyArray] = useState<IListCart[]>([]);
    const [ valid,setValid ] = useState(0)
    const [ dadosTemp,setDadosTemp ] = useState([{}])
    const [ dados,setDados ] = useState()
    const { tasks, getId,getIdPruduct  } = useTodo()

    async function clearAll () {
        return await AsyncStorage.clear()
    }

    // @ts-ignore
    async function setItens (obj:any) {
        let data:any = null
        try{
            let retornoCartList = await AsyncStorage.getItem("@LIST_CART")

            if(retornoCartList === null)
                await AsyncStorage.setItem("@LIST_CART",JSON.stringify({"itens": [obj] } ))
            else
                data = JSON.parse(retornoCartList)
                if (data) {
                    data.itens.push(obj)
                    await AsyncStorage.setItem("@LIST_CART", JSON.stringify({"itens": data.itens}))
                }
            return Alert.alert("Sucesso",'salvo com sucesso!')
        }catch (e){
            console.log(e)
        }
    }

    async function getAll () {
        try{
            let retornoCartList = await AsyncStorage.getItem("@LIST_CART")
            if(retornoCartList !== null){
                let data = JSON.parse(retornoCartList)
                return setDados(data.itens)
                // data.itens.map((e:any)=>{
                //     //e.map((x)=> console.log(x))
                //     return e
                // })
                //Alert.alert("Sucesso",'carregado com sucesso!')
            }else
                Alert.alert("Lista Vazia",'Lista Vazia!')

        }catch (e){
            console.log(e)
        }
    }

    async function getListCartProducts () {
        try{
            let retornoCartList = await AsyncStorage.getItem("@LIST_CART")
            if(retornoCartList !== null){
                let  = JSON.parse(retornoCartList)
                //console.log(data)
                //data.itens.map( (product:any) =>  {
                    //console.log(product.productId)
                    // const req = getId(product.productId).then( ()=> { console.log(i); i++; } )
                    // req.then( ()=> console.log(tasks) )
                    // const myPromisse = new Promise( (resolve,reject)=>{
                    //     getId(product.productId)
                    // } )
                    //getIdPruduct(product.productId)
                    //setDadosTemp(tasks)
                    //console.log(tasks)
                //} )
                const xablau:any = [
                    {"createdAt": "2019-09-02T07:59:58.181Z", "id": "2", "productId": "2", "image": "http://lorempixel.com/640/480/transport", "name": "Sleek Wooden Soap", "price": "430.00", "stock": 91260,quantity:10},
                    {"createdAt": "2019-09-02T22:14:05.454Z", "id": "3", "productId": "3", "image": "http://lorempixel.com/640/480/sports", "name": "Small Cotton Shoes", "price": "993.00", "stock": 36608,quantity:2}
                ]
                return setDados(xablau)
            }else
                Alert.alert("Lista Vazia",'Lista Vazia!')

        }catch (e){
            console.log(e)
        }
    }

    return {
        dados,
        setItens,
        clearAll,
        getAll,
        getListCartProducts,
    };
};

// import { useState, useCallback } from 'react';
//
// import {IListCart, IProduct} from '../interfaces';
// import { TodoService } from '../services';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {Api} from "../providers";
//
// export const useTodoList = () => {
//     const [tasks, setTasks] = useState<IListCart[]>([]);
//     const [value, setValue] = useState({});
//     // const [myArray, setMyArray] = useState({});
//     const [myArray, setMyArray] = useState<IListCart[]>([]);
//
//     // @ts-ignore
//     // async function Store (value) {
//     //     const key = 'usuario1';
//     //
//     //     try {
//     //         const jsonValue = JSON.stringify({'itens':[value]})
//     //         await AsyncStorage.setItem(key, jsonValue)
//     //         //console.log(AsyncStorage.setItem('@storage_Key'))
//     //         // console.log(jsonValue)
//     //     } catch (e) {
//     //         // saving error
//     //         console.log(e)
//     //     }
//     // }
//     const clearAll = useCallback(async () => {
//         const data = await AsyncStorage.clear()
//     })
//
//     const setItens = useCallback(async (obj) => {
//         try {
//             const key = 'usuario1';
//             // console.log(obj)
//             if(obj){
//                 if(obj.qtd){
//                     const key = 'usuario1';
//                     const data = await AsyncStorage.getItem(key)
//                     // console.log(JSON.parse(data))
//
//                     if (data) {
//                         console.log(JSON.stringify(data))
//                         //console.log()
//                         // let dataObj = JSON.parse(data);
//                         // setMyArray([...myArray,obj])
//
//
//                         console.log('incrementar!')
//                     }else{
//                         console.log('vazio!')
//                         const jsonValue = JSON.stringify(obj)
//                         await AsyncStorage.setItem(key, jsonValue)
//                     }
//                 }else{
//                     console.log('Erro: Produto nao inserido (erro_insert_product:01)')
//                 }
//
//             }
//
//             //console.log(AsyncStorage.setItem('@storage_Key'))
//             // console.log(jsonValue)
//         } catch (e) {
//             // saving error
//             console.log(e)
//         }
//         // if(obj != null){
//         //     const key = 'usuario1';
//         //     const { status } = await AsyncStorage.setItem(key, obj)
//         //     if (status !== 201) throw new Error();
//         // }else{
//         //     console.log('else')
//         // }
//     }, []);
//
//     const getItens = useCallback(async (req) => {
//         try {
//             // console.log(req.toString())
//             const key = 'usuario1';
//             const data = await AsyncStorage.getItem(key)
//             if (data) {
//                 let dataObj = JSON.parse(data);
//                 //setTasks(data.toString())
//                 setMyArray(dataObj.itens)
//                 // console.log(data.toString())
//             }
//         }catch(e){
//             console.log(e)
//         }
//     }, []);
//
//     return {
//         tasks,
//         setItens,
//         getItens,
//         value,
//         myArray,
//         clearAll
//     };
// };
