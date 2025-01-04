import React from 'react';
import {
  GitHub,
  YouTube,
  WhatsApp,
  LinkedIn,
  Email,
  Instagram,
} from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import '../Footer/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="flex-container">
        <div className="flex-item">
          <p className="category">COMMUNITY</p>
          <div className="content">
            <p>Blog</p>
            <p>Services</p>
            <p>Contact us</p>
          
          </div>
        </div>
        <div className="flex-item">
          <p className="category">COMPANY</p>
          <div className="content">
            <p>About us</p>
            <p>Kids Care</p>
            <p>Meal Planner</p>
            
          </div>
        </div>
        <div className="flex-item">
          <p className="category">USEFUL LINKS</p>
          <div className="content">
            <p>Ambulance Service</p>
            <p>MedHubBot</p>
            <p>Terms of use</p>
            <p>Privacy policy</p>
            <p>Cookie policy</p>
          </div>
        </div>
      </div>
      <div className="icons-footer">
        <div className="icon-container">
         <center> <IconButton color="inherit" href="https://github.com/" target="_blank">
            <GitHub />
          </IconButton>
          <IconButton color="inherit" href="https://www.youtube.com/" target="_blank">
            <YouTube />
          </IconButton>
          <IconButton color="inherit" href="https://wa.me/1234567890" target="_blank">
            <WhatsApp />
          </IconButton>
          <IconButton color="inherit" href="https://www.linkedin.com/" target="_blank">
            <LinkedIn />
          </IconButton>
          <IconButton color="inherit" href="mailto:your.email@gmail.com">
            <Email />
          </IconButton>
          <IconButton color="inherit" href="https://www.instagram.com/" target="_blank">
            <Instagram />
          </IconButton></center>
        </div>
      <center>  <p className="category">Copyright © 2024 MedHub, Inc.</p></center>
      </div>
    </footer>
  );
};

export default Footer;