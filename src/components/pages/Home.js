import '../CSS/home.css'
import axios from '../connection/axios'
import { Link } from "react-router-dom";
import filterIcon from "../images/filter.png"
import { useEffect, useState } from 'react';
const Home = () => {
    const [employees, setEmployees] = useState([]);
    const [tempEmployees, setTempEmployees] = useState([]);
    const searchEmployee = (e) => {
        if (e.target.value.length > 0) {
            setEmployees(tempEmployees.filter((emp) => {
                const regex = new RegExp(`${e.target.value.trim()}`, 'gi');
                return emp.name.match(regex)
            }))
        }
        else {
            setEmployees(tempEmployees)

        }
    }
    useEffect(() => {
        getEmpList();
    }, []);
    const getEmpList = async () => {
        const state = window.localStorage.getItem("admin");
        if (state === "loggedIn") {
            const employees = await axios.get('/employee');
            setEmployees(employees.data)
            setTempEmployees(employees.data)
        }
        else {
            alert("Admin not Logged-In")
        }
    }
    const filterList = (e) => {
        const _ = require("lodash");
        if (e.target.value === "new-old") {
            let oldorder = tempEmployees
            setEmployees(oldorder.reverse())
            oldorder = ""
            return
        }
        else if (e.target.value === "a-z") {
            let oldorder = tempEmployees
            setEmployees(_.sortBy(oldorder, 'name'))
            oldorder = ""
            return
        } else if (e.target.value === "z-a") {
            let oldorder = tempEmployees
            setEmployees(_.sortBy(oldorder, 'name').reverse())
            oldorder = ""
            return
        }
        else if (e.target.value === "old-new") {
            console.log(tempEmployees)
            setEmployees(tempEmployees)
            return
        }
    }
    const deleteemployee = async (id) => {
        await axios.delete(`/employee/${id}`)
        getEmpList();
    }
    return (
        <div id="empList">
            <div className="filterSearch">
                <i className="credential-wrapper">
                    <img src={filterIcon} alt="" width="20" />
                    <select onChange={filterList} name="sortorder" id="filterOption">
                        <option value="old-new">Old-&gt;New</option>
                        <option value="new-old">New-&gt;Old</option>
                        <option value="a-z">A-&gt;Z</option>
                        <option value="z-a">Z-&gt;A</option>
                    </select>
                    <input id="searchEmp" onChange={searchEmployee} className="Credentials" type="text" placeholder="Enter Employee Name" />
                </i>
            </div>
            <table id="emptable">
                <thead className="table-head">
                    <tr>
                        <th>#</th>
                        <th>Emp Name</th>
                        <th>Emp Id</th>
                        <th>Department</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Mobile No.</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => (
                        <tr key={index} className="data-tr">
                            <th>{index + 1}</th>
                            <td>{employee.name}</td>
                            <td>{employee._id}</td>
                            <td>{employee.dept}</td>
                            <td>{employee.age}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.mobile}</td>
                            <td>
                                <Link className="btn action-btn primary" to={`/employee/${employee._id}`}>
                                    View
                                </Link>
                                <Link
                                    className="btn action-btn secondary"
                                    to={`/employee/edit/${employee._id}`}
                                >
                                    Edit
                                </Link>
                                <Link
                                    className="btn action-btn danger"
                                    onClick={() => deleteemployee(employee._id)}
                                >
                                    Delete
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}
export default Home