import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/UserSlice"; 
import UserService from "../services/UserService";

const AddEmployee = () => {
    const dispatch = useDispatch();
    
    const [employeeData, setEmployeeData] = useState({
        name: '',
        age: '',
        salary: ''
    });
    const [addedEmployee, setAddedEmployee] = useState({});

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setEmployeeData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const employee = await UserService.addEmp(employeeData);
            setAddedEmployee(employee);
            dispatch(addEmployee(employee)); // Dispatch the action to add the employee to Redux store
        } catch (error) {
            console.log(error);
            if (error.code === 'ERR_BAD_REQUEST') {
                alert(error.message);
            }
        }
    };

    return (
        <>
            <h1>Add Employee</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="firstName" value={employeeData.name} onChange={handleChange} required />
                <label>Age:</label>
                <input type="number" name="age" value={employeeData.age} onChange={handleChange} required />
                <label>Salary:</label>
                <input type="text" name="salary" value={employeeData.salary} onChange={handleChange} required />
                <button type="submit">Add Employee</button>
            </form>
            {addedEmployee && (
                <div>
                    <h2>Employee Added</h2>
                
                    <p>Name: {addedEmployee.name}</p>
                    <p>Age: {addedEmployee.age}</p>
                    <p>Salary: {addedEmployee.salary}</p>
                    
                </div>
            )}
        </>
    );
};

export default AddEmployee;
