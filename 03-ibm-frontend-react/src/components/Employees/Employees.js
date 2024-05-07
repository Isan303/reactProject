import React from "react";
import AddEmployee from "./AddEmployee";
import DeleteEmployee from "./DeleteEmployee";
import EmployeeByName from "./EmployeeByName";
import EmployeeById from "./EmployeeById";
import AllEmployees from "./AllEmployees";
import UpdateEmployee from "./UpdateEmployee";

const Employee = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Employee Management</h1>
      
      {/* Add and Update Employee */}
      <div className="row">
        <div className="col-md-6">
          <h2>Add Employee</h2>
          <AddEmployee />
        </div>
        <div className="col-md-6">
          <h2>Update Employee</h2>
          <UpdateEmployee />
        </div>
      </div>
      
      {/* Delete and Get Employee By ID */}
      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Delete Employee</h2>
          <DeleteEmployee />
        </div>
        <div className="col-md-6">
          <h2>Get Employee By ID</h2>
          <EmployeeById />
        </div>
      </div>

      {/* Get Employee By Name and All Employees */}
      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Get Employee By Name</h2>
          <EmployeeByName />
        </div>
        <div className="col-md-6">
          <h2>All Employees</h2>
          <AllEmployees />
        </div>
      </div>
    </div>
  );
};

export default Employee;
