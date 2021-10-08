import React, { useEffect, useState, useRef } from "react";
import "./EditTodo.css";
import { useHistory, useParams } from "react-router";
import axios from "axios";
function EditTodo() {
  const id = new useParams();
  const refInput = new useRef();
  const refTextArea = new useRef();
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState("something went wrong!");
  const [showError, setShowError] = useState(false);
  const history = useHistory();
  const changeHandler = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (refInput.current.value && refTextArea.current.value) {
      let stringifiedTodos = localStorage.getItem("todos");
      let Objtodos = JSON.parse(stringifiedTodos);
      Objtodos.forEach((todo, index) => {
        if (todo.id == id.id) {
          Objtodos.splice(index, 1, inputs);
          localStorage.setItem("todos", JSON.stringify(Objtodos));
          history.push("/");
        }
      });
    } else {
      setError("please fill all form");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 2000);
    }
  };
  useEffect(() => {
    if (showError) {
      setTimeout(() => {
        setShowError(false);
      }, 2000);
    }
    let stringifiedTodos = localStorage.getItem("todos");
    let Objtodos = JSON.parse(stringifiedTodos);
    const filteredTodo = Objtodos.filter((todo) => {
      return id.id == todo.id;
    });
    refInput.current.value = filteredTodo[0].todo;
    refTextArea.current.value = filteredTodo[0].description;
    setInputs(filteredTodo[0]);
  }, []);
  return (
    <>
      <section>
        <h1>Edit Todo</h1>
        <form onSubmit={handleSubmit}>
          <input
            ref={refInput}
            name="todo"
            type="text"
            onChange={changeHandler}
            placeholder="Enter your todo"
          />
          <textarea
            ref={refTextArea}
            name="description"
            onChange={changeHandler}
            placeholder="Description"
          ></textarea>
          <button className="btn save-btn">Edit</button>
        </form>
      </section>
      <div className={`errorBlock  ${showError ? "active" : ""}`}> {error}</div>
    </>
  );
}

export default EditTodo;
