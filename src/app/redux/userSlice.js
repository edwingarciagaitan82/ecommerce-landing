import { createSlice } from "@reduxjs/toolkit";
const initialState = {
     name : "Campista",
     email : "correo@correo" 
}
export const userSlice = createSlice( {
     name: 'user',
     initialState,
     reducers: {  }  
 })
export const {} = userSlice.actions
export default userSlice.reducer