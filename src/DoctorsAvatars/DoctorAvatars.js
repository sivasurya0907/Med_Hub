import React from 'react';
import '../DoctorsAvatars/DoctorAvatars.css'
import Rating from '@mui/material/Rating';
const DoctorAvatars = () => {
  const doctors = [
    { id: 1, name: 'Dr. Smira', photoUrl: 'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709078400&semt=sph',Rating:<Rating name="half-rating-read" defaultValue={5.5} precision={0.5} readOnly />,role:'Paediatric Genetics'},
    { id: 2, name: 'Dr. Andri', photoUrl: 'https://img.freepik.com/free-photo/world-doctors-day-cute-doctor-holding-with-crossed-hands-with-stethoscope-lab-coat_140725-162341.jpg',Rating:<Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />,role:'Pediatric Cardiology' },
    { id: 3, name: 'Dr. Emily', photoUrl: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg',Rating:<Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />,role:'Pediatric Pulmonology' },
  ];

  return (
    <>
   <div className='bodyAV'>
   <br></br>
    <center> <h2>Meet Our Pediatricians</h2>
    <br></br>
      <p>
        Our team of experienced pediatricians is dedicated to providing compassionate and
        comprehensive care for your children. Get to know our experts below:
      </p></center>
      <br></br>     
      <br></br>
    <div className="doctor-avatars">
    {doctors.map((doctor) => (
      <div key={doctor.id} className="doctor-avatar">
        <img src={doctor.photoUrl} alt={doctor.name} className="avatar-image" />
        <p className="doctor-name">{doctor.name}</p>
        <p className="doctor-role">{doctor.role}</p>
        <p className="doctor-role">{doctor.Rating}</p>
       
      </div>
    ))}
  </div>
   </div>
    </>
  );
};

export default DoctorAvatars;
