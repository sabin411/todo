import React from "react";
import "./TodoListComp.js";
import TodoComponent from "../Components/todoComponent.js";
import { Link } from "react-router-dom";
function TodoListComp() {
  return (
    <>
      <h1 className="todo-header">Todo List</h1>
      <ul className="todos-container">
        <TodoComponent />
        <TodoComponent />
        <TodoComponent />
        <TodoComponent />
        <TodoComponent />
        <TodoComponent />
        <TodoComponent />
      </ul>
      <div className="other-button">
        <Link to="/" className="btn delete-btn">
          Delete
        </Link>
        <Link to="/create-todos" className="btn create-btn">
          Create Task
        </Link>
      </div>
    </>
  );
}

export default TodoListComp;
