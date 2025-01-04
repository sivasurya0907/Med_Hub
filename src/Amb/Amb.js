import { useState } from 'react';
import './Amb.css'
import AMbCard from './AMbCard';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

const Amb= () => {
    const [isAmbulanceCalled, setIsAmbulanceCalled] = useState(false);

  const handleCallAmbulance = () => {
    setIsAmbulanceCalled(true);
    if (window.confirm('Are you sure you want to call the ambulance?')) {
      window.location.href = 'tel:108';
    }
  };
  const handleAm = () =>{
    alert("Ambulance Has Successful Booked");
  }
  return (
  <>
  <Nav></Nav>
    <div>
        <div className='boxam'>
    <center>
      
          <p className='pam'><h1>Book Ambulance within 2 Minutes</h1>
    <br></br>
    <br></br>
    <label>Phone Number:</label>
    <br></br>
          <input></input>
          <br></br>
          <br></br>
          <label>Select Ambulance:</label>
          <br></br>
          <select>
            <option>--.--</option>
            <option>Neonatal Ambulance</option>
            <option>Patient Transport Vehicle</option>
            <option>Advance Ambulance</option>
          </select>
          <br></br>
          <br></br>
          <label>Address:</label><br></br>
          <textarea/>
          
          <br></br>
          <button className='ambtn2' onClick={handleAm}>Book Now </button>
         </p>
         <br></br>
          <h3 className='orAm'>Or </h3>
         <br></br>
        <center>
        {!isAmbulanceCalled ? (
        <button onClick={handleCallAmbulance} className='ambtn1'>Call Ambulance</button>
       
      ) : (
       <center> <h1 className='amsg'>An ambulance has been called. Please wait</h1></center>
      )}
      
        </center>
    </center>
        </div>
     
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
   
      <AMbCard></AMbCard>
     <Footer></Footer>
  </>
  );
};

export default Amb;