import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Todo } from '../../models/todo';
import { AddTodoAction } from '../../store/todo/todo.action';

interface Props {
    id: number,
    todo: string,
    isDone: boolean,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e: React.FormEvent) => void
}

const AddTodo: React.FC = () => {

    const [todo, setTodo] = useState<string>('');
    const dispatch = useDispatch();
    
    
    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>):void => {
        setTodo(e.target.value);
    }
    const handleAdd = (e:React.FormEvent):void => {
        e.preventDefault();
        if (todo) {
            dispatch(AddTodoAction({id: Date.now(), todo, isDone: false}));
            setTodo('');
        }
    }
    
    return (
        <div id="myDIV" className="header">
            <h2>My To Do List</h2>
            <form onSubmit={handleAdd}>
                <input type="text" value={todo} id="myInput" onChange={changeHandler} placeholder="Title..." />
                <button className='addBtn' type='submit'> Add</button>
            </form>
        </div>
    )
}

export default AddTodo;