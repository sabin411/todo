import React from "react";
import CreateTodos from "./Content/CreateTodos";
import TodoListComp from "./Content/TodoListComp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Layout.css";
function Layout() {
  return (
    <Router>
      <div className="layout-container">
        <Switch>
          <Route path="/" exact>
            <TodoListComp />
          </Route>
          <Route path="/create-todos">
            <CreateTodos />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Layout;
