import "./DetailsPage.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";
const DetailsPage = () => {
  const id = new useParams();
  const [todos, setTodos] = useState({});
  useEffect(() => {
    let stringifiedTodos = localStorage.getItem("todos");
    let Objtodos = JSON.parse(stringifiedTodos);
    const filteredTodo = Objtodos.filter((todo) => {
      return id.id == todo.id;
    });
    setTodos(filteredTodo[0]);
  }, []);
  return (
    <div className="details-container">
      <h1>Details</h1>
      <div
        style={{ textTransform: "capitalize" }}
        className="details-container-bottom"
      >
        <p>
          <span>Todo:</span> {todos && todos.todo}
        </p>
        <p>
          <span>Description:</span> {todos && todos.description}
        </p>
      </div>
      <div className="go-back-link">
        <Link to="/">Go back</Link>
      </div>
    </div>
  );
};
export default DetailsPage;
