import React, { useState, useEffect } from "react";
import axios from "../connection/axios"
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
const EditEmployee = () => {
    let history = useHistory();
    const { id } = useParams();
    const [employee, setEmployee] = useState({
        name: "",
        age: "",
        email: "",
        mobile: "",
        dept: "",
        gender: "",
        address: "",
        salary: ""
    });

    const { name, age, gender, salary, email, mobile, dept, address } = employee;
    const onInputChange = e => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        getEmployee();
    }, []);

    const updateEmp = async e => {
        e.preventDefault();
        await axios.put(`/employee/${id}`, employee);
        document.getElementById("empEditForm").reset()
        history.push("/");
    };

    const getEmployee = async () => {
        const res = await axios.get(`/employee/${id}`);
        if (res.data.gender === "male") {
            console.log("in male")
            document.getElementById("male").checked = true;
        }
        else if (res.data.gender === "female") {
            console.log("in female")
            document.getElementById("female").checked = true;
        }
        else {
            console.log("in other")
            document.getElementById("other").checked = true;
        }
        setEmployee(res.data);
    };
    return (
        <div className="container">
            <div className="">
                <div className="title">
                    <h2 >Edit Employee</h2>
                </div>
                <form id="empEditForm" onSubmit={updateEmp}>
                    <div className="empDetails">
                        <input value={name} onChange={e => onInputChange(e)} className="empDetail" name="name" type="text" placeholder="Name" />
                        <input value={dept} onChange={e => onInputChange(e)} className="empDetail" name="dept" type="text" placeholder="Department" />
                        <input value={salary} onChange={e => onInputChange(e)} className="empDetail" name="salary" type="text" placeholder="Salary" />
                        <input value={age} onChange={e => onInputChange(e)} className="empDetail" name="age" type="text" placeholder="Age" />
                        <div className="gender-info">
                            <input value="male" onChange={e => onInputChange(e)} id="male" type="radio" name="gender" /><span className="gender-label" >Male</span>
                            <input value="female" onChange={e => onInputChange(e)} id="female" type="radio" name="gender" /><span className="gender-label" >Female</span>
                            <input value="other" onChange={e => onInputChange(e)} id="other" type="radio" name="gender" /><span className="gender-label" >Other</span>
                        </div>
                        <input value={email} onChange={e => onInputChange(e)} className="empDetail" name="email" type="email" placeholder="Email" />
                        <input value={mobile} onChange={e => onInputChange(e)} className="empDetail" name="mobile" type="text" placeholder="Mobile No." />
                        <input value={address} onChange={e => onInputChange(e)} className="empDetail" name="address" type="text" placeholder="Address" />
                    </div>
                    <div className="btn-container">
                        <button className="btn">Update Employee</button>
                        <Link className="back-btn" to="/">
                            Back to Home
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditEmployee;
