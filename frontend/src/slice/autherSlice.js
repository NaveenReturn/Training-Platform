/* eslint-disable no-unused-vars */
import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"register",
    initialState:{
        loading:false,
        isAuthenticated:false
    },
    reducers:{
        RegisterReuest(state,action){
            return{
                ...state,
                loading:true
            }
        },
        RegisterSuccess(state,action){
            return{
                loading:false,
                isAuthenticated:true,
                user:action.payload.user
            }
        },
        RegisterFaild(state,action){
            return{
                loading:false,
                isAuthenticated:false,
                error:action.payload
            }
        },
        loginReuest(state,action){
            return{
                isAuthenticated:false,
                loading:true
            }
        },
        loginSuccess(state,action){
            return{
                loading:false,
                isAuthenticated:true,
                user:action.payload.user
            }
        },
        loginFaild(state,action){
            return{
                loading:false,
                isAuthenticated:false,
                error:action.payload
            }
        },
        loadUserReuest(state,action){
            return{
               ...state,
               isAuthenticated:false,
               loading:true
            }
        },
        loadUserSuccess(state,action){
            return{
                loading:false,
                isAuthenticated:true,
                user:action.payload.user
            }
        },
        loadUserFaild(state,action){
            return{
                loading:false,
                isAuthenticated:false,
                error:action.payload
            }
        },
    }
})
const {actions,reducer} = authSlice;
export const {RegisterReuest,RegisterSuccess,RegisterFaild,
    loginReuest,loginSuccess,loginFaild,
    loadUserReuest,loadUserSuccess,loadUserFaild
} = actions;

export default reducer; 