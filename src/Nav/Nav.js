import React from 'react'
import '../Nav/Nav.css'
import img from '../Images/MHlogo1.png'
// import { useAuth } from '../AuthProvider/AuthProvider'
const Nav = () => {

  // const { isUserLoggedIn, login, logout } = useAuth();

  // const handleLinkClick = (e) => {
  //   if (!isUserLoggedIn) {
  //     e.preventDefault();
  //     alert('Please log in to access this feature.');
  //   }
  // };

  return (
    <div>
        <div className='bod'>
      <div className="container">
        <div className="navigation">
          <div className="bar">
            <div className="logo">
          <img src={img} alt ="ok" width={70} height={70}></img>
          </div>
          <div className="text">
            <ul>
              <li><a href="/">Home</a></li>
              {/* <li>
                    <a
                      href="/Ourservices"
                      onClick={handleLinkClick}
                      disabled={!isUserLoggedIn}
                    >
                      Services
                    </a>
                    </li> */}
              <li><a href="/OurServices">Services</a></li>
              <li><a href="/Blog">Blog</a></li>
              <li><a href="/Dr">Meet Doctors</a></li>
              <li><a href="/Login">Login</a></li>
            </ul>
            </div>
          </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Nav