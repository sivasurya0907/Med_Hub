import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Aboutus/Aboutus.css'
import StarRateIcon from '@mui/icons-material/StarRate';
const Aboutus = () => {
  const Rate = useNavigate();

  const handleRate=()=>
  {
    Rate("/Rate")
  }
  return (
    <div>
      <div className="about-us-container">
        <div className='img'>
          <img
            src="https://qph.cf2.quoracdn.net/main-qimg-390adfa73c61b4f238418ac7ad6dc128"
            alt="no img" height={450} width={550}
          />
        </div>
        <div className="content">
         <h1 className='h1A'>ABOUT US</h1>
          <br></br>
          <p class="pMH">
            MedHub is a healthcare app that offers a comprehensive platform for users to manage their health and fitness goals. It provides various features including personalized diet plans, calorie tracking, consult doctors, and access to a community of health enthusiasts for support and motivation. Additionally, MedHub offers the option to connect with certified nutritionists, dietitians, and fitness trainers for personalized guidance and coaching.
            The app aims to make healthy living more accessible and sustainable for individuals by leveraging technology and expert advice.
          </p>
        </div>
      </div>
      
       
      <center><h1 className='functionality'>SPECIALITY</h1></center>
      <br></br>
     <div className='cardsMH'>
        <div className="cardMH">
          <div className="card-imageMH" style={{ backgroundImage: 'url("https://img.freepik.com/premium-photo/medical-concept-indian-beautiful-female-doctor-white-coat-with-stethoscope-waist-up-medical-student-woman-hospital-worker-looking-camera-smiling-studio-blue-background_185696-621.jpg")' }}></div>
          <div className="card-contentMH">
            <h2 class="h2MH">Certified Doctors</h2>
           
            <p class="pMH">Certified doctors at MedHub offer top-tier, personalized
             care with expertise
             backed by rigorous certifications.</p>
          </div>
        </div>
        <div className="cardMH">
          <div className="card-imageMH" style={{ backgroundImage: 'url("https://c8.alamy.com/comp/2G9AWXP/support-24-hours-flat-icon-isolated-on-white-background-support-service-with-headphones-customer-support-icon-consultation-telemarketing-2G9AWXP.jpg")' }}></div>
          <div className="card-contentMH">
            <h2 class="h2MH">24/7 Consultation</h2>
           
            <p class="pMH">Your health doesn't wait, and neither do we – 
            MedHub's 24/7 consultation ensures immediate support for your well-being.</p>
          </div>
        </div>
        <div className="cardMH">

          <div className="card-imageMH" style={{ backgroundImage: 'url("https://www.millihealth.com/wp-content/uploads/2018/07/Hover-v2.gif")' }}></div>
          <div className="card-contentMH">
            <h2 class="h2MH">MedHub Bot</h2>
            <p class="pMH">MedHub Bot:  Seamlessly connecting you to medical
             information and assistance,
             making your healthcare experience effortless and efficient.
          </p>
          </div>
        </div>
        <div className="cardMH">
          <div className="card-imageMH" style={{ backgroundImage: 'url("https://raisingchildren.net.au/__data/assets/image/0017/110618/Starting-child-care-children-with-disability.jpg")' }}></div>
          <div className="card-contentMH">
            <h2 class="h2MH">Kids Care</h2>
           
            <p class="pMH">Experience peace of mind as MedHub's Kids Care 
            combines expert pediatric services  
            ensuring your little ones thrive in a caring environment.</p>
          </div>
        </div>
        <div className="cardMH">
          <div className="card-imageMH" style={{ backgroundImage: 'url("https://hips.hearstapps.com/hmg-prod/images/eatapps-1562790618.gif?crop=1.00xw:1.00xh;0,0&resize=1200:*")' }}></div>
          <div className="card-contentMH">
            <h2 class="h2MH">Mealr</h2>
           
            <p class="pMH">MedHub's Meal Planner: Personalized nutrition, 
            expert guidance, and user-friendly interface for a healthier you.</p>
          </div>
        </div>
      </div>
    
      <div class="MH">
       
      <center><button class="buMH" onClick={handleRate}>RateUs</button></center>
      </div>
    </div>
  )
}

export default Aboutus