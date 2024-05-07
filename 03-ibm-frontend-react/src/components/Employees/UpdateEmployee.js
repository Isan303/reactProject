import { useState, useEffect } from "react";
import axios from "axios";
import EmpService from "../../services/EmpService";

const UpdateEmp = () => {
    const [employeeId, setEmployeeId] = useState('');
    // const [selectedEmp, setSelectedEmp] = useState('');
    const [empData, setEmpData] = useState({ firstName: '', email: '', aadhar: '', salary: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (evt) => {
        setEmpData({ ...empData, [evt.target.name]: evt.target.value });
        setErrors({ ...errors, [evt.target.name]: '' });
    };

    const handleEmployeeIdChange = (evt) => {
        setEmployeeId(evt.target.value);
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};
        if (empData.salary <= 0) {
            newErrors.salary = "Salary should be greater than 0.";
            isValid = false;
        }
        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (validateForm()) {
            // EmpService.getEmpById(employeeId).then(res =>{
            //     console.log(res);
            //     setSelectedEmp(res)
            // })
            //axios.put(`http://localhost:9090/emp/update-emp/${employeeId}`, empData)
            EmpService.updateEmployee(employeeId,empData)
                .then((resp) => {
                    alert(`${resp.firstName} updated successfully!`);
                    setEmpData({ firstName: '', email: '', aadhar: '', salary: '' });
                    setEmployeeId('');
                })
                .catch(error => {
                    console.error("Error updating employee:", error);
                    alert(`employee with ${employeeId} is not present`);
                });
        }
    };

    return (
        <div className="container mt-3">
            <h1>Update Employee Component</h1>
            <div className="col-4">
                <label htmlFor="employeeId">Employee ID:</label>
                <input className="form-control" type="text" id="employeeId" name="employeeId" value={employeeId} onChange={handleEmployeeIdChange} placeholder="Enter employee ID" required />
            </div>
            <div className="col-4">
                <form className="form form-group mx-2 py-2 my-2 py-2" onSubmit={handleSubmit}>
                    <label htmlFor="firstName">First Name:</label>
                    <input className="form-control" type="text" id="firstName" name="firstName" value={empData.firstName} onChange={handleChange} placeholder="Enter first name" required autoFocus />
                    <br />
                    <label htmlFor="email">Email:</label>
                    <input className="form-control" type="email" id="email" name="email" value={empData.email} onChange={handleChange} placeholder="Enter email" />
                    {errors.email && <span>{errors.email}</span>}
                    <br />
                    <label htmlFor="aadhar">Aadhar:</label>
                    <input className="form-control" type="number" id="aadhar" name="aadhar" maxLength={12} minLength={12} value={empData.aadhar} onChange={handleChange} placeholder="Enter aadhar" />
                    {errors.aadhar && <span>{errors.aadhar}</span>}
                    <br />
                    <label htmlFor="salary">Salary:</label>
                    <input className="form-control" type="number" id="salary" name="salary" value={empData.salary} onChange={handleChange} placeholder="Enter salary" />
                    {errors.salary && <span>{errors.salary}</span>}
                    <br />
                    <input className="form-control btn btn-outline-light" type="submit" value="Update Employee" />
                </form>
            </div>
        </div>
    );
};

export default UpdateEmp;
