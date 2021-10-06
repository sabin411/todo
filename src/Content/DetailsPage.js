import "./DetailsPage.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";
const DetailsPage = () => {
  const id = new useParams();
  const [todos, setTodos] = useState({});
  console.log(id.id);
  useEffect(() => {
    axios.get(`http://localhost:8000/todos/${id.id}`).then((resp) => {
      setTodos(resp.data);
    });
  }, []);
  return (
    <div className="details-container">
      <h1>Details</h1>
      <div className="details-container-bottom">
        <p>
          <span>Todo:</span> {todos.todo}
        </p>
        <p>
          <span>Description:</span> {todos.description}
        </p>
      </div>
      <div className="go-back-link">
        <Link to="/">Go back</Link>
      </div>
    </div>
  );
};
export default DetailsPage;
