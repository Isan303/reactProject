import axios from "axios";
import { useEffect, useState } from "react";

const EmpList = () => {

    const [empList, setEmpList] = useState('');

    useEffect(() => {
        console.log('useEffect');
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((resp) => {
                console.log(resp.data);
                setEmpList(resp.data);
            })
    }, []);

    return (
        <>
            <h1>EmpList Component</h1>
            <table>
                <thead>
                    <th>firstName</th> <th>age</th> <th>salary</th>
                </thead>
                <tbody>
                    {empList && empList.map(emp =>
                        <tr key={emp.id}>
                            <td >{emp.firstName} </td>
                            <td >{emp.age} </td>
                            <td >{emp.salary} </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default EmpList;


// import axios from "axios";
// import { useState } from "react";

// const EmpList = () => {

//     const [empList, setEmpList] = useState('');

//     const getEmpList = () => {
//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then((resp) => {
//                 console.log(resp);
//                 setEmpList(resp.data);
//             })
//     };

//     return (
//         <>
//             <h1>EmpList Component</h1>
//             <p> {empList && empList.length} </p>
//             <button onClick={getEmpList}>Get Emp List</button>

//         </>
//     );
// };

// export default EmpList;
