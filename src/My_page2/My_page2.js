import React, { useState, useRef, useEffect } from 'react';
import './My_page2.css';
import MaximizeIcon from '@mui/icons-material/Maximize';
import Nav from '../Nav/Nav';
export const My_Page2 = () => {
  const firstNameRef = useRef(null);

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  const Alt1 = () => {
    alert('Form Submitted Successfully');
  };

  return (
    <>
    <Nav></Nav>
   <center> <h1 className='h1'>Online Pharmacy</h1>
     <br>
      </br><MaximizeIcon></MaximizeIcon>
     </center>
    <div className="containermH">
      <div className="image-containermH">
        <img
          src="https://static.vecteezy.com/system/resources/previews/025/467/320/original/male-doctor-uniform-cartoon-character-pointing-at-empty-space-for-medical-healthcare-presentation-vector.jpg"
          alt="Doctor"
          className='gg1'
          />
      </div>

      <div className="form-containermH">
         
        <form>
          <div className="btn214">
            <label className="l1">Patient's full Name :</label>
            <input
              type="text"
              ref={firstNameRef}
              required
              placeholder="Enter the Name"
              className='pp'
            />
            
            <br />
          </div>

          <div className="btn214">
            <label>Age : </label>
              <br></br>
            <select required className='pp'>
              <option value="0-10">Select Age Group</option>
              <option value="0-10">0 - 10</option>
              <option value="10-18">10 - 18</option>
              <option value="18-30">18 - 30</option>
              <option value="31-45">31 - 45</option>
              <option value="45+">Greater Than 45</option>
            </select>
          </div>
          <br />

          <div className="btn214">
            <label className="l1">Phone Number :</label>
            <input
              type="number"
              required
              placeholder="Enter the Mobile Number"
              className='pp'/>
          </div>

          <div className="btn214">
            <label className="l1">Gender :</label>
            <br></br>
            <select required  className='pp'>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
<br/>
          
          <div className="btn214">
            <label className="l1">Address :</label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Enter the Address"
              className='pp'
            />
          </div>

          <div className="btn214">
            <label className="l1">Prescription : </label>
            <input type="file" className='pp'/>
          </div>

          <br />
          <center>
            <button type="submit" className="btn2" onClick={Alt1}>
              Submit
            </button>
          </center>
        </form>
      </div>
    </div>
    </>
  );
};