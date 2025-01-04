import React from 'react'
import '../Contact/Contact.css'
import phn from '../Images/phn.png'
import sm from '../Images/sm.png'
import mail from '../Images/mail.png'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { Bounce } from 'react-toastify';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom'
const Contact = () => {
const Back = useNavigate();
  const handlealert = () =>
  {
      toast.info('Thankyou,we will contact you soon', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          onClose: () => {
            Back('/');
          },
          });
  }
  return (
    <>
      <Nav></Nav>
      <br></br>
      <br></br>
    <div>
        <center>
        <div class="containervv">
    <div class="company">
      <div class="image-box">
       <img class="imgC" src="https://vidico.com/app/uploads/2023/12/Best-Medical-Animation-Videos-To-Watch-Now.jpg" alt=""/>
      </div>
    <form action="#" className='formC'>
      <div class="topic">Ask Queries</div>
      <div class="input-box">
        <input type="text" className='inputC' required/>
        <label className='labelC'>Enter your name</label>
      </div>
      <div class="input-box">
        <input   className='inputC' type="text" required/>
        <label className='labelC'>Enter your email</label>
      </div>
      <div class="input-box">
        <input  className='inputC' type="text" required/>
        <label className='labelC'>Enter your message</label>
      </div>
      <br></br>
      <input  className='bu' type="submit" value="Send" onClick={handlealert}/>
   </form>
  </div>
  </div>
  <br></br>
  <br></br>
  <div>
  <h1>CONTACT US</h1>
  </div>
  </center>
<br></br>
<br></br>
<div className='con'>
    <br>
    </br>
    <br></br>
    <br></br>
    <br></br>
<div class="card-list">
        <div class="card-item">
          <div className="pixel">
          <img src={phn} alt="phone" className='imgcon' />
            </div>
            <center><h1>PHONE NUMBER</h1>
            <br></br>
            <h3>234-9876-5400</h3>
            </center>
           
        </div>
        <div class="card-item">
          <div className="pixel">
           <img src={mail} alt="mail" class="imgcon"/>
            </div>
           <center><h1>EMAIL</h1></center> 
           <br></br>
           <center><h3>MedHub@gmail.com</h3></center>
           
        </div>
        <div class="card-item">
          <div className="pixel">
            <img src={sm} alt="social media" className='imgcon'/>
            </div>
            <center><h1>SOCIAL MEDIA</h1>
            <br></br>
            <h3>MedHub_org</h3>
            </center>
        </div>
    </div>
    
    </div> 
 
    
    
    
    
    </div>
    
    
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"

/>
<Footer></Footer>
    </>
  )
}

export default Contact