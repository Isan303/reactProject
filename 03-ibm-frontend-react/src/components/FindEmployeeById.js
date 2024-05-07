import { useState } from "react";
import { useDispatch} from "react-redux";
import { findEmployeeById } from "../redux/EmpSlice";
import UserService from "../services/UserService";

const FindEmployeeById = () => {
    const dispatch = useDispatch();
    
    const [employeeId, setEmployeeId] = useState('');
    const [foundEmployee, setFoundEmployee] = useState(null);

    const handleChange = (evt) => {
        setEmployeeId(evt.target.value);
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const employee = await UserService.findEmployeeById(employeeId);
            setFoundEmployee(employee);
            dispatch(findEmployeeById(employee));
        }
        catch (error) {
            console.log(error);
            if (error.code === 'ERR_BAD_REQUEST') {
                alert(error.message);
            }
        }
    };

    return (
        <>
            <h1>Find Employee by ID</h1>
            <form onSubmit={handleSubmit}>
                <label>Employee ID:</label>
                <input type="text" value={employeeId} onChange={handleChange} required />
                <button type="submit">Find Employee</button>
            </form>
            {foundEmployee && (
                <div>
                    <h2>Employee Found</h2>
                    <p>ID: {foundEmployee._id}</p>
                    <p>First Name: {foundEmployee.firstName}</p>
                    <p>Last Name: {foundEmployee.lastName}</p>
                    <p>Email: {foundEmployee.email}</p>
                    <p>Phone: {foundEmployee.phone}</p>
                    <p>Salary: {foundEmployee.salary}</p>
                    <p>Avatar: {foundEmployee.avatar}</p>
                </div>
            )}
        </>
    );
};

export default FindEmployeeById;
