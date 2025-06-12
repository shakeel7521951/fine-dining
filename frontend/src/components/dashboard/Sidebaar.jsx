import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white fixed left-0 top-0 p-4 flex flex-col">
      <div className="mb-8 mt-4">
        <h1 className="text-2xl font-bold text-center">Admin Dashboard</h1>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <Link 
              to="/admin/users" 
              className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Users
            </Link>
          </li>
          <li>
            <Link 
              to="/admin/reservations" 
              className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Reservations
            </Link>
          </li>
          <li>
            <Link 
              to="/admin/menu" 
              className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
  );
};

export default Sidebar;