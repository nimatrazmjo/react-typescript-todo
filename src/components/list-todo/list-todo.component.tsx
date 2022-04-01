import React from 'react'
import { Todo } from '../../models/todo';
import ListItem from '../list-item/list-item.component';

interface Props {
    todos: Todo[]
}
const ListTodo:React.FC<Props> = ({todos}) => {
    return (
        <ul id="myUL">
            {todos.map(todo => <ListItem id={todo.id} value={todo.todo} />)}
        </ul>
    )
}

export default ListTodo;