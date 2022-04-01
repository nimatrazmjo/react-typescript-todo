import React from 'react'
import { useSelector } from 'react-redux';

import { Todo } from '../../models/todo';
import rootReducer from '../../store/root.reducer';
import { RootState } from '../../store/store';
import ListItem from '../list-item/list-item.component';

const ListTodo:React.FC = () => {
    const todos = useSelector((state:  RootState) => {
        return state.todo;
    });    
    return (
        <ul id="myUL">
            {todos.map((todo:Todo) => <ListItem id={todo.id} value={todo.todo} />)}
        </ul>
    )
}

export default ListTodo;