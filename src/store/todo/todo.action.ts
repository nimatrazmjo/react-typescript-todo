import { Todo } from '../../models/todo';
import TodoType from './todo.types';
interface ActionType {
    type: string;
    payload: Todo | number;
}

export const AddTodo = (todo: Todo): ActionType => ({
    type: TodoType.ADD_TODO,
    payload: todo
});

export const DeleteTodo = (id: number): ActionType => ({
    type: TodoType.DELETE_TODO,
    payload: id
});

export const DoneTodo = (id: number): ActionType => ({
    type: TodoType.DONE_TODO,
    payload: id
});