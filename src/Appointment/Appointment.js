
import React from 'react';
import MaximizeIcon from '@mui/icons-material/Maximize';
import '../Appointment/Appointment.css';
import { useNavigate } from 'react-router-dom';
import Nav from '../Nav/Nav';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Appointment = () => {
  const Backi = useNavigate();

  const handleMgs = () => {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const email = document.getElementById('email').value;
    const lastCheckupDate = document.getElementById('lastCheckupDate').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;
    const streetAddress = document.getElementById('streetAddress').value;
    const city = document.getElementById('city').value;
    const healthIssues = document.getElementById('healthIssues').value;

    if (!name || !age || !gender || !mobileNumber || !email || !lastCheckupDate || !appointmentDate || !appointmentTime || !streetAddress || !city || !healthIssues) {
      toast.error('Please fill in all the fields', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Bounce,
      });
      return;
    }

    toast.info('Your Appointment has been Booked', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      transition: Bounce,
      onClose: () => {
        Backi('/');
      },
    });
  };

  return (
    <div>
      <Nav />
      <br />
      <center>
        <h1 className="h1AP">Book your appointment</h1>
      </center>
      <br />
      <center>
        <MaximizeIcon />
      </center>
      <br />
      <div className="bodyv">
        <div className="login11">
          <form>
            <label>Name</label>
            <br />
            <div className="box1">
              <input type="text" id="name" placeholder="Enter your Name" required />
            </div>
            <br />
            <label>Age</label>
            <br />
            <div className="box1">
              <input type="number" id="age" min="1" max="80" placeholder="Choose your age" required />
            </div>
            <br />
            <label>Gender</label>
            <div className="box1">
              <input type="text" id="gender" placeholder="Enter your Gender" required />
            </div>
            <br />
            <label>Mobilenumber</label>
            <div className="box1">
              <input type="tel" id="mobileNumber" placeholder="Enter your MobileNumber" required />
            </div>
            <br />
            <label>Email</label>
            <div className="box1">
              <input type="email" id="email" placeholder="Enter your Email" required />
            </div>
            <br />
            <label>Last Check up Date</label>
            <div className="box1">
              <input type="date" id="lastCheckupDate" placeholder="dd-MM-yy" required />
            </div>
            <br />
            <label>Appointment Date</label>
            <div className="box1">
              <input type="date" id="appointmentDate" placeholder="dd-MM-yy" required />
            </div>
            <br />
            <label>Appointment Time</label>
            <div className="box1">
              <input type="time" id="appointmentTime" required />
            </div>
            <br />
            <label>Street address</label>
            <br />
            <div className="box1">
              <input type="text" id="streetAddress" required />
            </div>
            <br />
            <label>City</label>
            <br />
            <div className="box1">
              <input type="text" id="city" required />
            </div>
            <br />
            <label>Health issues</label>
            <br />
            <textarea id="healthIssues" placeholder="write here" required></textarea>
          </form>
          <br />
          <button type="button" onClick={handleMgs}>
            Book Appointment
          </button>
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
    </div>
  );
};

export default Appointment;
