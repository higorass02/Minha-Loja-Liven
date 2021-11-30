import { useState, useCallback } from 'react';

import { IProduct } from '../../interfaces';
import { TodoService } from '../../services';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useProduct = () => {
    const [tasks, setTasks] = useState<IProduct[]>([])
    const [ totalVal, setTotalVal ] = useState(0)

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