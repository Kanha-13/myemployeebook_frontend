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
