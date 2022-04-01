import React from 'react'; 
import './App.css';
import AddTodo from './components/add-todo/add-todo.component';
import ListTodo from './components/list-todo/list-todo.component';

function App() {
  return (
    <>
    <AddTodo />
    <ListTodo/>
    </>
  );
}

export default App;
