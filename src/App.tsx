import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import AddTodo from './components/add-todo/add-todo.component';
import ListTodo from './components/list-todo/list-todo.component';
import { Todo } from './models/todo';

function App() {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const handleAdd = (e:React.FormEvent):void => {
    e.preventDefault();
    
    if (todo) {
      setTodos([...todos, {id:Date.now(), todo, isDone: false}]);
      setTodo('')
    }  
  }
  return (
    <>
    <AddTodo />
    <ListTodo todos={todos} />
    </>
  );
}

export default App;
