import React from "react";
import NotFound from "./Content/404";
import CreateTodos from "./Content/CreateTodos";
import TodoListComp from "./Content/TodoListComp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Layout.css";
import EditTodo from "./Content/EditTodo";
import DetailsPage from "./Content/DetailsPage";
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
          <Route path="/update/:id">
            <EditTodo />
          </Route>
          <Route path="/view/:id">
            <DetailsPage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Layout;
