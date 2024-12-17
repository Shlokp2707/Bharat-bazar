
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
          
  return (
    <>
      <header className="text-gray-600 body-font w-screen m-0 p-0  sticky top-0 z-50">
        <div className="bg-blue-800 mx-auto flex flex-wrap p-3 rounded-lg flex-col md:flex-row items-center">
          <div className="w-32 flex justify-center items-center">
            <img src="bbzoom.png"  className=" ml-20 w-14" alt=""/>
              <span className="ml-6 text-2xl font-bold  text-yellow-400">Bharat Bazar</span>
          </div>
          <div className="w-1/2 flex items-center justify-center text-center">
            <input type="search" placeholder="Search Any Product..." className="w-2/3 h-12 outline-0 rounded-l-lg text-lg pl-1 bg-white " ariaLabel="Search"/>
            <button type="submit" className="text-center" ariaLabel="Search button">
              <i className="fa fa-search text-white cursor-white
               bg-black w-10 h-12 text-3xl center rounded-r-lg"></i>
            </button>
          </div>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <NavLink  to= "/" className="mr-5 scale-100% w-40 text-center text-xl shadow-2xl  font-bold text-white active:text-2xl hover:text-black">
           Home
            </NavLink>

             <NavLink  to= "/help" className="mr-5 scale-100% w-40 text-center text-xl  font-bold text-white active:text-2xl hover:text-black " >
                  Help                          
            </NavLink>                       
            <NavLink  to= "/login" className="mr-5 scale-100% w-44 text-center text-xl  font-bold text-white active:text-2xl hover:text-black " >
           Login/Sign In
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Nav;
