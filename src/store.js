import {createSlice,configureStore} from '@reduxjs/toolkit';
const state={
balance:0,
fullName:'',
mobile:null
}

const userslice=createSlice({
     name:'user',
     initialState:state,
     reducers:{
        updateMobile:(state,action)=>{
            state.mobile=action.payload
        },
        updateName:(state,action)=>{
            state.fullName=action.payload
        },
        withdraw:(state,action)=>{
            state.balance=state.balance-action.payload
        },
        deposit:(state,action)=>{ 
            state.balance=state.balance+  +action.payload
        },
        reset:(state,action)=>{
            return {
                balance:0,
fullName:'',
mobile:null
            }
        }
        
     }
});

//userslice{reducer:function,actions:{}}

const store=configureStore({
    reducer:{
        user:userslice.reducer
    }
})

export default store;

export const {updateMobile,updateName,withdraw,deposit,reset}=userslice.actions;

