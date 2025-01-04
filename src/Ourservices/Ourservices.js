import '../Ourservices/Ourservices.css'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import MaximizeIcon from '@mui/icons-material/Maximize';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import Kids from '../Images/Kids.png'
import OP from '../Images/On.png'
import yoga from '../Images/Yog1.png'
import Book from '../Images/Book2.jpeg'
import MP from '../Images/Mp.jpeg'

const Ourservices = () => {
  const page = useNavigate();
  const handleYoga = () =>
  {
 page("/VideoList")
  }
  const handleOP = () =>
  {
 page("/My_page2")
  }
  const handleAP = () =>
  {
 page("/Dr")
  }
  const handleBot = () =>
  {
 page("/MedHubBot")
  }
  const handleAmb = () =>
  {
 page("/AmbulanceService")
  }
  const handleMeal = () =>
  {
 page("/MealPlanner")
  }
  const handleKidsCare = () =>
  {
 page("/KidsCare")
  }
  const handleCon = () =>
  {
 page("/Contact")
  }
  return (
   
    <>
    <Nav></Nav>
    <center>
      
      <div class="top">
        <br></br><h1 className='h1'>Our Services</h1>
    <br></br>
    <MaximizeIcon></MaximizeIcon> <MaximizeIcon></MaximizeIcon>
    <p> We provide you the best choices for you.Adjust it to your health needs and make sure undergo treatment with </p>

    <p>our highly
      qualified doctors,you can consult with us which type of service is suitable for you.
      </p>
      <br>
      </br><MaximizeIcon></MaximizeIcon> <br></br>
      <br></br>
      <br></br></div></center>

    <div class="cardpad">
      <div class="cards-list">
  
    <div class="card 1">
      <div class="card_image"> <img src="https://cdn.dribbble.com/users/2146370/screenshots/4432324/media/8660907ffbba756ef3d6cd1905eb9514.gif"  onClick={handleAP}/> </div>
      <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <div class="card_title title-black">
        <p>Appoint Doctor</p>
      </div>
    </div>
    
      <div class="card 2">
      <div class="card_image">
        <img src="https://img.freepik.com/free-vector/flat-national-doctor-s-day-illustration_23-2149437381.jpg?w=740&t=st=1709477931~exp=1709478531~hmac=4b5ef3640b31e5483fe0efd431f3a3300e533edface4444dcad8490ee26cbb67" onClick={handleOP}/>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div class="card_title title-black">
        <p>24/7 Online Pharmacy</p>
      </div>
    </div>
    <div class="card 3">
    <div class="card_image">
      <img src="https://www.millihealth.com/wp-content/uploads/2018/07/Hover-v2.gif"  onClick={handleBot}/>
    </div>
    <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    <div class="card_title">
    <p>MedHub Bot</p>
    </div>
  </div>
    {/* <div class="card 3">
      <div class="card_image">
        <img src="https://img.freepik.com/free-vector/online-doctor-concept_23-2148529537.jpg?t=st=1709478576~exp=1709482176~hmac=3e220258cdc7e525d72edcce07e4b3cca9240e88a3b337df6a39f3ce5c3826fd&w=740" />
      </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
       <div class="card_title">
        <p>Counselling</p>
       </div>
       </div> */}
   </div>
    <br></br>
    <br></br>
   <div class="cards-list">
   
      <div class="card 5">
      <div class="card_image">
        <img src="https://i.pinimg.com/originals/62/57/52/625752fb4beaf0b05b2a0315cff4ad79.gif" onClick={handleYoga} />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <div class="card_title title-black">
        <p class="title">Yoga</p>
      </div>
      </div>
      <div class="card 6">
      <div class="card_image">
        <img src="https://img.freepik.com/free-vector/call-doctor-concept-doctors-answer-patient-questions-phone_1150-50289.jpg?t=st=1709478518~exp=1709482118~hmac=50cf0fa59dde56da788db62ded2a3b63f48b1fae98e9965eb9d5205cde73b7b3&w=900" onClick={handleCon} />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <div class="card_title title-black">
      
        <p>Customer Care</p>
      </div>
      </div>

      <div class="card 4">
      <div class="card_image">
        <img src="https://cdn.dribbble.com/users/579262/screenshots/3264391/media/d896d8706f94c99dd3a0db2feae84dad.gif" onClick={handleAmb} />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <div class="card_title title-black">
        <p>Ambulance Service</p>
      </div>
      </div>
      
   </div>
   <br></br>
   <br></br>
   <br></br>
   <div class="cards-list">
  
  <div class="card 1">
    <div class="card_image"> <img src={Kids} onClick={handleKidsCare} /> </div>
    <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    <div class="card_title title-black">
      <p>KidsCare</p>
    </div>
  </div>
  <div class="card 2">
    <div class="card_image">
      <img src={MP} onClick={handleMeal} />
      </div>
      <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    <div class="card_title">
      <p>Meal Planner</p>
    </div>
  </div>
  
 
    
    
  
  </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <Footer></Footer>
    </>
  )
}

export default Ourservices

//Ambu:https://cdn.dribbble.com/users/579262/screenshots/3264391/media/d896d8706f94c99dd3a0db2feae84dad.gif
//yoga:https://i.pinimg.com/originals/62/57/52/625752fb4beaf0b05b2a0315cff4ad79.gif
//https://cdn.dribbble.com/users/2146370/screenshots/4432324/media/8660907ffbba756ef3d6cd1905eb9514.gif
//Meal:https://hips.hearstapps.com/hmg-prod/images/eatapps-1562790618.gif?crop=1.00xw:1.00xh;0,0&resize=1200:*
//Counselling:https://skymoonhospital.com/wp-content/uploads/2022/01/free-consultation.png
//Cutomr:https://www.cloudtalk.io/wp-content/uploads/2021/12/Article-202105-FirstCallResolution-2x-1024x538.png 