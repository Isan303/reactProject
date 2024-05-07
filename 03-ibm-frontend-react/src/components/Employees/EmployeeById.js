import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmpService from "../../services/EmpService";
import { setById } from "../../redux/EmpSlice";

const EmpById = () => {
    const [empId, setEmpId] = useState('');
    const dispatch = useDispatch();
    const employee = useSelector(state => state.emp.byIdEmp);
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

        EmpService.getEmpById(empId)
            .then((resp) => {
                dispatch(setById(resp));
            })
            .catch(error => {
                console.error("Error fetching employee:", error);
                setError('Employee not found.');
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
                    <button type="submit" className="btn btn-primary">Get Employee</button>
                </form>
            </div>
            {employee && (
                <div>
                    <h3>Employee Details</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Salary</th>
                                <th>Aadhar</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{employee.employeeId}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.salary}</td>
                                <td>{employee.aadhar}</td>
                                <td>{employee.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default EmpById;
