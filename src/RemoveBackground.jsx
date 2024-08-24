import React, { useState } from 'react';
import mp4 from '../src/assets/video.mp4';

const RemoveBackground = () => {
  const [image, setImage] = useState(null);
  const [bgRemove, setBgRemove] = useState(null);

  const handleRemoveBackground = async () => {
    const apiKey = "cgGYdW9utgg2jZfaU3fnedfx";
    const apiUrl = "https://api.remove.bg/v1.0/removebg";

    const formData = new FormData();
    formData.append("image_file", image, image.name);
    formData.append("size", "auto");

    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'X-Api-Key': apiKey
        },
        body: formData
      });

      const data = await res.blob();

      const reader = new FileReader();
      reader.onloadend = () => {
        setBgRemove(reader.result);
      };
      reader.readAsDataURL(data);

    } catch (e) {
      console.error(e);
      return;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white px-4">
      <div className="flex flex-col sm:flex-row w-full max-w-4xl rounded-lg shadow-lg bg-gray-700 overflow-hidden">

     
        <div className="w-full sm:w-1/2">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src={mp4} type="video/mp4" />
          </video>
        </div>

    
        <div className="flex flex-col justify-center w-full sm:w-1/2 p-6">
          <div className="mb-4">
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:text-sm cursor-pointer file:font-semibold file:border-0 file:rounded-md file:bg-blue-500 file:text-white hover:file:bg-blue-600"
            />
          </div>

          {
            image &&

            <button
            onClick={handleRemoveBackground}
            className="px-4 py-2 mb-4 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-600 transition-all duration-200"
          >
            Remove Background
          </button>
          }

         

     
          <div className="flex flex-col sm:flex-row justify-center items-center space-x-4">
            {image && (
              <div className="mb-4">
                <img src={URL.createObjectURL(image)} alt="Uploaded" className="w-full max-w-sm rounded-lg shadow-md" />
              </div>
            )}

            {bgRemove && (
              <div className="mb-4">
                <div className='border-2 border-gray-600 rounded-lg border-dashed p-4 w-full max-w-sm'>
                  <img src={bgRemove} alt="Background removed" className="w-full rounded-md" />
                </div>
              </div>
            )}
          </div>

          {bgRemove && (
            <div className="mt-6">
              <a href={bgRemove} download={'save.png'}>
                <button className='w-full bg-gray-700 text-white py-2 px-4 rounded-md border border-gray-600 hover:bg-gray-600 transition-all duration-200'>
                  Download
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>

  );
};

export default RemoveBackground;
