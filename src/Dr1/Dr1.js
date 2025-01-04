

import React from 'react';
import './Dr1.css';
import { useNavigate } from 'react-router-dom';
import Vprofile from '../Vprofile/Vprofile'
import Nav from '../Nav/Nav';
import Rating from '@mui/material/Rating';
import Footer from '../Footer/Footer';
const Dr1 = () => {

    const pag = useNavigate();
    const handleAp = () =>
    {
        pag("/Appointment")
    }
  const doctor = [{
    name: 'Dr. Ravi Khambhati',
    specialization: 'MBBS, DVD - Dermatology',
    experience: '15 Years of Experience',
    consultationFee: '$100', // Add consultation fee
    rating:<Rating name="half-rating-read" defaultValue={4.7} precision={0.5} readOnly />,
    ratingu: <Rating name="half-rating" defaultValue={2.5} precision={0.5} />,
    public:'1400 patient stories',
    image: 'https://onboarding-exp-doctor-images.s3.ap-south-1.amazonaws.com/doctor-images/5573.jpg'
  }];

  return (
  <>
  <div class="cc">
  
<Vprofile/>

  <div>
       {doctor.map((doctor) => (
           <div key={doctor.id} className="profile-container13">
        <img src={doctor.image} alt={`Dr. ${doctor.name} Image`} className="doctor-image13" />
      <br></br>
        <div className="profile-details13">
        <h1 class="h1Dr">{doctor.name}</h1>
        <br></br>
        <p class="pDr">{doctor.specialization}</p>
        <p class="pDr">{doctor.experience}</p>
        <p class="pDr">{doctor.rating} <h6>{doctor.public}</h6></p>
       </div>
       <div>
      
        <button className='bu' style={{marginRight:'60px'}} onClick={handleAp}>Appointment</button></div>
       
      </div>
    ))}
    
    </div>
    <div className='areah'>
    Areas of expertise
   </div>
   <br></br>
    <div className='areapoint'>
   <ul>
    <li> Pimple and Acne Treatment</li>
<li> Fungal Infection </li>
<li> Skin Rash</li>
 <li>Hairfall/ Hair Loss Treatment</li>
 <li>Skin Care, Anti Aging, Skin Pigmentation, Tanning</li>
   </ul>
   {/* <div className='DrC'>fnnn</div> */}
    </div>
    <br></br>
    <br></br>
    <div className='areah'>
    Practice At
    </div>
   <br></br>
    <div className='areapoint'>
   <ul>
    <li>Infinity Health Care and Diagnostics</li>
   </ul>
    </div>
    <br></br>
    </div>
   
   <div className='wrate'>
    <br></br>
   <div className='rateh'>Rate your Experience</div><br></br>
    <div ><center><Rating name="half-rating" defaultValue={1.0} precision={0.5} /></center>
    <br></br></div>
   </div>
   <br></br>
 
  </>
  );
};

export default Dr1;

{/* <img src={doctor.image} alt={`Dr. ${doctor.name} Image`} className="doctor-image" />
<div className="profile-details">
  <h1>{doctor.name}</h1>
  <br></br>
  <p>{doctor.specialization}</p>
  <p>{doctor.experience}</p>
</div> */}