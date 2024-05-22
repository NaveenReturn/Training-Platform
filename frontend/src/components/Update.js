import React, { useEffect, useState } from 'react'
import axios from "axios";
import {useParams} from "react-router-dom"
const Update = () => {
    const {id} = useParams();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [course,setCourse] = useState("");
    const [phone,setPhone] = useState("");
    const onSubmit = async(e)=>{
        e.preventDefault();
        const Userdata = {
            name:name,
            email:email,
            password:password, 
            course:course,
            phone:phone
        }
      const {data} = await axios.put(`/api/v1/updateuser/${id}`,Userdata);

      if(data.success){
          window.location.href = "/studenttable"
      }
   };

   useEffect(()=>{
     async function getSingle(){
        const {data} = await axios.get(`/api/v1/getsingleuser/${id}`);
        setName(data && data.user.name);
        setEmail(data && data.user.email);
        setPassword(data && data.password);
        setCourse(data && data.user.course);
        setPhone(data && data.user.phone);
      };
      getSingle();
   },[]);
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
                 value={name}
                 onChange={(e)=>setName(e.target.value)}
                />
               </div>
               <div className='form-group'>
                <label>Enter Your Email</label>
                <input type='email' 
                 className='form-control'
                 placeholder='Email...'
                 name='email'
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}
                />
               </div>
               <div className='form-group'>
              <div className='form-group'>
                <label>Select Courses</label>
                 <select name='course' onChange={(e)=>setCourse(e.target.value)}  className='form-control'>
                      <option value={course}>{course}</option>
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
                 value={phone}
                 onChange={(e)=>setPhone(e.target.value)}
                />
               </div>
               <div className='form-group d-flex justify-content-center'>
                    <input type='submit' className='btn btn-primary' value={"submit"} />
               </div>
               </div>
            </form>
       </section>
    </div>
  )
}

export default Update