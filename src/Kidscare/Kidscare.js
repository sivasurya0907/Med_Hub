import React from 'react'
import Nav from '../Nav/Nav'
import './Kidscare.css'
import KidsBlog from '../KidsBlog/KidsBlog'
import YouTubeCarousel from '../YouTubeCarousel/YouTubeCarousel'
import Footer from '../Footer/Footer'
import DoctorAvatars from '../DoctorsAvatars/DoctorAvatars'
import FeatureCarousel from '../FeatureCarousel/FeatureCarousel'

const Kidscare = () => {
  return (
  <>
  <Nav></Nav>
  <div className="container-imgKC">
        {/* <img  class="imgKC" src="https://raisingchildren.net.au/__data/assets/image/0028/56278/young-childrens-health-what-to-expect-wide.jpg"/> */}
        <div className="Main-textAC">
          
            <br></br>
            <br></br>
            <p class="card-title1">At MedHub, we understand the unique healthcare 
            needs of our little ones. Our Kids Care division is dedicated to 
            providing exceptional pediatric services, ensuring the health, safety,
             and well-being of your children. We believe in creating an environment 
             where kids feel comfortable, and parents trust the expertise of our pediatric specialists.</p>
         </div>
    </div>
   
   
   
    <KidsBlog></KidsBlog>
   {/* <YouTubeCarousel></YouTubeCarousel> */}
   <br></br>
   <FeatureCarousel></FeatureCarousel>
   <br></br>
   <DoctorAvatars></DoctorAvatars>
   <Footer></Footer>
  </>
  )
}

export default Kidscare