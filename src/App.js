import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodo from "./components/AddToDo";
import TodoListing from "./components/ToDoListing";
function App() {
  return (
    <div className="App">
        <AddTodo/>
        <TodoListing/>
    </div>
  );
}

export default App;
