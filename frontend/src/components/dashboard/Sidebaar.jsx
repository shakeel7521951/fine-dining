import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Optional: using Lucide for better icons

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Icon */}
      <div className="md:hidden fixed top-0 left-0 z-50">
        <button onClick={() => setOpen(true)} className="text-white bg-gray-800 p-2 rounded-md">
          <Menu size={24} />
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div 
          className="fixed inset-0  bg-opacity-40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-screen w-[50%] md:w-[25%] bg-gray-800 text-white z-50 transform transition-transform duration-300 ${
        open ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 md:static md:flex md:flex-col p-4`}>
        {/* Close Button for mobile */}
        <div className="md:hidden flex justify-end mb-4">
          <button onClick={() => setOpen(false)} className="text-white">
            <X size={24} />
          </button>
        </div>

        <div className="mb-8 mt-4">
          <h1 className=" text-lg sm:text-2xl font-bold text-center">Admin Dashboard</h1>
        </div>

        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <Link 
              onClick={() => setOpen(false)}
                to="/admin/users" 
                className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Users
              </Link>
            </li>
            <li>
              <Link 
               onClick={() => setOpen(false)}
                to="/admin/reservations" 
                className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Reservations
              </Link>
            </li>
            <li>
              <Link 
               onClick={() => setOpen(false)}
                to="/admin/menu" 
                className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Menu
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mt-auto p-4 text-sm text-gray-400">
          <p>© 2023 Restaurant Admin</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
