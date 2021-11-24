import { useState, useCallback } from 'react';

import { IProduct } from '../interfaces';
import { TodoService } from '../services';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Alert} from "react-native";

export const useTodo = () => {
    const [tasks, setTasks] = useState<IProduct[]>([]);
    const [newObj, setNewObj] = useState();
    const [kgb, setKgb] = useState([]);
    const [theArray, setTheArray] = useState([]);

    const getAllTodos = useCallback(async () => {
        const { status, data } = await TodoService.getAllTodos();

        if (status !== 200) throw new Error();

        setTasks(data);
    }, []);

    const getId = useCallback(async (productId) => {
        const { status, data } = await TodoService.getId(productId);
        if (status !== 200) throw new Error();
        setTasks(data)

        theArray.push(data)
        return true
    }, []);

    const getIdPruduct = useCallback(async () => {

        try{
            let arrayTemp = []
            let retornoCartList = await AsyncStorage.getItem("@LIST_CART")
            if(retornoCartList !== null){
                let data = JSON.parse(retornoCartList)
                setTheArray([])
                data.itens.map( (product:any) =>  {
                    arrayTemp.push(product)
                    getId(product.productId).then( ()=>{} )
                } )

                setTimeout( ()=>{
                    theArray.map( (i)=> {
                        arrayTemp.map( (x) => {
                            if(x.productId == i.id){
                                i.quantity = x.qtd
                            }
                        } )
                        return setTasks(theArray)
                    })
                },1000)

                //console.log(theArray)
            }else
                Alert.alert("Lista Vazia",'Lista Vazia!')

        }catch (e){
            console.log(e)
        }


        // const { status, data } = await TodoService.getId();
        // if (status !== 200) throw new Error();
        // return setTasks(data)
    }, []);

    // // @ts-ignore
    // const createTodo = useCallback(async (todo: Pick<IProduct, 'task' | 'isDone'>) => {
    //     const { status } = await TodoService.createTodo(todo);
    //
    //     if (status !== 201) throw new Error();
    // }, []);
    //
    // // @ts-ignore
    // const updateTodo = useCallback(async (id: string, todo: Pick<IProduct, 'task' | 'isDone'>) => {
    //     const { status } = await TodoService.updateTodo(id, todo);
    //
    //     if (status !== 200) throw new Error();
    // }, []);

    return {
        tasks,
        newObj,
        getAllTodos,
        getId,
        getIdPruduct
        // createTodo,
        // updateTodo,
    };
};
