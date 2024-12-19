import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  employees: [],
};
export const employeSlice = createSlice({
  name: "userempslice",
  initialState,
  reducers: {
    addemployeeuser: (state, action) => {
      state.employees = [...state.employees, action.payload];
    },
    updateemployeeuser: (state, action) => {
      state.employees = state.employees.map((emp) =>
        emp.empid === action.payload.empid ? action.payload : emp
      );
    },
    deleteemployeeuser: (state, action) => {
      state.employees = state.employees.filter(
        (emp) => emp.empid !== action.payload
      );
      /*state.employees = state.employees.filter(
        (emp) => emp.empid !== action.payload.empid
      );*/
    },
  },
});

export const { addemployeeuser, updateemployeeuser, deleteemployeeuser } =
  employeSlice.actions;

export default employeSlice.reducer;
