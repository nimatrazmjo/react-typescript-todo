import React, { useState } from 'react';

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e: React.FormEvent) => void
}

const AddTodo: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>):void => {
        setTodo(e.target.value);
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