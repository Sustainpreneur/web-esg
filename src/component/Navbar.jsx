import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MASTER_ROUTER_MODEL } from '../models/Router_model';
import { Menu } from '@headlessui/react';

const Navbar_made = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const page = useLocation();
  const toggle = () => {
    setSidebarToggle(!sidebarToggle);
  }
  return (
    <>
      <nav className="bg-white border-gray-200 px-1 sm:px-4 py-3 sm:py-2.5 sticky top-0 rounded">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="" className="flex items-center">
            <span className="self-center text-sm sm:text-sm lg:text-xl font-semibold whitespace-nowrap">ESG DATA ANALYSIS</span>
            <span className='self-center px-1 text-sm sm:text-sm lg:text-xl font-light'>| SUSTAINPRENUER</span>
          </a>
          <button
            onClick={() => toggle()}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center sm:p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
              {MASTER_ROUTER_MODEL.map((dataObj, index) => {
                return (
                  dataObj.is_active && dataObj.is_show &&
                  <li key={index}>
                    <Link to={dataObj.router_path} className='h-full' key={index}>
                      <button className={`${page.pathname === dataObj.router_path ? "text-red-700" : "text-gray-700 md:hover:text-blue-700"} uppercase`}>
                        {dataObj.title}</button>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>
      <div className='absolute w-full md:hidden'>
        <div className={`w-full h-full fixed top-12 left-0 bg-[rgba(0,0,0,.5)] z-[30]
           transition-all  duration-400 
           ${sidebarToggle ? " ease-out visible opacity-100" : " invisible ease-in opacity-0"}`}
          onClick={() => toggle(false)}>
        </div>
        <div className={`w-full bg-white pl-5 py-2 border-y-2 fixed z-[40] transition-all duration-400
           ${sidebarToggle ? "ease-out visible opacity-100" : "invisible ease-in opacity-0"}`}>
          <div className='flex relative flex-col'>
            <div className=''>
              {MASTER_ROUTER_MODEL.map((x, idx) => {
                return (
                  x.is_active && x.is_show &&
                  <Link to={x.router_path} className='h-full' key={idx} onClick={() => toggle(false)}>
                    <p className={`${page.pathname === x.router_path ? "text-red-700" : "text-gray-700"} py-2 w-full text-sm font-medium flex uppercase`}>
                      {x.title}
                    </p>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar_made;