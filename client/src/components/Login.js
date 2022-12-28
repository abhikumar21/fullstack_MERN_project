import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import p2 from '../images/p2.svg'
import './Login.css'

const Login = () => {
   const navigate= useNavigate();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('')

   const loginUser = async(e) => {
     e.preventDefault();

    const res= await fetch('/login',{
      method:"POST",
      headers:{
        "Content-Type" :"application/json"
      },
      body:JSON.stringify({
          email,
          password
      })

    });

    const data= res.json();
    if(res.status=== 400 || !data) {
      window.alert("Invalid Credentials");
    }
   
    else{
      window.alert("Login Successful")
      navigate("/")
    }


   }


  return (
    <div className='page container-fluid'>
        <div className='login container-fluid'>
            <div className='pic'>
              <img src={p2}></img>
            </div>

            <div className='login_details'>
               <h2>Sign In</h2>
               <form method="POST" className='details'>
                <div className='email'>
               <i className="zmdi zmdi-email"></i>
               <input name="email" autoComplete='on'
               value={email}
               onChange={(e)=>setEmail(e.target.value)}
               placeholder='registered email'></input>
               </div>

               <div className='password'>
               <i className="zmdi zmdi-lock"></i>
               <input name="password" autoComplete='on' 
               value={password}
               onChange={(e)=>setPassword(e.target.value)}
               placeholder='your password'></input>
               </div>

               <div className='login_button'>
                <input type="submit" name="login" id="login" className='form-submit'
                value="login"
                onClick={loginUser}
                ></input>
               </div>
               </form>
            </div>
        </div>
      
    </div>
  )
}

export default Login
