import axios from "axios";
import { useState } from "react";
import EmpService from "../../services/EmpService";

const DeleteEmp = () => {
    const [empId, setEmpId] = useState('');
    const [error, setError] = useState('');

    const handleChange = (evt) => {
        setEmpId(evt.target.value);
        setError('');
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (!empId) {
            setError('Please enter an employee ID.');
            return;
        }
        if (!window.confirm(`Are you sure you want to delete employee with ID ${empId}?`)) {
            return;
        }

        EmpService.deleteById(empId)
            .then((resp) => {
                if (resp.status === 200) {
                    alert(`Employee with ID ${empId} deleted successfully!`);
                    setEmpId('');
                }
            })
            .catch(error => {
                console.error("Error deleting employee:", error);
                if (error.response && error.response.status === 404) {
                    alert(`Employee with ID ${empId} not found.`);
                } else {
                    alert(`An error occurred while deleting employee with ID ${empId}. Please try again later.`);
                }
            });
    };

    return (
        <div className="container mt-3">
           
            <div className="col-4">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="employeeId" className="form-label">Employee ID:</label>
                        <input type="text" className="form-control" id="employeeId" name="employeeId" value={empId} onChange={handleChange} placeholder="Enter employee ID" required autoFocus />
                        {error && <div className="text-danger">{error}</div>}
                    </div>
                    <button type="submit" className="btn btn-danger">Delete Employee</button>
                </form>
            </div>
        </div>
    );
};

export default DeleteEmp;
