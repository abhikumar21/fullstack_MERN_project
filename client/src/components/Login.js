import React from 'react'
import p2 from '../images/p2.svg'
import './Login.css'

const Login = () => {
  return (
    <div className='page container-fluid'>
        <div className='login container-fluid'>
            <div className='pic'>
              <img src={p2}></img>
            </div>

            <div className='login_details'>
               <h2>Sign In</h2>
               <form className='details'>
                <div className='email'>
               <i className="zmdi zmdi-email"></i>
               <input name="email" autoComplete='on' placeholder='registered email'></input>
               </div>

               <div className='password'>
               <i className="zmdi zmdi-lock"></i>
               <input name="password" autoComplete='on' placeholder='your password'></input>
               </div>

               </form>
            </div>
        </div>
      
    </div>
  )
}

export default Login
