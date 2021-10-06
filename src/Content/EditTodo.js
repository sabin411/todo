import React, { useEffect, useState, useRef } from "react";
import "./EditTodo.css";
import { useHistory, useParams } from "react-router";
import axios from "axios";
function EditTodo() {
  const id = new useParams();
  const todoInfo = new useParams();
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
      axios.put(`http://localhost:8000/todos/${id.id}`, inputs).then(() => {
        refInput.current.value = "";
        refTextArea.current.value = "";
        history.push("/");
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
    axios(`http://localhost:8000/todos/${id.id}`)
      .then((resp) => {
        console.log(resp);
        refInput.current.value = resp.data.todo;
        refTextArea.current.value = resp.data.description;
      })
      .then(() => {
        setInputs({
          ...inputs,
          [refInput.current.name]: refInput.current.value,
          [refTextArea.current.name]: refTextArea.current.value,
        });
      });
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
