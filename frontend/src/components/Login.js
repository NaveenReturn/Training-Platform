import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux"
import { LoginAction } from '../actions/autherAction';
import {useNavigate} from "react-router-dom"
const Login = () => {
     const navigate = useNavigate();
     const {isAuthenticated} = useSelector(state => state.autherReducer);
     const dispatch = useDispatch();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const onSubmit = (e)=>{
        e.preventDefault();
        dispatch(LoginAction(email,password))
   };

   useEffect(()=>{
     if(isAuthenticated){
            navigate("/studenttable")
     }
   },[isAuthenticated])
  return (
    <div>
         <section className='register-form d-flex justify-content-center mt-3'>
            <form onSubmit={onSubmit} className='w-50 border p-3'>
                <h2 className='text-center'>Login</h2>
               <div className='form-group'>
                <label>Enter Your Email</label>
                <input type='email' 
                 className='form-control'
                 placeholder='Email...'
                 name='email'
                 onChange={(e)=>setEmail(e.target.value)}
                />
               </div>
               <div className='form-group'>
                <label>Enter Your Password</label>
                <input type='password' 
                 className='form-control'
                 placeholder='Password...'
                 name='password'
                 onChange={(e)=>setPassword(e.target.value)}
                />
               <div className='form-group mt-2 d-flex justify-content-center'>
                    <input type='submit' className='btn btn-primary' value={"login"} />
               </div>
               <Link to={"/register"}>register</Link>
               </div>
            </form>
       </section>
    </div>
  )
}

export default Login