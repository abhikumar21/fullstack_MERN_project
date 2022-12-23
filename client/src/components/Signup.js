import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Signup.css'
import p1 from '../images/p1.svg'
import {useNavigate} from 'react-router-dom'


const Signup = () => {

  const navigate=useNavigate();

  const [user, setUser] = useState({
    name:"",
    email:"",
    phone:"",
    password:"",
    cpassword:""
  });
  
  let name, value;
const handleInputs = (e) => {
     console.log(e);
     name=e.target.name;
     value=e.target.value;

     setUser({...user, [name]:value});
}

const PostData= async(e)=> {
   e.preventDefault();

   const {name, email, phone, work, password, cpassword} =user;
    
   const res = await fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({
      name, email, phone, work, password, cpassword
    })
   });
  
  
   const data = await res.json();
  if(data.status === 422 || !data) {
    window.alert("Invalid Registration");
    console.log("invalid Registration");
  }
  else{
    window.alert("Registration successful");
    console.log("Registration success");
    navigate("/login");
  }


}




  return (
    <div className='page'>
    <div className='signup'>
      <div className='details'>
          <h2>Sign Up</h2>
           
         <form method="POST" className='fill_details py-3'>
          <div className='name my-5'>
          <i className="zmdi zmdi-account-add zmdi-hc-lg"></i>
            <input type="text" name="name" id="" autoComplete="on"
            value={user.name}
            onChange={handleInputs}
            placeholder="enter your name"/>
          </div>

          <div className='email my-5'>
          <i className="zmdi zmdi-email"></i>
            <input type="text" name="email" id="" autoComplete="off"
            value={user.email}
            onChange={handleInputs}
            placeholder="enter your email"/>
          </div>

          <div className='phone my-5'>
          <i className="zmdi zmdi-phone"></i>
            <input type="text" name="phone" id="" autoComplete="on"
            value={user.phone}
            onChange={handleInputs}
            placeholder="enter your phone"/>
          </div>

          <div className='password my-5'>
          <i className="zmdi zmdi-eye"></i>
            <input type="text" name="password" id="" autoComplete="off"
            value={user.password}
            onChange={handleInputs}
            placeholder="enter your password"/>
          </div>

          <div className='cpassword my-5'>
          <i className="zmdi zmdi-confirmation-number"></i>
            <input type="text" name="cpassword" id="" autoComplete="on"
            value={user.cpassword}
            onChange={handleInputs}
            placeholder="confirm password"/>
          </div>
        </form>  

        <button className='btn' onClick={PostData}>Register</button>

     </div>

      <div className='image container-fluid'>
        <figure><img src={p1} alt="hello"/></figure>
        
        <a href="/login">Login if you are already registered</a>
      </div>
    </div>

    </div>
  )
}

export default Signup
