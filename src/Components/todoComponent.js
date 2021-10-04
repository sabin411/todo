import "./todoComponent.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
function todoComponent() {
  return (
    <li>
      <p>To buy milk.</p>
      <span className="edit">
        {" "}
        <FontAwesomeIcon icon={faEdit} />{" "}
      </span>
      <span className="delete">x</span>
    </li>
  );
}

export default todoComponent;
