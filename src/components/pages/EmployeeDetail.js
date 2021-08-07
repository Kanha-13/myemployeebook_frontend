import "../CSS/employeedetail.css"
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../connection/axios"
const EmployeeDetail = () => {
    const [employee, setEmployee] = useState({
        name: "",
        age: "",
        email: "",
        mobile: "",
        dept: "",
        gender: "",
        address: "",
        salery: ""
    });
    const { id } = useParams();
    useEffect(() => {
        getEmployee();
    }, []);
    const getEmployee = async () => {
        const res = await axios.get(`/employee/${id}`);
        setEmployee(res.data);
    };
    return (
        <div className="container emp-container">
            <h1 className="title">Employee Id: {id}</h1>
            <hr />
            <ul className="list-group">
                <li className="list-item">Name: {employee.name}</li>
                <li className="list-item">Department: {employee.dept}</li>
                <li className="list-item">Age: {employee.age}</li>
                <li className="list-item">Gender: {employee.gender}</li>
                <li className="list-item">Salary: {employee.salary}</li>
                <li className="list-item">Email: {employee.email}</li>
                <li className="list-item">Mobile No: {employee.mobile}</li>
                <li className="list-item">Address: {employee.address}</li>
            </ul>
            <div className="btn-container">
                <Link className="edit-btn" to={`/employee/edit/${employee._id}`}>
                    Edit
                </Link>
                <Link className="back-btn" to="/">
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
export default EmployeeDetail