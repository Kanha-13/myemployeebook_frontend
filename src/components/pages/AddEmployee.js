import '../CSS/addemp.css'
import axios from "../connection/axios"
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const AddEmp = () => {
    let history = useHistory();
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
    const { name, age, gender, salery, email, mobile, dept, address } = employee;
    const onInputChange = e => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const addEmp = async e => {
        e.preventDefault();
        const state = window.localStorage.getItem("admin");
        if (state === "loggedIn") {
            await axios.post("/employee", employee);
            document.getElementById("addEmpForm").reset()
            history.push("/");
        }
        else {
            alert("Admin not Logged-In")
        }
    };
    return (
        <div className="container">
            <div className="title">
                <h2 >Add Employee</h2>
            </div>
            <form id="addEmpForm" onSubmit={addEmp}>
                <div className="empDetails">
                    <input required value={name} onChange={e => onInputChange(e)} className="empDetail" name="name" type="text" placeholder="Name" />
                    <input required value={dept} onChange={e => onInputChange(e)} className="empDetail" name="dept" type="text" placeholder="Department" />
                    <input required value={salery} onChange={e => onInputChange(e)} className="empDetail" name="salary" type="text" placeholder="Salary" />
                    <input required value={age} onChange={e => onInputChange(e)} className="empDetail" name="age" type="text" placeholder="Age" />
                    <div className="gender-info">
                        <input required value="male" onChange={e => onInputChange(e)} className="" type="radio" name="gender" /><span className="gender-label" >Male</span>
                        <input value="female" onChange={e => onInputChange(e)} className="" type="radio" name="gender" /><span className="gender-label" >Female</span>
                        <input value="other" onChange={e => onInputChange(e)} className="" type="radio" name="gender" /><span className="gender-label" >Other</span>
                    </div>
                    <input required value={email} onChange={e => onInputChange(e)} className="empDetail" name="email" type="email" placeholder="Email" />
                    <input required value={mobile} onChange={e => onInputChange(e)} className="empDetail" name="mobile" type="text" placeholder="Mobile No." />
                    <input required value={address} onChange={e => onInputChange(e)} className="empDetail" name="address" type="text" placeholder="Address" />
                </div>
                <button>Add Employee</button>
            </form>
        </div>
    );
}
export default AddEmp