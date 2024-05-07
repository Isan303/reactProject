import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findEmployeeByName } from "../redux/EmpSlice"; 
import UserService from "../services/UserService";

const FindEmployeeByName = () => {
    const dispatch = useDispatch();
    const token = useSelector(store => store.user.jwtToken);
    const [employeeName, setEmployeeName] = useState(''); 
    const [foundEmployee, setFoundEmployee] = useState(null);

    const handleChange = (evt) => {
        setEmployeeName(evt.target.value); 
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const employee = await UserService.findEmployeeByName(employeeName, token); 
            setFoundEmployee(employee);
            dispatch(findEmployeeByName(employee)); 
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
            <h1>Find Employee by Name</h1> 
            <form onSubmit={handleSubmit}>
                <label>Employee Name:</label>
                <input type="text" value={employeeName} onChange={handleChange} required />
                <button type="submit">Find Employee</button>
            </form>
            {foundEmployee && (
                <div>
                    <h2>Employee Found</h2>
                    <p>ID: {foundEmployee._id}</p>
                    <p>First Name: {foundEmployee.firstName}</p>
                    <p>Last Name: {foundEmployee.lastName}</p>
                    <p>Email: {foundEmployee.email}</p>
                  
                </div>
            )}
        </>
    );
};

export default FindEmployeeByName;
