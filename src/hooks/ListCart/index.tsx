import { useState, useCallback } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Alert} from "react-native";
import {useProduct} from "../Product";

export const useTodoList = () => {
    const [ dados,setDados ] = useState([])
    const { getId } = useProduct()
    let update:boolean = false
    let data:any = null

    async function clearAll () {
        await AsyncStorage.setItem("@LIST_CART",'')
        return true
        //return Alert.alert("Success",'Cart is empty!')
    }

    async function setItens (obj:any) {
        try {
            let retornoCartList = await AsyncStorage.getItem("@LIST_CART")

            let productDetails:any = await getId(obj.productId)
            productDetails.quantity = obj.quantity
            if (retornoCartList === null){
                await AsyncStorage.setItem("@LIST_CART", JSON.stringify({"itens": [productDetails]}))

                data = null;
            }
            else{
                data = JSON.parse(retornoCartList)

                if (data) {
                    data.itens.map((i: any) => {
                        if(productDetails.id == i.id){
                            i.quantity += productDetails.quantity
                            update = true
                        }
                    })
                    if(!update){
                        data.itens.push(productDetails)
                    }
                }
                await AsyncStorage.setItem("@LIST_CART", JSON.stringify({"itens": data.itens}))
                // Alert.alert("Success",'Added product!')
                return true
            }
        }catch (e){
            console.log(e)
        }
    }

    async function setUpdateCart (obj:any) {
        try {
            let retornoCartList = await AsyncStorage.getItem("@LIST_CART")

            let productDetails:any = await getId(obj.productId)
            productDetails.quantity = obj.quantity
            if (retornoCartList === null){
                await AsyncStorage.setItem("@LIST_CART", JSON.stringify({"itens": [productDetails]}))

                data = null;
            }
            else{
                data = JSON.parse(retornoCartList)

                if (data) {
                    data.itens.map((i: any) => {
                        if(productDetails.id == i.id){
                            //i.quantity += productDetails.quantity
                            i.quantity = productDetails.quantity
                            update = true
                        }
                    })
                    if(!update){
                        data.itens.push(productDetails)
                    }
                }
                await AsyncStorage.setItem("@LIST_CART", JSON.stringify({"itens": data.itens}))
                // Alert.alert("Success",'Update product!')
            }
        }catch (e){
            console.log(e)
        }
    }

    async function setRemove (obj:any) {
        try {
            let retornoCartList = await AsyncStorage.getItem("@LIST_CART")

            if (retornoCartList != null){
                data = JSON.parse(retornoCartList)

                let pos = data.itens.map(function(e:any) {
                    return e.id;
                }).indexOf(obj);

                if (pos > -1) {
                    data.itens.splice(pos, 1);
                }
                await AsyncStorage.setItem("@LIST_CART", JSON.stringify({"itens": data.itens}))
                //Alert.alert("Success",'Removed product of Cart!')
            }
        }catch (e){
            console.log(e)
        }
    }

    return {
        dados,
        setItens,
        clearAll,
        setUpdateCart,
        setRemove
        // getAll,
        // getListCartProducts,
    };
};
