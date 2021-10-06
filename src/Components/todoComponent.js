import "./todoComponent.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
function todoComponent({ deletehandler, todoInfo }) {
  const [showDescp, setShowDescp] = new useState(false);
  const handleShowDescription = (e) => {
    e.preventDefault();
    setShowDescp(!showDescp);
  };
  return (
    <>
      <li className="todos-wrapper">
        <div className="todos-wrapper-content">
          <Link to={`/view/${todoInfo.id}`}>{todoInfo.todo}</Link>
          <Link to={`/update/${todoInfo.id}`} className="edit">
            {" "}
            <FontAwesomeIcon icon={faEdit} />{" "}
          </Link>
          <span onClick={deletehandler} className="delete">
            x
          </span>
        </div>
        <p className={`description ${showDescp ? "active" : ""}`}>
          {todoInfo.description}
        </p>
      </li>
    </>
  );
}

export default todoComponent;
