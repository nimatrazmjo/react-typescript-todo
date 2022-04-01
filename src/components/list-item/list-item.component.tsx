import React from 'react';
interface Props {
    id: number,
    value: string
}
const ListItem: React.FC<Props> = ({id, value})=> (<li key={id}>{value}</li>)

export default ListItem;