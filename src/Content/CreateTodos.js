import React from "react";
import "./CreateTodos.css";
function CreateTodos() {
  return (
    <section>
      <h1>Create To Do</h1>
      <form action="">
        <input type="text" placeholder="Enter your todo" />
        <textarea placeholder="Description"></textarea>
        <button className="btn save-btn">Save</button>
      </form>
    </section>
  );
}

export default CreateTodos;
