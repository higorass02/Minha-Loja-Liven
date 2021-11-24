import { useState, useCallback } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Alert} from "react-native";

export const useTodoList = () => {
    const [ dados,setDados ] = useState([])

    async function clearAll () {
        return await AsyncStorage.setItem("@LIST_CART",'')
    }

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

    return {
        dados,
        setItens,
        clearAll,
        // getAll,
        // getListCartProducts,
    };
};