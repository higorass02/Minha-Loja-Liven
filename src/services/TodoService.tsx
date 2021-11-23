import { Api } from '../providers/';
import { IProduct } from '../interfaces';
import AsyncStorage from "@react-native-async-storage/async-storage";

const getAllTodos = async () => {
    let totalPage:any = 0
    try{
        totalPage = await AsyncStorage.getItem("@CGK_API")
        console.log(totalPage)
        if(totalPage === null){
            totalPage = 10
        }
    }catch (e){
        console.log(e)
    }
    return Api.get<IProduct[]>(`/v1/product?page=1&limit=${totalPage}`);
}

// @ts-ignore
const createTodo = (todo: Pick<IProduct, 'task' | 'isDone'>) => Api.post('/v1/product', todo)

// @ts-ignore
const updateTodo = (id: string, todo: Pick<IProduct, 'task' | 'isDone'>) => Api.put(`/v1/product/${id}`, todo)

export const TodoService = {
    getAllTodos,
    createTodo,
    updateTodo,
};
