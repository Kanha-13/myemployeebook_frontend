import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/AboutUs";
import Navbar from "./components/Layouts/Navbar";
import Login from "./components/pages/Login"
import Signup from "./components/pages/SignUp";
import EmployeeDetail from "./components/pages/EmployeeDetail";
import EmployeeEdit from "./components/controllers/EditEmp"
import Footer from "./components/Layouts/Footer"
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddEmp from "./components/pages/AddEmployee";

const App = () => {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/employee/add" component={AddEmp} />
          <Route exact path="/employee/:id" component={EmployeeDetail} />
          <Route exact path="/employee/edit/:id" component={EmployeeEdit} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
/* Refactor deleteTodo function - 2024-12-31 22:32:41.255831 */
/* Update Todo List placeholder text - 2024-12-31 22:32:41.349578 */
/* Update Todo List placeholder text - 2024-12-31 22:32:42.037082 */
/* Update Todo List placeholder text - 2024-12-31 22:32:42.208956 */
/* Refactor deleteTodo function - 2024-12-31 22:32:42.380828 */
/* Update Todo List placeholder text - 2024-12-31 22:32:42.755832 */
/* Update Todo List placeholder text - 2024-12-31 22:32:42.870945 */
/* Update Todo List placeholder text - 2024-12-31 22:32:42.957605 */
/* Update Todo List placeholder text - 2024-12-31 22:32:43.379490 */
/* Refactor deleteTodo function - 2024-12-31 22:32:43.723242 */
/* Update Todo List placeholder text - 2024-12-31 22:32:44.160740 */
/* Update Todo List placeholder text - 2024-12-31 22:32:44.582619 */
/* Update Todo List placeholder text - 2024-12-31 22:32:44.676367 */
/* Refactor deleteTodo function - 2024-12-31 22:32:44.848245 */
/* Refactor deleteTodo function - 2024-12-31 22:32:45.505197 */
/* Refactor deleteTodo function - 2024-12-31 22:32:46.020824 */
/* Update Todo List placeholder text - 2024-12-31 22:32:46.098950 */
/* Refactor deleteTodo function - 2024-12-31 22:32:46.192699 */
/* Update Todo List placeholder text - 2024-12-31 22:32:46.520975 */
/* Refactor deleteTodo function - 2024-12-31 22:32:47.052226 */
/* Refactor deleteTodo function - 2024-12-31 22:32:47.130352 */
/* Refactor deleteTodo function - 2024-12-31 22:32:47.325300 */
/* Refactor deleteTodo function - 2024-12-31 22:32:47.676896 */
/* Refactor deleteTodo function - 2024-12-31 22:32:47.973773 */
/* Update Todo List placeholder text - 2024-12-31 22:32:48.051896 */
/* Refactor deleteTodo function - 2024-12-31 22:32:48.145646 */
/* Refactor deleteTodo function - 2024-12-31 22:32:48.317530 */
/* Update Todo List placeholder text - 2024-12-31 22:32:48.645647 */
/* Update Todo List placeholder text - 2024-12-31 22:32:48.911270 */
/* Update Todo List placeholder text - 2024-12-31 22:32:49.348770 */
/* Refactor deleteTodo function - 2024-12-31 22:32:49.531706 */
/* Update Todo List placeholder text - 2024-12-31 22:32:50.237936 */
/* Refactor deleteTodo function - 2024-12-31 22:32:50.566062 */
/* Refactor deleteTodo function - 2024-12-31 22:32:50.737942 */
/* Refactor deleteTodo function - 2024-12-31 22:32:51.159810 */
/* Update Todo List placeholder text - 2024-12-31 22:32:52.143139 */
/* Update Todo List placeholder text - 2024-12-31 22:32:52.658763 */
/* Refactor deleteTodo function - 2024-12-31 22:32:53.533764 */
/* Refactor deleteTodo function - 2024-12-31 22:32:53.877510 */
/* Refactor deleteTodo function - 2024-12-31 22:32:53.983845 */
/* Update Todo List placeholder text - 2024-12-31 22:32:54.346363 */
/* Refactor deleteTodo function - 2024-12-31 22:32:54.861988 */
/* Refactor deleteTodo function - 2024-12-31 22:32:54.955738 */
/* Update Todo List placeholder text - 2024-12-31 22:32:55.611989 */
/* Refactor deleteTodo function - 2024-12-31 22:32:55.783866 */
/* Refactor deleteTodo function - 2024-12-31 22:32:55.955736 */
/* Update Todo List placeholder text - 2024-12-31 22:32:56.232231 */
/* Update Todo List placeholder text - 2024-12-31 22:32:56.766885 */
/* Refactor deleteTodo function - 2024-12-31 22:32:57.266885 */
/* Update Todo List placeholder text - 2024-12-31 22:32:57.610635 */
/* Refactor deleteTodo function - 2024-12-31 22:32:57.782510 */
/* Refactor deleteTodo function - 2024-12-31 22:32:57.954388 */
/* Update Todo List placeholder text - 2024-12-31 22:32:58.329389 */
/* Refactor deleteTodo function - 2024-12-31 22:32:59.048353 */
/* Update Todo List placeholder text - 2024-12-31 22:32:59.142099 */
/* Update Todo List placeholder text - 2024-12-31 22:32:59.313976 */
/* Refactor deleteTodo function - 2024-12-31 22:32:59.563974 */
/* Update Todo List placeholder text - 2024-12-31 22:32:59.642101 */
/* Refactor deleteTodo function - 2024-12-31 22:32:59.813973 */
