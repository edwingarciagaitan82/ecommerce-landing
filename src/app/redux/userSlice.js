import { createSlice } from "@reduxjs/toolkit";
const initialState = {
     id: '',
     name : "",
     email : "" 
}
export const userSlice = createSlice( {
     name: 'user',
     initialState,
     reducers: {
          userAdd : (state, action) => { 
               console.log("---",action.payload)
               state.list.push(action.payload)
     }}
 })
export const {} = userSlice.actions
export default userSlice.reducer