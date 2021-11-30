import { useState, useCallback } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Alert, Keyboard} from "react-native";
import {TodoService} from "../../../services";
import { useNavigation } from '@react-navigation/native';

export const setPagProduct = () => {
    const navigation = useNavigation();
    const [ maxPag,setMaxPag ] = useState()
    const [ pagNow,setPagNow ] = useState()

    async function setMaxPruductForPag (maxPag:any) {
        try{
            await AsyncStorage.setItem("@CGK_API",maxPag)
            Keyboard.dismiss()
            // Alert.alert("Success",'Max of itens for pag update!')
            // @ts-ignore
            navigation.navigate('Products', {name: 'Products'})
        }catch (e){
            console.log('error')
            console.log(e)
        }
    }

    async function getMaxPag () {
        try{
            const data:any = await TodoService.getMaxPag()
            return setMaxPag(data)
        }catch (e){
            console.log('error')
            console.log(e)
        }
    }

    async function getPagNow () {
        try{
            const data:any = await AsyncStorage.getItem("@NUM_PAG")
            return setPagNow(data)
        }catch (e){
            console.log('error')
            console.log(e)
        }
    }

    async function setNumberPag (pPag:any) {
        try{
            await AsyncStorage.setItem("@NUM_PAG",pPag.toString())
            let pageNow = await AsyncStorage.getItem("@NUM_PAG")
            // @ts-ignore
            //return Alert.alert("Success",pageNow.toString())
            return true
        }catch (e){
            console.log(e)
        }
    }

    return {
        maxPag,
        setMaxPag,
        pagNow,
        setMaxPruductForPag,
        getMaxPag,
        setNumberPag,
        getPagNow
    };
};
