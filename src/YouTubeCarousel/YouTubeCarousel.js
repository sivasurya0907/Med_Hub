import React, { useState } from 'react';
import '../YouTubeCarousel/YouTubeCarousel.css'; // Import your CSS file

const YouTubeCarousel = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
   '0giiDDBJVQU',
    '-nH4MRvO-10',
    '/i42FSNA9bAY',
    'f_F5UwtdPOc'
 
  ];

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  return (
   <>
   <br></br>
   <br></br>
   <div className='bodyYC'>
    <br></br>
   <div className="youtube-carousel">
      <div className="youtube-player">
        <iframe
          title={`YouTube Video ${currentVideoIndex + 1}`}
         
          src={`https://www.youtube.com/embed/${videos[currentVideoIndex]}`}
        
          allowFullScreen
        ></iframe>
      </div>
      <br></br>
      <div className="carousel-controls">
        <button className='buttonYC' onClick={prevVideo}>&lt;</button>
        <button className='buttonYC' onClick={nextVideo}>&gt;</button>
      </div>
        <br></br>
    </div>
   </div>
   </>
  );
};

export default YouTubeCarousel;
