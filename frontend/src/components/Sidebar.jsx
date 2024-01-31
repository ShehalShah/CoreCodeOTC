// Sidebar.js
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

const Sidebar = () => {
    const nav=useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white p-4 w-1/6 ${isOpen ? 'block' : 'hidden'} md:block`}>
      {/* Close button for mobile */}
      {isOpen && (
        <button
          className='lg:hidden absolute top-2 right-2 px-2 py-1'
          onClick={toggleSidebar}
        >
          Close
        </button>
      )}

      {/* Sidebar header */}
      <div className="mb-4 text-xl font-bold">OTC TECH</div>

      {/* Sidebar content */}
      <ul className='space-y-2'>
        <li className='rounded-md cursor-pointer px-2 py-1 hover:bg-gray-700 transition' onClick={()=>{nav("/")}}>
          Home
        </li>
        <li className='rounded-md cursor-pointer px-2 py-1 hover:bg-gray-700 transition' onClick={()=>{nav("/dashboard")}}>
          Dashboard
        </li>
        <li className='rounded-md cursor-pointer px-2 py-1 hover:bg-gray-700 transition'>
          Meetups
        </li>
        <li className='rounded-md cursor-pointer px-2 py-1 hover:bg-gray-700 transition' onClick={() => {nav("/summary")}}>
          Summaries
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
