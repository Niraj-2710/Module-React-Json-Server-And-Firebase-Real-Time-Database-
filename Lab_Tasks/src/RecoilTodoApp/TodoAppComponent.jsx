import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "./atom";

const TodoApp = () => {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>Recoil Todo List</h2>
      <div>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Anything You Wont..." />
        <button onClick={addTodo}>Clock Hear.</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                flexGrow: 1,
              }}
              onClick={() => toggleComplete(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Deploye</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
