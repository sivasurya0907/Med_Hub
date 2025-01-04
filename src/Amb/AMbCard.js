
import React from 'react';

const ImageCard = ({ imageUrl, sentence }) => {
  return (
   <>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
    <div className="cardAmbu">
      <div className="image-containerAmbu">
        <img src={imageUrl} alt="" className='imgAmbu' />
      </div>
      <div className="text-containerAmbu">
        <p>{sentence}</p>
      </div>
    </div></>
  );
};

const AMbCard = () => {
  return (
    <> 
   <div className='Ambuwhole'>
    <br></br>
    <br></br>
  
    <center><h1>Ambulance Services</h1></center>
    <br></br>
    <br></br>
   <center> <div className="card-containerAmbu">
    <ImageCard
      imageUrl="https://cdn.dribbble.com/users/730521/screenshots/2679602/ambulance_scene_low.gif"
      sentence="Neonatal transport services are a vital part of care for premature and sick babies, to ensure that babies can be moved quickly for the right care in the right place for their needs."
    />
    <ImageCard
      imageUrl="https://cdn.dribbble.com/users/2287419/screenshots/10880081/media/dfd81c79379b7b60282eb86e9e028f44.gif"
      sentence="Patient Transport Vehicle
      PTV is a non emergency patient transport vehicle equipped with patient bed & other life-support devices."
    />
    <ImageCard
      imageUrl="https://cdn.dribbble.com/users/1203016/screenshots/4240628/ambulance2.gif"
      sentence="Basic Ambulance Basic Life Support Ambulance is for the patients who need medical transportation. It comprises of patient bed, pulse oximetry and oxygen delivery devices."
    />
   <br></br>
   <br></br>
  </div></center>
   </div>
   </>
   
  );
};

export default AMbCard;
//https://cdn.dribbble.com/users/730521/screenshots/2679602/ambulance_scene_low.gif
//https://cdn.dribbble.com/users/2287419/screenshots/10880081/media/dfd81c79379b7b60282eb86e9e028f44.gif
//https://cdn.dribbble.com/users/1203016/screenshots/4240628/ambulance2.gif