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
  const changeHandler = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (refInput.current.value && refTextArea.current.value) {
      axios
        .post("http://localhost:8000/todos", inputs)
        .then(() => {
          refInput.current.value = "";
          refTextArea.current.value = "";
          history.push("/");
        })
        .catch((err) => {
          console.log(err.response.data);
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
    axios.get("http://localhost:8000/todos").then((resp) => {
      var lastStoredId = resp.data.slice(-1);
      console.log(lastStoredId);
      setInputs({
        id: lastStoredId.length >= 1 ? lastStoredId[0].id + 1 : 1,
        [refInput.current.name]: refInput.current.value,
        [refTextArea.current.name]: refTextArea.current.value,
      });
    });
  }, []);
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
