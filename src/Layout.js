import React from "react";
import TodoComponent from "./Components/todoComponent";
import CreateTodos from "./Content/CreateTodos";
import "./Layout.css";
function Layout() {
  return (
    <div>
      <h1 className="todo-header">Todo App</h1>
      <ul className="todos-container">
        <TodoComponent />
        <TodoComponent />
        <TodoComponent />
      </ul>
      <div className="other-button">
        <a href="" className="btn create-btn">
          Create Task
        </a>
        <a href="" className="btn delete-btn">
          Delete
        </a>
      </div>
      <CreateTodos />
    </div>
  );
}

export default Layout;
