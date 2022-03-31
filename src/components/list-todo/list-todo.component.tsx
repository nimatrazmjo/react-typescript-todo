import React from 'react'

const ListTodo:React.FC = () => {
    return (
        <ul id="myUL">
            <li>Hit the gym</li>
            <li className='checked'>Pay bills</li>
            <li>Meet George</li>
            <li>Buy eggs</li>
            <li>Read a book</li>
            <li>Organize office</li>
        </ul>
    )
}

export default ListTodo;