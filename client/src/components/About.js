import React from 'react'
import './About.css'
import dp from '../images/dp.jpg'
import 'bootstrap/dist/css/bootstrap.css'



const About = () => {
  return (
    <div className='container emp-profile'>
      <form className="form" method="">
        <div className='row'>
          <div className='image col-md-4'>
            <img src={dp} alt="hello"></img>
          </div>
          <div className='col-md-6'>
            <div className='profile-head'>
              <h5>Abhishek</h5>
              <h6>Web Dev</h6>
              <p className='rating mt-3 mb-5'>
                Hello welcome to my profile
              </p>

              <nav className="nav">
                 <a className="nav-link active" aria-current="page" id="home-tab" data-bs-toggle="tab" href="#home" role="tab">About</a>
                 <a className="nav-link" aria-current="page" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab">Timeline</a>

              </nav>
            </div>
          
          </div>

          <div className='col-md-2'>
            <button className="btn">Edit</button>  
           </div>
        </div>
        
        <div className='row mt-5'>
          <div className='col-md-4'>
            <div className='profile-work'>
              <p>Work Link</p>
              <a href="#gitthub">Github</a><br></br>
              <a href="#gitthub">Github</a><br></br>
              <a href="#gitthub">Github</a><br></br>
              <a href="#gitthub">Github</a><br></br>
            </div>
          </div>
          <div className='col-md-8 pl-5 about-info'>
              <div className='tab-content profile-tab' id="mytabcontent">
                <div className='tab-pane fade show active' id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className='row'>

                    <div className='col-md-6'>
                    <h6>User Id</h6>
                    </div>
                    <div className='col-md-6'>
                      <p>Abhishek</p>
                    </div>

                    <div className='col-md-6'>
                    <h6>User Id</h6>
                    </div>
                    <div className='col-md-6'>
                      <p>Abhishek</p>
                    </div>

                    <div className='col-md-6'>
                    <h6>User Id</h6>
                    </div>
                    <div className='col-md-6'>
                      <p>Abhishek</p>
                    </div>

                    <div className='col-md-6'>
                    <h6>User Id</h6>
                    </div>
                    <div className='col-md-6'>
                      <p>Abhishek</p>
                    </div>

                  </div>
                </div>

                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className='row'>
                  <div className='col-md-6'>
                    <h6>Experience</h6>
                    </div>
                    <div className='col-md-6'>
                      <p>Expert</p>
                    </div>
                    
                    <div className='col-md-6'>
                    <h6>Experience</h6>
                    </div>
                    <div className='col-md-6'>
                      <p>Expert</p>
                    </div>
                    
                    <div className='col-md-6'>
                    <h6>Experience</h6>
                    </div>
                    <div className='col-md-6'>
                      <p>Expert</p>
                    </div>
                    
                    <div className='col-md-6'>
                    <h6>Experience</h6>
                    </div>
                    <div className='col-md-6'>
                      <p>Expert</p>
                    </div>

                  
                    </div>

                </div>
                  
              </div>
          </div>
        </div>

      </form>
    </div>
  )
}

export default About
