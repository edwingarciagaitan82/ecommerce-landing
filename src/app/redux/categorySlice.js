import { createSlice } from "@reduxjs/toolkit";

console.log("categoryslice")

const initialState = {
    list : [],
}

export const categorySlice = createSlice( {
     name: 'category',
     initialState,
     reducers: { 
        categoriesLoad : (state, action) => { 
            console.log("---",action.payload)
            state.list = action.payload
        }
      }  
 })
export const { categoriesLoad } = categorySlice.actions
export default categorySlice.reducer