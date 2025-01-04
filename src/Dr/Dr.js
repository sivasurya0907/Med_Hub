import React from 'react'
import '../Dr/Dr.css'
import Rating from '@mui/material/Rating';
import MeetDoc from '../MeetDoc/MeetDoc';
import Nav from '../Nav/Nav';
const Dr = () => {

    
  const doctor = [{
    name: 'Dr. Ravi Khambhati',
    specialization: 'MBBS, DVD - Dermatology',
    experience: '15 Years of Experience',
    consultationFee: 'Nair Hospital,Mumbai', // Add consultation fee
    rating:<Rating name="half-rating-read" defaultValue={4.7} precision={0.5} readOnly />,
   
    public:'1400 patient stories',
    image: 'https://onboarding-exp-doctor-images.s3.ap-south-1.amazonaws.com/doctor-images/5573.jpg'
   
  }];
  const doctor1 = [{
    name: 'Dr. HariPriya Vickram',
    specialization: 'MBBS, DM - Neurology',
    experience: '10 Years of Experience',
    consultationFee: 'SVS Institute ', 
    rating:<Rating name="half-rating-read" defaultValue={5.5} precision={0.5} readOnly />,
  
    public1:'1049 patient stories',
    image: 'data:image/jpeg;base64,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'
  }];
  
  const doctor2 = [{
    name: 'Dr. Prabhakaran',
    specialization: 'MBBS, MS - General Surgery',
    experience: '23 Years of Experience',
    consultationFee: 'Apollo Hospital,Chennai', 
    rating:<Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />,
  
    public2:'6950 patient stories',
    image: 'data:image/jpeg;base64,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'
  }];
  
  
  const doctor3 = [{
    name: 'Dr.Nitin Jain',
    specialization: 'MBBS, MD - General Medicine',
    experience: '18 Years of Experience',
    consultationFee: 'Global Hospitals,Ahmedabad', 
    rating:<Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />,
  
    public3:'845 patient stories',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXr2BVs9w2NOpL40A8iu19IsdqTLtaXfzr7w&usqp=CAU'
  }];
  const doctor4 = [{
    name: 'Dr.Mithali Rammaiah',
    specialization: 'MBBS, MD - General Medicine',
    experience: '7 Years of Experience',
    consultationFee: 'PACE Hospitals,Thiruvananthapuram', 
    rating:<Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />,
  
    public4:'647 patient stories',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkbXEmmq9WiT6DDF7tB_0JwED2sVulO65UUA&usqp=CAU'
  }];
  const doctor5 = [{
    name: 'Dr.Keerthiga ',
    specialization: 'MBBS, MD - Paediatrics',
    experience: '5 Years of Experience',
    consultationFee: 'Meenakshi Mission Hospital,Madurai', 
    rating:<Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />,
  
    public5:'800 patient stories',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0JfXwwQZrop8oWCMdMDFSV0DrLis2g1xLZruOEh7Tz5i3ufqrjKkJZy6X58N04hXlljM&usqp=CAU'
  }];
  
  const doctor6 = [{
    name: 'Dr. Ravjani Naushadali',
    specialization: 'MBBS, MD - Anesthesiology',
    experience: '12 Years of Experience',
    consultationFee: 'Jain Hospital, SriNagar', 
    rating:<Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly />,
  
    public6:'787 patient stories',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJHS-W6VSjJPc8AuDSvGlvlp1RJAs55Ylm2Q&usqp=CAU'
  }];
  const doctor7 = [{
    name: 'Dr. Krishna Rayudu',
    specialization: 'MBBS, MD - Psychiatry',
    experience: '20 Years of Experience',
    consultationFee: 'Krishna Hospital, Bangalore', 
    rating:<Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />,
  
    public7:'1067 patient stories',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2_OB9a99vJwaTx_uK3TStt1DeATapTf3vSQ&usqp=CAU'
  }];

  const doctor8 = [{
    name: 'Dr. Ananthiga Sri B',
    specialization: 'MBBS, MD - General Surgery',
    experience: '6 Years of Experience',
    consultationFee: 'Global Hospitals, Chennai', 
    rating:<Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />,
  
    public8:'500 patient stories',
    image: 'data:image/jpeg;base64,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'
  }];
  
  const doctor9 = [{
    name: 'Dr. Varsha',
    specialization: 'MBBS, MD - Obstertrics and Gynecology',
    experience: '7 Years of Experience',
    consultationFee: 'KG Hospitals,Delhi', 
    rating:<Rating name="half-rating-read" defaultValue={4.9} precision={0.5} readOnly />,
  
    public9:'687 patient stories',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoytxFgZjqMxoQtzGa7PrgzqacfsjqLMp-g&usqp=CAU'
  }];
  const doctor10 = [{
    name: 'Dr. Praveen Kumar',
    specialization: 'MBBS, MD - Dermatology and Gynecology',
    experience: '10 years of Experience',
    consultationFee: 'Balaji Clinic , Hyderabad', 
    rating:<Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />,
  
    public9:'3399 patient stories',
    image: 'https://docsapp-doctor.s3.us-west-2.amazonaws.com/profile_images/23773.36'
  }];
  const doctor11 = [{
    name: 'Dr. Abhishek Juneja',
    specialization: 'MBBS, MD - Migraine and Neurology ',
    experience: '10 years of Experience',
    consultationFee: 'KG Hospitals,Delhi', 
    rating:<Rating name="half-rating-read" defaultValue={4.6} precision={0.5} readOnly />,
  
    public9:'9163 patient stories',
    image: 'https://docsapp-doctor.s3.us-west-2.amazonaws.com/profile_images/21125.png'
  }];
  return (
    <>
    <Nav/>
    <MeetDoc/>
    <div class='column'>

       {doctor.map((doctor) => (
           <div key={doctor.id} className="profile-container1">
        <img src={doctor.image} alt={Dr} className="doctor-image1" />
      <br></br>
        <div className="profile-details1">
        <h1 class="h1Dr1">{doctor.name}</h1>
        <br></br>
        <p class="pDr1">{doctor.specialization}</p>
        <p class="pDr1">{doctor.experience}</p>
        <p class="pDr1">{doctor.consultationFee}</p>
        <p class="pDr1">{doctor.rating} <h6>{doctor.public}</h6></p>
        <a href="http://localhost:3000/Dr1">View Profile</a>
       </div>
       <div>
      
       </div>
       
      </div>
    ))}
    
    
       {doctor1.map((doctor1) => (
           <div key={doctor1.id} className="profile-container1">
        <img src={doctor1.image} alt={Dr} className="doctor-image1" />
      <br></br>
        <div className="profile-details1">
        <h1 class="h1Dr1">{doctor1.name}</h1>
        <br></br>
        <p class="pDr1">{doctor1.specialization}</p>
        <p class="pDr1">{doctor1.experience}</p>
        <p class="pDr1">{doctor1.consultationFee}</p>
        <p class="pDr1">{doctor1.rating} <h6>{doctor1.public1}</h6></p>
        <a href=" ">View Profile</a>
       </div>
       <div>
    </ div>
       
      </div>
    ))}
    

   
       {doctor2.map((doctor2) => (
           <div key={doctor2.id} className="profile-container1">
        <img src={doctor2.image} alt={Dr} className="doctor-image1" />
      <br></br>
        <div className="profile-details1">
        <h1 class="h1Dr1">{doctor2.name}</h1>
        <br></br>
        <p class="pDr1">{doctor2.specialization}</p>
        <p class="pDr1">{doctor2.experience}</p>
        <p class="pDr1">{doctor2.consultationFee}</p>
        <p class="pDr1">{doctor2.rating} <h6>{doctor2.public2}</h6></p>
        <a href=" ">View Profile</a>
       </div>
       <div>
      
       </div>
       
      </div>
    ))}
    
    
    
       {doctor3.map((doctor3) => (
           <div key={doctor3.id} className="profile-container1">
        <img src={doctor3.image} alt={Dr} className="doctor-image1" />
      <br></br>
        <div className="profile-details1">
        <h1 class="h1Dr1">{doctor3.name}</h1>
        <br></br>
        <p class="pDr1">{doctor3.specialization}</p>
        <p class="pDr1">{doctor3.experience}</p>
        <p class="pDr1">{doctor3.consultationFee}</p>
        <p class="pDr1">{doctor3.rating} <h6>{doctor3.public3}</h6></p>
        <a href=" ">View Profile</a>
       </div>
       <div>
      
       </div>
       
      </div>
    ))}
    
    
    
       {doctor4.map((doctor4) => (
           <div key={doctor4.id} className="profile-container1">
        <img src={doctor4.image} alt={Dr} className="doctor-image1" />
      <br></br>
        <div className="profile-details1">
        <h1 class="h1Dr1">{doctor4.name}</h1>
        <br></br>
        <p class="pDr1">{doctor4.specialization}</p>
        <p class="pDr1">{doctor4.experience}</p>
        <p class="pDr1">{doctor4.consultationFee}</p>
        <p class="pDr1">{doctor4.rating} <h6>{doctor4.public4}</h6></p>
        <a href=" ">View Profile</a>
       </div>
       <div>
      
       </div>
       
      </div>
    ))}
    
    
  
  
       {doctor5.map((doctor5) => (
           <div key={doctor5.id} className="profile-container1">
        <img src={doctor5.image} alt={Dr} className="doctor-image1" />
      <br></br>
        <div className="profile-details1">
        <h1 class="h1Dr1">{doctor5.name}</h1>
        <br></br>
        <p class="pDr1">{doctor5.specialization}</p>
        <p class="pDr1">{doctor5.experience}</p>
        <p class="pDr1">{doctor5.consultationFee}</p>
        <p class="pDr1">{doctor5.rating} <h6>{doctor5.public5}</h6></p>
        <a href=" ">View Profile</a>
       </div>
       <div>
      
       </div>
       
      </div>
    ))}
   
   
    {doctor6.map((doctor6) => (
           <div key={doctor6.id} className="profile-container1">
        <img src={doctor6.image} alt={Dr} className="doctor-image1" />
      <br></br>
        <div className="profile-details1">
        <h1 class="h1Dr1">{doctor6.name}</h1>
        <br></br>
        <p class="pDr1">{doctor6.specialization}</p>
        <p class="pDr1">{doctor6.experience}</p>
        <p class="pDr1">{doctor6.consultationFee}</p>
        <p class="pDr1">{doctor6.rating} <h6>{doctor6.public6}</h6></p>
        <a href=" ">View Profile</a>
       </div>
       <div>
      
       </div>
       
      </div>
    ))}
   
   
    {doctor7.map((doctor7) => (
           <div key={doctor7.id} className="profile-container1">
        <img src={doctor7.image} alt={Dr} className="doctor-image1" />
      <br></br>
        <div className="profile-details1">
        <h1 class="h1Dr1">{doctor7.name}</h1>
        <br></br>
        <p class="pDr1">{doctor7.specialization}</p>
        <p class="pDr1">{doctor7.experience}</p>
        <p class="pDr1">{doctor7.consultationFee}</p>
        <p class="pDr1">{doctor7.rating} <h6>{doctor7.public7}</h6></p>
        <a href=" ">View Profile</a>
       </div>
       <div>
      
       </div>
       
      </div>
    ))}
  
    
    {doctor8.map((doctor8) => (
           <div key={doctor8.id} className="profile-container1">
        <img src={doctor8.image} alt={Dr} className="doctor-image1" />
      <br></br>
        <div className="profile-details1">
        <h1 class="h1Dr1">{doctor8.name}</h1>
        <br></br>
        <p class="pDr1">{doctor8.specialization}</p>
        <p class="pDr1">{doctor8.experience}</p>
        <p class="pDr1">{doctor8.consultationFee}</p>
        <p class="pDr1">{doctor8.rating} <h6>{doctor8.public8}</h6></p>
        <a href=" ">View Profile</a>
       </div>
       <div>
      
       </div>
       
      </div>
    ))}
    
 
    {doctor9.map((doctor9) => (
           <div key={doctor9.id} className="profile-container1">
        <img src={doctor9.image} alt={Dr} className="doctor-image1" />
      <br></br>
        <div className="profile-details1">
        <h1 class="h1Dr1">{doctor9.name}</h1>
        <br></br>
        <p class="pDr1">{doctor9.specialization}</p>
        <p class="pDr1">{doctor9.experience}</p>
        <p class="pDr">{doctor9.consultationFee}</p>
        <p class="pDr1">{doctor9.rating} <h6>{doctor9.public9}</h6></p>
        <a href=" ">View Profile</a>
       </div>
       <div>
      
       </div>
       
      </div>
    ))}
    {doctor10.map((doctor10) => (
           <div key={doctor9.id} className="profile-container1">
        <img src={doctor10.image} alt={Dr} className="doctor-image1" />
      <br></br>
        <div className="profile-details1">
        <h1 class="h1Dr1">{doctor10.name}</h1>
        <br></br>
        <p class="pDr1">{doctor10.specialization}</p>
        <p class="pDr1">{doctor10.experience}</p>
        <p class="pDr">{doctor10.consultationFee}</p>
        <p class="pDr1">{doctor10.rating} <h6>{doctor10.public9}</h6></p>
        <a href=" ">View Profile</a>
       </div>
       <div>
      
       </div>
       
      </div>
    ))}
    {doctor11.map((doctor11) => (
           <div key={doctor11.id} className="profile-container1">
        <img src={doctor11.image} alt={Dr} className="doctor-image1" />
      <br></br>
        <div className="profile-details1">
        <h1 class="h1Dr1">{doctor11.name}</h1>
        <br></br>
        <p class="pDr1">{doctor11.specialization}</p>
        <p class="pDr1">{doctor11.experience}</p>
        <p class="pDr">{doctor11.consultationFee}</p>
        <p class="pDr1">{doctor11.rating} <h6>{doctor11.public9}</h6></p>
        <a href=" ">View More</a>
       </div>
       <div>
      
       </div>
       
      </div>
    ))}
   
    </div>
    </>
  )
}

export default Dr