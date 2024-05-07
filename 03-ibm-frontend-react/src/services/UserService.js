// UserService 

import axios from 'axios';

const BASE_URL = 'http://localhost:2000';

const UserService = {
    registerUser: (userData) => {
        return axios.post(`${BASE_URL}/register`, userData)
            .then(response => response.data)
            .catch(error => {
                console.log(error);
                throw new Error(error);
            });
    },

    loginUser: (credentials) => {
        return axios.post(`${BASE_URL}/login`, credentials)
            .then(response => response.data)
            .catch(error => {
                console.log(error);
                throw new Error(error);
            });
    },

    updateUserProfile: (updatedData, token) => {
        console.log(updatedData);
        return axios.put(`${BASE_URL}/users/${updatedData._id}`, updatedData, {
                headers: { authorization: `Bearer ${token}` }
            })
            .then(response => response.data)
            .catch(error => {
                console.log(error);
                throw new Error(error);
            });
    }
};

export default UserService;

// // UserService 

// import axios from 'axios';

// const BASE_URL = 'http://localhost:2000';

// const UserService = {
//     registerUser: async (userData) => {
//         try {
//             const response = await axios.post(`${BASE_URL}/register`, userData);
//             return response.data;
//         } catch (error) {
//             console.log(error);
//             //return error;
//             throw new Error(error);
//         }
//     },

//     loginUser: async (credentials) => {
//         try {
//             const response = await axios.post(`${BASE_URL}/login`, credentials);
//             console.log(response);
//             return response.data;
//         } catch (error) {
//             console.log(error);
//             throw new Error(error);
//         }
//     },

//     updateUserProfile: async (updatedData, token) => {
//         console.log(updatedData);
//         try {
//             const response = await axios.put(`${BASE_URL}/users/${updatedData._id}`, updatedData, {
//                 headers: { authorization: `Bearer ${token}` }
//             });
//             console.log(response.data);
//             return response.data;
//         } catch (error) {
//             console.log(error);
//             return error;
//         }
//     }
// };

// export default UserService;
