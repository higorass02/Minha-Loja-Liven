import { Api } from '../providers/';
import { IProduct } from '../interfaces';

const getAllTodos = () => Api.get<IProduct[]>('/v1/product?page=1&limit=7');

// @ts-ignore
const createTodo = (todo: Pick<IProduct, 'task' | 'isDone'>) => Api.post('/v1/product', todo)

// @ts-ignore
const updateTodo = (id: string, todo: Pick<IProduct, 'task' | 'isDone'>) => Api.put(`/v1/product/${id}`, todo)

export const TodoService = {
    getAllTodos,
    createTodo,
    updateTodo,
};
