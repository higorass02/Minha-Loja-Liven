import { useState, useCallback } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Alert, Keyboard} from "react-native";

export const setPagProduct = () => {
    const [ maxPag,setMaxPag ] = useState()

    async function setMaxPruductForPag (maxPag:any) {
        try{
            await AsyncStorage.setItem("@CGK_API",maxPag)
            Keyboard.dismiss()
            Alert.alert("Success",'Max of itens for pag update!')
        }catch (e){
            console.log('error')
            console.log(e)
        }
    }

    async function getMaxPag () {
        try{
            const data:any = await AsyncStorage.getItem("@CGK_API")
            setMaxPag(JSON.parse(data))
        }catch (e){
            console.log('error')
            console.log(e)
        }
    }

    return {
        maxPag,
        setMaxPag,
        setMaxPruductForPag,
        getMaxPag
    };
};
