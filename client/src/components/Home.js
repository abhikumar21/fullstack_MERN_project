
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Home.css'
import Lamp from '../images/lamp.png'
import Light from '../images/light.png'



const Home = () => {


  return (
    
<div className="hero">
 <button className="lamp_btn" id="lamp_button"><span></span></button>

 <div className="lampcontainer">
   <img src={Lamp} alt="" className="lamp"/>
  <img src={Light} alt="" className="light" id="lighton"/>
</div>

  <div className="text">
    <h2>Lorem, ipsum.</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus ea reiciendis laboriosam eius dolorem enim magnam asperiores, debitis suscipit harum delectus ipsam! </p>
    <a href="">Click here</a>
 </div>

</div>
  )
}

export default Home
