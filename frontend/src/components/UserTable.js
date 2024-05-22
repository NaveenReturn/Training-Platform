import React, { useEffect, useState } from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom"
const UserTable = () => {
  const navigate = useNavigate();
    const [userdata,setUserdata] = useState([]);
  useEffect(()=>{
      async function getAll(){
          const {data} = await axios.get(`/api/v1/getalluser`);
          setUserdata(data.user)
       }
       getAll();
  },[]);

  const Deleteuser = async(id)=>{
      const {data} = await axios.delete(`/api/v1/deleteuser/${id}`);
      if(data.success){
         setTimeout(()=>{
           navigate("/studenttable")
         },600);
      }
  } 
  return (
    <div>
        <table className='table'>
            <thead>
                <tr>
                    <th>NO:</th>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Number</th>
                    <th>View</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                  userdata.map((items,index)=>(
                     <tr key={index}>
                       <td>{index+1}</td>
                       <td>{items.name}</td>
                       <td>{items.course}</td>
                       <td>{items.phone}</td>
                       <td><button className='btn btn-primary' onClick={()=>navigate(`/studentlist/${items._id}`)}>status</button></td>
                       <td><button className='btn btn-warning' onClick={()=>navigate(`/update/${items._id}`)}>update</button></td>
                       <td><button className='btn btn-danger' onClick={()=>Deleteuser(items.id)}>Delete</button></td>
                     </tr>
                  ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default UserTable