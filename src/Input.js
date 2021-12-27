import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Input() {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "todos/addTodo",
      payload: { text: inputText, id: Math.floor(Math.random() * 1000) },
    });
    setInputText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        placeholder="Plans..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Input;
