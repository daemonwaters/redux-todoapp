import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Input from "./Input";
import Todo from "./Todo";

function App() {
  const todos = useSelector((state) => state);

  return (
    <div className="wrapper">
      <header>
        <h1>simple react todo app</h1>
      </header>
      <Input />
      {todos.map((todo, index) => {
        return <Todo key={index} index={index} text={todo.text} />;
      })}
    </div>
  );
}

export default App;
