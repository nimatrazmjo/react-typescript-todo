import React from 'react';
const AddTodo: React.FC = () => {
    return (
        <div id="myDIV" className="header">
            <h2>My To Do List</h2>
            <input type="text" id="myInput" placeholder="Title..." />
            <button className='addBtn'> Add</button>
        </div>
    )
}

export default AddTodo;