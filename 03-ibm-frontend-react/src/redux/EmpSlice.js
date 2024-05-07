import { createSlice } from "@reduxjs/toolkit";
console.log('empSlice');
const empSlice = createSlice({
    name: 'emp',
    initialState : { 
        empObj: {firstName: 'Sonu', salary: 10.50}  
    },
    reducers : { // more methods 
        findEmployeeById: (state, action) => {
            console.log(action.payload);
            if (action.payload) {
                state.foundEmployee = action.payload;
            } else {
                state.foundEmployee = null;
            }
    },
        findEmployeeByName: (state, action) => {
            console.log(action.payload);
            if (action.payload) {
                state.foundEmployee = action.payload;
            } else {
                state.foundEmployee = null;
            }
    },
    addEmployee: (state, action) => {
        console.log(action.payload);
        if (action.payload) {
            state.foundEmployee = action.payload;
        } else {
            state.foundEmployee = null;
        }
    }
    }
});
export default empSlice.reducer;

export const {findEmployeeById, findEmployeeByName,addEmployee} = empSlice.actions;

// const empSlice = createSlice({
//     name: 'empObj',
//     initialState : '',
//     reducers : {
        
//     }
// });




// import { createSlice } from "@reduxjs/toolkit";
// import Employee from "../components/Employee";

// const EmpSlice = createSlice({
//     name: 'em',
//     initialState: '',
//     reducers : {
//         abc: (state, action) => {
//             state.em = action.payload;
//         }
//     },
// });

// // export default 
// export const {abc}  = EmpSlice.actions;
// export default EmpSlice.reducer;

// // const EmpReducer = createReducer(
// //     {
        
// //     }

// //     );