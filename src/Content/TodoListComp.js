import React, { useState, useEffect } from "react";
import db from "../db/todos.json";
import "./TodoListComp.js";
import axios from "axios";
import TodoComponent from "../Components/todoComponent.js";
import { Link } from "react-router-dom";
function TodoListComp() {
  const [todos, setTodos] = useState([]);
  const initalTodos = [
    { id: 1, todo: "buy milk", description: "some description will be here" },
  ];
  useEffect(() => {
    let stringifiedTodos = localStorage.getItem("todos");
    setTodos(JSON.parse(stringifiedTodos));
  }, []);
  const deletehandler = (id) => {
    const filteredTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
    setTodos(filteredTodos);
  };
  const handleDeleteAll = () => {
    setTodos([]);
    localStorage.setItem("todos", "[]");
  };
  return (
    <>
      <h1 className="todo-header">Todo List</h1>
      <ul className="todos-container">
        {todos.length >= 1 ? (
          todos.map((todo) => {
            return (
              <TodoComponent
                deletehandler={() => deletehandler(todo.id)}
                key={todo.id}
                todoInfo={todo}
              />
            );
          })
        ) : (
          <p
            style={{
              color: "rgb(225, 53, 53)",
            }}
          >
            Please create todos
          </p>
        )}
      </ul>
      <div className="other-button">
        <button
          onClick={() => {
            axios.delete("http://localhost:8000/todos").then(() => {
              axios.get(" http://localhost:8000/todos").then((resp) => {
                setTodos(resp.data);
              });
            });
          }}
          className="btn delete-btn"
          style={{ border: "none", cursor: "pointer" }}
          onClick={handleDeleteAll}
        >
          Delete All
        </button>
        <Link to="/create-todos" className="btn create-btn">
          Create Task
        </Link>
      </div>
    </>
  );
}

export default TodoListComp;
