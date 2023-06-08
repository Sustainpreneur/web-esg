import React, { Component } from 'react'
import Navbar_made from '../component/Navbar';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <>
      <Navbar_made />
      <div className='container mx-auto px-1 md:px-0 z-10'>
        <div className='pt-2 pb-5 lg:pb-10'>
          <h1 className="text-[40px] leading-10 lg:text-8xl font-bold">Environment<br /> Social and<br /> Governance</h1>
        </div>
        <div className=''>
          <p className='text-base lg:text-2xl font-extralight'>ESG data analysis platform for the Stock Exchange of Thailand<br />
            King Mongkut's University of Technology Thonburi<br />
            Computer Engineering Senior project
          </p>
          <Link to="/Solutions">
            <button className='mt-4 px-10 py-2 lg:text-base bg-red-700 text-white'>Solutions</button>
          </Link>
        </div>
        <div className='py-5 md:py-10'>
          <h1 className='text-4xl md:text-5xl font-bold'>How to use?</h1>
          <div className='pt-4'>
            <div className='flex flex-col md:flex-row items-center'>
              <div className='md:w-1/2 order-1'>
                <p>1. Visit the solutions page. This page provides a brief overview of each company, showing its financial and ESG score data.</p>
              </div>
              <div className='md:w-1/2 order-2'>
                <img className='md:w-[80%]' src="img/home page.png" alt="" />
              </div>
            </div>
            <div className='py-4'>
              <hr />
            </div>
            <div className='md:pt-6 flex flex-col md:flex-row items-center'>
              <div className='md:w-1/2 order-2'>
                <img className='md:w-[80%]' src="img/Solutions page.png" alt="" />
              </div>
              <div className='md:w-1/2 order-1'>
                <p>2. Select the company you are interested in. by clicking on the company abbreviation to view the company's detailed information.</p>
              </div>
            </div>
            <div className='py-4'>
              <hr />
            </div>
            <div className='md:pt-6 flex flex-col md:flex-row items-center'>
              <div className='md:w-1/2 order-1'>
                <p>3. ESG Profile Page This page provides detailed information about a company's ESG. It is divided into 2 main parts, namely, the company's preliminary information consists of Company abbreviation Company full name, current stock price, stock price percentage today compared to yesterday, and stock graphs. As for the annual report data, analyze and compare the results between AI and human beings to see if the results are the same or not.</p>
              </div>
              <div className='md:w-1/2 order-2'>
                <img className='md:w-[80%]' src="img/ESG Profile page.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage;