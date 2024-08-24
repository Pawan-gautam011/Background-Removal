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
    <>
      <div className="grid place-content-center h-screen">
        <div className="flex items-center flex-col sm:flex-row">
          <video autoPlay loop muted className="w-[100%] sm:w-[50%] lg:w-[50%]">
            <source src={mp4} type="video/mp4" />
          </video>
          <div className="h-full w-auto mx-auto mt-10 border sm:ml-24 sm:w-96">
            <div className='input border border-gray-700 px-2 py-2 rounded-lg bg-gray-950 mb-5'>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className='text-sm text-gray-500 file:mr-5 file:py-1 file:px-3 file:text-xs file:font-medium file:border-0 file:rounded-md
                file:bg-gray-800 file:text-gray-500 hover:file:cursor-pointer hover:file:bg-blue-500
                hover:file:text-blue-700 lg:w-[40em]'
              />
            </div>
            <div className="flex justify-center mt-10">
              <button onClick={handleRemoveBackground}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
                Remove Background
              </button>
            </div>

            {image &&
              <div className="flex justify-center mt-5">
                <img src={URL.createObjectURL(image)} alt="Uploaded" className="w-[50%]" />
              </div>
            }

            {bgRemove &&
              <div className='border-2 border-gray-500 rounded-r-lg border-dashed flex justify-center p-2 w-40 lg:w-80 mt-5'>
                <img src={bgRemove} alt="Background removed" className="w-full" />
              </div>
            }

            {bgRemove &&
              <div className="mt-4">
                <a href={bgRemove} download={'save.png'}>
                  <button className='bg-gray-800 text-white w-full py-2 px-3 rounded-lg border border-gray-600'>
                    Download
                  </button>
                </a>
              </div>
            }

          </div>
        </div>
      </div>
    </>
  );
};

export default RemoveBackground;
