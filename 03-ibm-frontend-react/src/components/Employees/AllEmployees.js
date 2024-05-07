import { useEffect, useState } from "react";
import EmpService from "../../services/EmpService";
import { useDispatch, useSelector } from "react-redux";
import { setAllEmp } from "../../redux/EmpSlice";

const EmpList = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const empList = useSelector(state => state.emp.empDataList);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await EmpService.getEmployee();
                dispatch(setAllEmp(response));
            } catch (error) {
                console.error("Error fetching employees:", error);
                // Handle error here
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [dispatch]);

    return (
        <div className="container mt-3">
            <h1>Employee List</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
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
                        {empList.map(emp => (
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
            )}
        </div>
    );
};

export default EmpList;
