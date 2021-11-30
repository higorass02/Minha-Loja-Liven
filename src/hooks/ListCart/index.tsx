import { useState, useCallback } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Alert} from "react-native";

export const useTodoList = () => {
    const [ dados,setDados ] = useState([])
    let update:boolean = false

    async function clearAll () {
        await AsyncStorage.setItem("@LIST_CART",'')
        return Alert.alert("Success",'Cart is empty!')
    }

    async function setItens (obj:any) {
        let dataNew:any = null
        try {
            let retornoCartList = await AsyncStorage.getItem("@LIST_CART")

            if (retornoCartList === null)
                await AsyncStorage.setItem("@LIST_CART", JSON.stringify({"itens": [obj]}))
            else
                dataNew = JSON.parse(retornoCartList)
            if (dataNew) {
                dataNew.itens.map((i: any) => {
                    if(obj.productId == i.productId){
                        i.qtd += obj.qtd
                        update = true
                    }
                })
                if(update != true){ dataNew.itens.push(obj) }
            } else {
                dataNew.itens.push(obj)
            }
            await AsyncStorage.setItem("@LIST_CART", JSON.stringify({"itens": dataNew.itens}))
            return Alert.alert("Success",'Product in your Cart!')
        }catch (e){
            console.log(e)
        }
    }

    async function setUpdateCart (obj:any) {
        let data:any = null
        try{
            let retornoCartList = await AsyncStorage.getItem("@LIST_CART")

            if(retornoCartList === null)
                //await AsyncStorage.setItem("@LIST_CART",JSON.stringify({"itens": [obj] } ))
                return false
            else
                data = JSON.parse(retornoCartList)
            if(data){
                data.itens.map((i: any) => {
                    if (obj.productId == i.productId) {
                        i.qtd = obj.qtd
                        update = true
                    }
                    if (update != true) {
                        data.itens.push(obj)
                    }
                })
            }else{
                return Alert.alert("Error","Product don't find in you Cart!")
            }
            await AsyncStorage.setItem("@LIST_CART", JSON.stringify({"itens": data.itens}))
            return Alert.alert("Success",'Quantity update!')
        }catch (e){
            console.log(e)
        }
    }

    return {
        dados,
        setItens,
        clearAll,
        setUpdateCart
        // getAll,
        // getListCartProducts,
    };
};