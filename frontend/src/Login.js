import React, { useState } from 'react'
import axios from 'axios';
const Login = () => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const onSubmit = async(e)=>{
        e.preventDefault();

       const {data} = await axios.post(`/api/v1/userlogin`,{email,password});
        console.log(data);
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <input  type='email' name='email'
              placeholder='Enter your Email..'
              onChange={(e)=>setEmail(e.target.value)}
            />
          <input  type='password' name='password'
              placeholder='Enter your Password..'
              onChange={(e)=>setPassword(e.target.value)}
            />
            <input type='submit' value={"submit"} />
        </form>
    </div>
  )
}

export default Login; 