import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Rate.css'; 

import MaximizeIcon from '@mui/icons-material/Maximize';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
const Rate = () => {
  const [showMessage, setShowMessage] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowMessage(true);
  };

  return (
<div>

      <Nav></Nav>
      <div class="topMH">
        <center>
        <h1 className='h1'>Rate Us</h1>
    <br></br>
    <MaximizeIcon></MaximizeIcon> <MaximizeIcon></MaximizeIcon>
    <p> Your thoughts matter! Share your feedback with us to help enhance your experience. We appreciate your valuable insights</p>

    <p> Together, let's create a better experience for everyone!!
      </p>
      <br>
      </br><MaximizeIcon></MaximizeIcon> <br></br>
     </center>
</div>
  
    <div className='bb1'>
   <div className="containerMhub">
      <div className="post" style={{ display: showMessage ? 'block' : 'none' }}>
        <div className="textv">Thanks for rating us!</div>
        <div className="edit" onClick={() => setShowMessage(false)}>EDIT</div>
      </div>
      <div className="star-widget" style={{ display: showMessage ? 'none' : 'block' }}>
        <input className='input' type="radio" name="rate" id="rate-5" />
        <label htmlFor="rate-5"><FontAwesomeIcon icon={faStar} /></label>
        <input  className='input'type="radio" name="rate" id="rate-4" />
        <label htmlFor="rate-4"><FontAwesomeIcon icon={faStar} /></label>
        <input className='input' type="radio" name="rate" id="rate-3" />
        <label htmlFor="rate-3"><FontAwesomeIcon icon={faStar} /></label>
        <input className='input' type="radio" name="rate" id="rate-2" />
        <label htmlFor="rate-2"><FontAwesomeIcon icon={faStar} /></label>
        <input className='input' type="radio" name="rate" id="rate-1" />
        <label htmlFor="rate-1"><FontAwesomeIcon icon={faStar} /></label>
        <form onSubmit={handleSubmit}>
          <header></header>
          <div className="textarea">
            <textarea cols="30" placeholder="Describe your experience.."></textarea>
          </div>
          <div className="btn">
            <button type="submit">Post</button>
          </div>
        </form>
      </div>
    </div>
  
    </div>
    <Footer></Footer>
</div>
  );
};

export default Rate;