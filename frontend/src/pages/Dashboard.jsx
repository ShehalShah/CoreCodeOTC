// Dashboard.jsx

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    // Get the selected file from the input
    const file = e.target.files[0];

    // Update the state with the selected file
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Handle the file upload logic here
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
      // Implement your file upload logic using a backend or a service like Firebase Storage
    } else {
      console.warn('No file selected for upload.');
    }
  };

  return (
    <div className='flex h-screen text-white'>
      <Sidebar />
      <div className='flex flex-col flex-1 w-full overflow-hidden'>
        <Navbar />
        <main className='flex-1 overflow-x-hidden overflow-y-auto bg-[#020617]'>
          <div className='container mx-auto mt-10'>
            <div className='max-w-md mx-auto p-6 bg-white rounded-md shadow-md'>
              <h2 className='text-2xl text-black font-bold mb-4'>Dashboard</h2>
              <div className='mb-4'>
                <label htmlFor='videoFile' className='block text-sm font-medium text-gray-700'>
                  Choose a video file:
                </label>
                <input
                  type='file'
                  id='videoFile'
                  accept='video/*'
                  onChange={handleFileChange}
                  className='mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300'
                />
              </div>
              <button
                onClick={handleUpload}
                className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'
              >
                Upload Video
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
