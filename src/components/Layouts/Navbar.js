import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../CSS/navbar.css'
const Navbar = () => {
    const Logout = (e) => {
        if (e.target.innerHTML === "Logout") {
            window.localStorage.setItem("admin", "loggedOut");
            document.getElementById("navbar-loginLink").innerHTML = "Login"
            document.getElementById("navbar-loginLink").setAttribute("to", "/login")
            alert("Logged out")
        }
    }
    return (
        <nav id="navBar">
            <Link className="navbar-brand links" to="/">
                <h2>My Employee</h2>
            </Link>
            <NavLink id="navbar-homeLink" className="nav-link links" exact to="/">
                Home
            </NavLink>
            <Link className="links" to="/employee/add">Add User</Link>
            <NavLink onClick={(e) => Logout(e)} id="navbar-loginLink" className="nav-link links" exact to="/login">
                Login
            </NavLink>
        </nav>
    );
};

export default Navbar;
