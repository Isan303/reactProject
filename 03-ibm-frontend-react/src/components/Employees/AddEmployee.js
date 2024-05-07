import React, { useState } from "react";
import EmpService from "../../services/EmpService";

const AddEmp = () => {
    const [empData, setEmpData] = useState({ firstName: '', email: '', aadhar: '', salary: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setEmpData({ ...empData, [name]: value });
        setErrors({ ...errors, [name]: '' });

        // Validation
        if (name === 'aadhar' && value.length !== 12) {
            setErrors({ ...errors, [name]: 'Aadhar number must have exactly 12 digits.' });
        }

        if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            setErrors({ ...errors, [name]: 'Please enter a valid email address.' });
        }
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (validateForm()) {
            EmpService.addEmployee(empData)
                .then((resp) => {
                    alert(`${resp.firstName} added successfully!`);
                    setEmpData({ firstName: '', email: '', aadhar: '', salary: '' });
                })
                .catch(error => {
                    console.error("Error adding employee:", error);
                });
        }
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (empData.salary <= 0) {
            newErrors.salary = "Salary should be greater than 0.";
            isValid = false;
        }

        const aadharRegex = /^\d{12}$/;
        if (!aadharRegex.test(empData.aadhar)) {
            newErrors.aadhar = "Aadhar number must be 12 digits.";
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(empData.email)) {
            newErrors.email = "Invalid email address.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    return (
        <div className="container mt-5">
            <h1>Add Employee</h1>
            <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">First Name:</label>
                        <input type="text" className="form-control" id="firstName" name="firstName" value={empData.firstName} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" className="form-control" id="email" name="email" value={empData.email} onChange={handleChange} required />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="aadhar" className="form-label">Aadhar:</label>
                        <input type="text" className="form-control" id="aadhar" name="aadhar" value={empData.aadhar} onChange={handleChange} required />
                        {errors.aadhar && <div className="invalid-feedback">{errors.aadhar}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="salary" className="form-label">Salary:</label>
                        <input type="number" className="form-control" id="salary" name="salary" value={empData.salary} onChange={handleChange} required />
                        {errors.salary && <div className="invalid-feedback">{errors.salary}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary">Add Employee</button>
                </form>
            </div>
        </div>
    );
};

export default AddEmp;
