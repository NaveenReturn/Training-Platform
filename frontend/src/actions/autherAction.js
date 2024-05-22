import axiso from "axios";
import { RegisterFaild, RegisterReuest, RegisterSuccess, loadUserFaild, loadUserReuest, loadUserSuccess, loginFaild, loginReuest, loginSuccess } from "../slice/autherSlice";

export const RegisterAction = (userData)=> async(dispatch)=>{
    try{
        dispatch(RegisterReuest());
        const {data} = await axiso.post(`/api/v1/register`,userData);
        dispatch(RegisterSuccess(data))
    }catch(err){
      dispatch(RegisterFaild(err.response.data.message))
    }
};
// // UPDATE API
// export const UpdateAction = (id,userData)=> async(dispatch)=>{
//   try{
//       dispatch(RegisterReuest());
//       const {data} = await axiso.post(`/api/v1/updateuser/${id}`,userData);
//       dispatch(RegisterSuccess(data))
//   }catch(err){
//     dispatch(RegisterFaild(err.response.data.message))
//   }
// };

// LOGIN API

export const LoginAction = (email,password)=> async(dispatch)=>{
    try{
        dispatch(loginReuest());
        const {data} = await axiso.post(`/api/v1/userlogin`,{email,password});
        dispatch(loginSuccess(data))
    }catch(err){
      dispatch(loginFaild(err.response.data.message))
    }
};

//LOAD USER API
export const loadUser =  async(dispatch)=>{
    try{
        dispatch(loadUserReuest());
        const {data} = await axiso.get(`/api/v1/getuser/profile`);
        dispatch(loadUserSuccess(data))
    }catch(err){
      dispatch(loadUserFaild(err.response.data.message));
    }
};