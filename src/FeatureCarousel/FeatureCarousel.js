import React, { useState } from 'react';
 import '../FeatureCarousel/FeatureCarousel.css'
const FeatureCarousel = () => {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  const features = [
    {
      id: 9,
      description: 'Giving Kids The Best Care',
    },
    {
      id: 10,
     description: 'Better Doctors,Better Care',
    },
    {
      id: 11,
      description: 'Leading You To Better Health',
    },
    {
      id: 12,
      description: 'Creating Healthier Lives',
    },
  ];

  const nextFeature = () => {
    setCurrentFeatureIndex((prevIndex) => (prevIndex + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentFeatureIndex(
      (prevIndex) => (prevIndex - 1 + features.length) % features.length
    );
  };

  return (
    <>
    <div class="bodyFC">
    <div className="feature-carousel">
        <button className="carousel-button" onClick={prevFeature}>
          &lt;
        </button>
        <div className="feature">
          <br></br>
          <p>{features[currentFeatureIndex].description}</p>
          <br></br>
        </div>
        <button className="carousel-button" onClick={nextFeature}>
          &gt;
        </button>
      </div>
    </div>
    </>
  );
};

export default FeatureCarousel;
