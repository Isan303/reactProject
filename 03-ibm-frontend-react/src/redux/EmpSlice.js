import { createSlice } from "@reduxjs/toolkit";
console.log('empSlice');
const empSlice = createSlice({
    name: 'emp',
    initialState : { 
        empObj: {firstName: 'Sonu', salary: 10.50}  ,
        empDataList :'',
        byIdEmp:'',
        byNameEmp:''
        
    },
    reducers : { // more methods 
        setAllEmp : (state, action) => {
            console.log(action.payload);
            state.empDataList = action.payload;
        },

        setById : (state, action) =>{
            console.log(action.payload);
            state.byIdEmp =action.payload;
        },

        setByName : (state,action) =>{
            console.log(action.payload);
            state.byNameEmp=action.payload;
        }
    }
});
export default empSlice.reducer;

export const {setAllEmp,setById,setByName} = empSlice.actions;

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