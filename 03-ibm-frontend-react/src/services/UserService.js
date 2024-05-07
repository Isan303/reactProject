// UserService 

import axios from 'axios';

const BASE_URL = 'http://localhost:2000';
const BASE_URL_SB = "http://localhost:8090/emp"

const UserService = {
    registerUser: async (userData) => {
        try {
            const response = await axios.post(`${BASE_URL}/register`, userData);
            return response.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    },

    loginUser: async (credentials) => {
        try {
            const response = await axios.post(`${BASE_URL}/login`, credentials);
            console.log(response);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    },

    updateUserProfile: async (updatedData, token) => {
        console.log(updatedData);
        try {
            const response = await axios.put(`${BASE_URL}/users/${updatedData._id}`, updatedData, {
                headers: { authorization: `Bearer ${token}` }
            });
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    findEmployeeById: async (employeeId) => {
        try {
            const response = await axios.get(`${BASE_URL_SB}/get-emp-by-id/${employeeId}`);
    
            if (!response.data) {
                console.log("Employee not found");
                return null; // Or handle the error appropriately
            }
    
            return response.data;
        } catch (error) {
            console.log(error);
            return null; // Or handle the error appropriately
        }
    },

    findEmployeeByName: async (employeeId) => {
        try {
            const response = await axios.get(`${BASE_URL_SB}/get-emp-by-name/${employeeId}`);
    
            if (!response.data) {
                console.log("Employee not found");
                return null; // Or handle the error appropriately
            }
    
            return response.data;
        } catch (error) {
            console.log(error);
            return null; // Or handle the error appropriately
        }
    },

    addEmp: async (EmployeeData) => {
        try {
            const response = await axios.post(`${BASE_URL_SB}/add-emp`, EmployeeData);
    
            if (!response.data) {
                console.log("Failed to add Employee");
                return response.data; 
            }
    
            return response.data;
        } catch (error) {
            console.log(error);
            return null; 
        }
    }


    
}
    

export default UserService;
