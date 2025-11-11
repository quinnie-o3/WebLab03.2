import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoApp from "./TodoApp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>To-do List</h1>
        <TodoApp />
    </div>
  );
}

export default App;
