import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
const CourseUpdate = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [coursename,setCoursename] = useState("");
    const [price,setPrice] = useState("");
    const [offer,setOffer] = useState("");
    const [description,setDescription] = useState("");
    const onSubmit = async(e)=>{
        e.preventDefault();
        const Userdata = {
            coursename:coursename,
            print:price,
            offer:offer,
            description:description,
        }
       const {data} = await axios.post(`/api/v1/course/updatecourse`,Userdata);
       if(data.success){
          navigate("/")
       }
   };

   useEffect(()=>{
      async function getSingle(){
           const {data} = await axios.get(`/api/v1/course/getsingleuser/${id}`);
           setCoursename(data && data.course);
       };
       getSingle();
   },[]);
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
                 value={coursename}
                 onChange={(e)=>setCoursename(e.target.value)}
                />
               </div>
               <div className='form-group'>
                <label>Enter Price</label>
                <input type='text' 
                 className='form-control'
                 placeholder='Price...'
                 name='price'
                 value={price}
                 onChange={(e)=>setPrice(e.target.value)}
                />
               </div>
               <div className='form-group'>
                <label>Enter Offer</label>
                <input type='text' 
                 className='form-control'
                 placeholder='offer...'
                 name='offer'
                 value={offer}
                 onChange={(e)=>setOffer(e.target.value)}
                />
              <div className='form-group'>
                <label>Description</label>
                <input type='text' 
                 className='form-control'
                 placeholder='description...'
                 name='description'
                 onChange={(e)=>setDescription(e.target.value)}
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

export default CourseUpdate