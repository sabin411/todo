import axios from "axios";
import { useHistory } from "react-router";
import React, { useState, useEffect, useRef } from "react";
import "./CreateTodos.css";
function CreateTodos() {
  const refInput = new useRef();
  const refTextArea = new useRef();
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState("something went wrong!");
  const [showError, setShowError] = useState(false);
  const history = useHistory();
  const [currentTodos, setCurrentTodos] = new useState([]);
  const changeHandler = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (refInput.current.value && refTextArea.current.value) {
      var lastElement = currentTodos.slice(-1);
      var createdTodo = {
        id: lastElement.length >= 1 ? lastElement[0].id + 1 : 1,
        ...inputs,
      };
      setInputs(createdTodo);
      setCurrentTodos([...currentTodos, createdTodo]);
      var updatedTodos = [...currentTodos, createdTodo];
      var StringifyingTodos = JSON.stringify(updatedTodos);
      localStorage.setItem("todos", StringifyingTodos);
      history.push("/");
    } else {
      setError("please fill all form");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 2000);
    }
  };
  useEffect(() => {
    let stringifiedTodos = localStorage.getItem("todos");
    setCurrentTodos(JSON.parse(stringifiedTodos));
    if (showError) {
      setTimeout(() => {
        setShowError(false);
      }, 2000);
    }
    // axios.get("http://localhost:8000/todos").then((resp) => {
    //   var lastStoredId = resp.data.slice(-1);
    //   setInputs({
    //     id: lastStoredId.length >= 1 ? lastStoredId[0].id + 1 : 1,
    //     [refInput.current.name]: refInput.current.value,
    //     [refTextArea.current.name]: refTextArea.current.value,
    //   });
    // });
  }, []);
  console.log(currentTodos, "baka");
  return (
    <>
      <section>
        <h1>Create To Do</h1>
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
          <button className="btn save-btn">Save</button>
        </form>
      </section>
      <div className={`errorBlock ${showError ? "active" : null}`}>{error}</div>
    </>
  );
}

export default CreateTodos;
