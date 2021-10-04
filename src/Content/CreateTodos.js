import React from "react";
import "./CreateTodos.css";
function CreateTodos() {
  return (
    <section>
      <form action="">
        <input type="text" placeholder="Enter your todo" />
        <textarea></textarea>
        <button className="btn save-btn">Save</button>
      </form>
    </section>
  );
}

export default CreateTodos;
