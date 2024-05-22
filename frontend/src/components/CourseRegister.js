import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CourseRegister = () => {
    const navigate = useNavigate();
    const [userData,setUserData] = useState({
        coursename:"",
        price:"",
        offer:"",
        description:""
    });
    const onChange = (e)=>{
        setUserData({...userData,[e.target.name]:e.target.value});
    }
    const onSubmit = async(e)=>{
        e.preventDefault();
        const Userdata = {
            coursename:userData.coursename,
            price:userData.price,
            offer:userData.offer,
            description:userData.description,
        }
       const {data} = await axios.post(`/api/v1/course/registercourse`,Userdata);
       if(data.success){
          navigate("/")
       }
   };
  return (
    <div>
      <section className='register-form d-flex justify-content-center mt-3'>
            <form onSubmit={onSubmit} className='w-50 border p-3'>
                <h2 className='text-center'>Course Register</h2>
               <div className='form-group'>
                <label>Course Name</label>
                <input type='text' 
                 placeholder='Course Name...'
                 className='form-control'
                 name='coursename'
                 onChange={onChange}
                />
               </div>
               <div className='form-group'>
                <label>Enter Price</label>
                <input type='text' 
                 className='form-control'
                 placeholder='Price...'
                 name='price'
                 onChange={onChange}
                />
               </div>
               <div className='form-group'>
                <label>Enter Offer</label>
                <input type='text' 
                 className='form-control'
                 placeholder='offer...'
                 name='offer'
                 onChange={onChange}
                />
              <div className='form-group'>
                <label>Description</label>
                <input type='text' 
                 className='form-control'
                 placeholder='description...'
                 name='description'
                 onChange={onChange}
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

export default CourseRegister