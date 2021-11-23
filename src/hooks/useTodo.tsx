import { useState, useCallback } from 'react';

import { IProduct } from '../interfaces';
import { TodoService } from '../services';

export const useTodo = () => {
    const [tasks, setTasks] = useState<IProduct[]>([]);
    const [newObj, setNewObj] = useState([]);

    const getAllTodos = useCallback(async () => {
        const { status, data } = await TodoService.getAllTodos();

        if (status !== 200) throw new Error();

        setTasks(data);
    }, []);

    const getId = useCallback(async (productId) => {
        const { status, data } = await TodoService.getId(productId);
        if (status !== 200) throw new Error();
        setTasks(data)
        return true
    }, []);

    const getIdPruduct = useCallback(async (productId) => {
        let listaProdutos = [];
        const { status, data } = await TodoService.getId(productId);
        listaProdutos.push(data)
        // if (status !== 200) throw new Error();
        // setTasks(listaProdutos)
        console.log(listaProdutos)
        // return true
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
