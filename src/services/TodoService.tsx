import { Api } from '../providers/';
import { IProduct } from '../interfaces';
import AsyncStorage from "@react-native-async-storage/async-storage";

let totalPage:any = 0
let totalItens:any = 50
let pageNow:any = 0

const getAllTodos = async () => {
    try{
        totalPage = await AsyncStorage.getItem("@CGK_API")
        pageNow = await AsyncStorage.getItem("@NUM_PAG")
        // console.log(totalPage)
        if(totalPage === null){
            totalPage = 10
        }
        if(pageNow === null){
            pageNow = 1
        }
        // console.log(pageNow)
    }catch (e){
        console.log(e)
    }
    return Api.get<IProduct[]>(`/v1/product?page=${pageNow}&limit=${totalPage}`);
}

const getId = async (productId:any) => {
    return Api.get<IProduct[]>(`/v1/product/${productId}`);
}

const getId2 = (productId:any) => {
    return Api.get<IProduct[]>(`/v1/product/${productId}`);
}

const getIdProduct = (productId:any) => {
    return Api.get<IProduct[]>(`/v1/product/${productId}`);
}

const getMaxPag = async () => {
    try{
        totalPage = await AsyncStorage.getItem("@CGK_API")
        pageNow = await AsyncStorage.getItem("@NUM_PAG")
        // console.log(totalPage)
        if(totalPage === null){
            totalPage = 10
        }
        if(pageNow === null){
            pageNow = 1
        }
        // console.log(pageNow)
    }catch (e){
        console.log(e)
    }
    //aqui pode entrar alguma consulta para obter o numero maximo de paginas
    return (totalItens/totalPage)
}

// // @ts-ignore
// const createTodo = (todo: Pick<IProduct, 'task' | 'isDone'>) => Api.post('/v1/product', todo)
//
// // @ts-ignore
// const updateTodo = (id: string, todo: Pick<IProduct, 'task' | 'isDone'>) => Api.put(`/v1/product/${id}`, todo)

export const TodoService = {
    getAllTodos,
    getId,
    getIdProduct,
    getMaxPag,
    getId2
    // createTodo,
    // updateTodo,
};
