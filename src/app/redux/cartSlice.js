import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    list : [],
}
export const cartSlice = createSlice( {
     name: 'cart',
     initialState,
     reducers: { 
        productAdd : (state, action) => { 
            console.log("---",action.payload)
            state.list.push(action.payload)
            // state.list.push(action.payload)  
            // return{
            //     ...state,
            //     list : list.push(action.payload) 
            // }
        }
      }  
 })
export const { productAdd } = cartSlice.actions
export default cartSlice.reducer