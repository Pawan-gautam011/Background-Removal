import React from 'react';
import mp4 from '../src/assets/video.mp4';

const RemoveBackground = () => {
  return (
    <>
      <div className="grid place-content-center h-screen">
        <div className="flex items-center flex-col sm:flex-row">
          <video autoPlay loop muted className="w-[100%] sm:w-[50%] lg:w-[50%]">
            <source src={mp4} type="video/mp4" />
          </video>
          <div className="h-80 w-64 mx-auto mt-10 border sm:ml-24 sm:w-96">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default RemoveBackground;
