import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmpService from "../../services/EmpService";
import { setByName } from "../../redux/EmpSlice";

const EmpByName = () => {
    const [empNameToFind, setEmpNameToFind] = useState('');
    const dispatch = useDispatch();
    const employees = useSelector(state => state.emp.byNameEmp);
    const [error, setError] = useState('');

    const handleChange = (evt) => {
        setEmpNameToFind(evt.target.value);
        setError('');
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (!empNameToFind) {
            setError('Please enter an employee name.');
            return;
        }

        EmpService.getEmpByName(empNameToFind)
            .then((resp) => {
                dispatch(setByName(resp));
                alert("Successfully retrieved employees.");
            })
            .catch(error => {
                console.error("Error fetching employees:", error);
                setError('Employee not found.');
            });
    };

    return (
        <div className="container mt-3">
            <h1>Find Employee by Name</h1>
            <div className="col-4">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="empNameToFind" className="form-label">Employee Name:</label>
                        <input type="text" className="form-control" id="empNameToFind" name="empNameToFind" value={empNameToFind} onChange={handleChange} placeholder="Enter employee name" required />
                        {error && <div className="text-danger">{error}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
            </div>
            <div>
                <h3>Employees Found</h3>
                {employees.length > 0 ? (
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
                            {employees.map(emp => (
                                <tr key={emp.employeeId}>
                                    <td>{emp.employeeId}</td>
                                    <td>{emp.firstName}</td>
                                    <td>{emp.salary}</td>
                                    <td>{emp.aadhar}</td>
                                    <td>{emp.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No employees found.</p>
                )}
            </div>
        </div>
    );
};

export default EmpByName;
