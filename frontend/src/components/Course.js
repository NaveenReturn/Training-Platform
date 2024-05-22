import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Course = () => {
     const navigate = useNavigate();
    const [userData,setUserData] = useState([]);
  useEffect(()=>{
    async function getALl(){
        const {data} =await axios.get(`/api/v1/course/getalluser`);
        setUserData(data && data.course);
     }
     getALl();
  },[]);
  console.log(userData);
  const DeleteCourse = async(id)=>{
    const {data} = await axios.delete(`/api/v1/course/deletecourse/${id}`);

    if(data.success){
       navigate("/studenttable");
    }
}
  return (
    <div>
        <table className='table'>
            <thead>
                <tr>
                    <th>NO</th>
                    <th>Course Name</th>
                    <th>Price</th>
                    <th>Offer</th>
                    <th>Description</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
             <tbody>
             {
              userData && userData.map((item,index)=>(
                   <tr key={index}>
                    <td>{index+1}</td>
                      <td>{item.coursename}</td>
                      <td>{item.price}</td>
                      <td>{item.offer}</td>
                      <td>{item.description}</td>
                      <td><button className='btn btn-primary' onClick={()=>navigate()}>update</button></td>
                      <td><button className='btn btn-danger' onClick={()=>DeleteCourse(item._id)}>delete</button></td>
                   </tr>
              ))
            }
             </tbody>
        </table>
    </div>
  )
}

export default Course