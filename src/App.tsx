import { useState } from 'react';
import './App.css';
import AddTodo from './components/add-todo/add-todo.component';
import ListTodo from './components/list-todo/list-todo.component';
import { Todo } from './models/todo';

function App() {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = (e:React.FormEvent):void => {
    e.preventDefault();
    console.log(todo, 'todoo');
    
    if (todo) {
      setTodos([...todos, {id:Date.now(), todo, isDone: false}])
    }  
  }
  return (
    <>
    <AddTodo todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    <ListTodo />
    </>
  );
}

export default App;
