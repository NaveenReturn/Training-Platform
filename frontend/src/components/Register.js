import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import { RegisterAction } from '../actions/autherAction';
import {useNavigate} from "react-router-dom"
const Register = () => {
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const {isAuthenticated} = useSelector(state => state.autherReducer)
    const [userData,setUserData] = useState({
        name:"",
        email:"",
        password:"",
        course:"",
        phone:"",
    })
    const onChange = (e)=>{
         setUserData({...userData,[e.target.name]:e.target.value})
    };

    const onSubmit = (e)=>{
         e.preventDefault();
         const Userdata = {
             name:userData.name,
             email:userData.email,
             password:userData.password,
             course:userData.course,
             phone:userData.phone
         }
         console.log(userData);
         dispatch(RegisterAction(Userdata))
    };

    useEffect(()=>{
       if(isAuthenticated){
            navigate("/")
       }
    },[isAuthenticated])
  return (
    <div>
       <section className='register-form d-flex justify-content-center mt-3'>
            <form onSubmit={onSubmit} className='w-50 border p-3'>
                <h2 className='text-center'>Register</h2>
               <div className='form-group'>
                <label>Enter Your Name</label>
                <input type='text' 
                 placeholder='Name...'
                 className='form-control'
                 name='name'
                 onChange={onChange}
                />
               </div>
               <div className='form-group'>
                <label>Enter Your Email</label>
                <input type='email' 
                 className='form-control'
                 placeholder='Email...'
                 name='email'
                 onChange={onChange}
                />
               </div>
               <div className='form-group'>
                <label>Enter Your Password</label>
                <input type='password' 
                 className='form-control'
                 placeholder='Password...'
                 name='password'
                 onChange={onChange}
                />
              <div className='form-group'>
                <label>Select Courses</label>
                 <select name='course' onChange={onChange}  className='form-control'>
                      <option value={""}>--select--</option>
                      <option value={"frontend"}>Frontend</option>
                      <option value={"backend"}>Backend</option>
                      <option value={"fullstack"}>Full Stack</option>
                      <option value={"data science"}>Data Science</option>
                      <option value={"dotnet"}>Dotnet</option>
                 </select>
               </div>
              <div className='form-group'>
                <label>Enter Phone Number</label>
                <input type='number' 
                 className='form-control'
                 placeholder='Number...'
                 name='phone'
                 onChange={onChange}
                />
               </div>
               <div className='form-group d-flex justify-content-center'>
                    <input type='submit' className='btn btn-primary' value={"submit"} />
               </div>
               <Link to={"/login"}>login</Link>
               </div>
            </form>
       </section>
    </div>
  )
}

export default Register;