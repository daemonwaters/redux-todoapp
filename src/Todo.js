import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

function Todo({ index }) {
  const todo = useSelector((state) => state);
  const todoData = todo[index];
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch({ type: "todos/removeTodo", payload: { id: todoData.id } });
  };

  return (
    <div className="todo">
      <h2>{index + 1}</h2>
      <p className="todo-text">{todoData.text}</p>
      <div className="btn">
        <button onClick={handleRemove} className="remove">
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default Todo;
