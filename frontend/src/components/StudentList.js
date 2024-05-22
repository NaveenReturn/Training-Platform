import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
const StudentList = () => {
   const {id} = useParams();
  const [userdata,setUserdata] = useState([]);

  useEffect(()=>{

     async function getUser(){
        const {data} = await axios.get(`/api/v1/getsingleuser/${id}`);
        setUserdata(data && data.user);
     }
     getUser();
  },[]);
  return (
    <div className='mt-4'>
        
        <div className='studentlist m-auto border rounded w-75 p-3'>
           <h3 className='opacity-25'><span>Auther </span> {userdata.name}</h3>
           <h5><span className='opacity-25'>Course</span> : {userdata.course}</h5>
           <p>Mobile Number : {userdata.phone}</p>
           <p><span>Placed Company Name :</span> zoho</p>
           <p className='fw-bold'>Student Status</p>
           <button className='btn btn-warning'>pending</button>
        </div>
    </div>
  )
}

export default StudentList