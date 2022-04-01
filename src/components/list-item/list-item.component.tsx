import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import { useSelector } from 'react-redux';
import './list-item.style.css';
interface Props {
    id: number,
    value: string
}
const ListItem: React.FC<Props> = ({ id, value }) => {
    return(<li key={id}>{value}
    <div className='action'>
        <span className='icon '> <AiFillDelete /></span>
        <span className='icon'> <AiFillEdit /> </span>
        <span className='icon'> <MdDone /> </span>
    </div>
</li>)}

export default ListItem;