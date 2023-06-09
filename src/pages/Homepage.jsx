import React from 'react'
import Navbar_made from '../component/Navbar';
import Search from '../component/Search/Search';
import Footer from '../component/Footer';

const Homepage = () => {
  const newsData = [
    {
      name: 'India pauses plans to add new coal plants for five years, bets on renewables, batteries',
      tag: 'WORLD',
      type: 'ENVIRONMENT',
      source: 'AP NEWS',
      link: 'https://apnews.com/article/india-coal-pause-plan-climate-renewables-68b75402af663e4553434bc672fc9cda',
      date: '01/06/2023'
    },
  ]

  return (
    <>
      <Navbar_made />
      <div className='container mx-auto px-1 mb-10 md:px-0 z-10'>
        <div className='pt-2 pb-5 lg:pb-10'>
          <h1 className="text-[40px] leading-10 lg:text-8xl font-bold">Environment Social and Governance</h1>
        </div>
        <div>
          <p className='text-base lg:text-2xl font-extralight'>
            ESG data analysis platform for the stock exchange of Thailand
          </p>
          <p className='text-base lg:text-2xl font-light text-[#00B0B0]'>
            "We integrates nonfinancial and financial data contributes to the business success of the organization"
          </p>
        </div>
        <div>
          <div className='pt-4 mb-4'>
            <h1 className='text-xl font-semibold'>Sustainable News</h1>
          </div>
          <div className='grid grid-cols-3 items-stretch place-items-center'>
            <div className='border border-gray-200 rounded-lg shadow w-[400px]'>
              <img className='rounded-t-lg' src="img/image-1.jpg" alt="" />
              <div className='p-5'>
                <div className='mb-2 flex justify-between items-center'>
                  <div className='flex space-x-1 text-sm font-bold'>
                    <div className='text-[#03B50A]'>
                      {newsData[0].type} |
                    </div>
                    <div className='text-[#033FB5]'>
                      {newsData[0].tag}
                    </div>
                  </div>
                  <div className='text-sm font-semibold'>
                    {newsData[0].date}
                  </div>
                </div>
                <h5 className='mb-2 font-bold tracking-tight'>{newsData[0].name}</h5>
                <p className='text-sm'>Source: {newsData[0].source}</p>
                <p className='text-sm'>Link: {newsData[0].link}</p>
              </div>
            </div>
            <div className='border border-gray-200 rounded-lg shadow w-[400px]'>
              <img className='rounded-t-lg' src="img/image-1.jpg" alt="" />
              <div className='p-5'>
                <div className='mb-2 flex justify-between items-center'>
                  <div className='flex space-x-1 text-sm font-bold'>
                    <div className='text-[#03B50A]'>
                      {newsData[0].type} |
                    </div>
                    <div className='text-[#033FB5]'>
                      {newsData[0].tag}
                    </div>
                  </div>
                  <div className='text-sm font-semibold'>
                    {newsData[0].date}
                  </div>
                </div>
                <h5 className='mb-2 font-bold tracking-tight'>{newsData[0].name}</h5>
                <p className='text-sm'>Source: {newsData[0].source}</p>
                <p className='text-sm'>Link: {newsData[0].link}</p>
              </div>
            </div>
            <div className='border border-gray-200 rounded-lg shadow w-[400px]'>
              <img className='rounded-t-lg' src="img/image-1.jpg" alt="" />
              <div className='p-5'>
                <div className='mb-2 flex justify-between items-center'>
                  <div className='flex space-x-1 text-sm font-bold'>
                    <div className='text-[#03B50A]'>
                      {newsData[0].type} |
                    </div>
                    <div className='text-[#033FB5]'>
                      {newsData[0].tag}
                    </div>
                  </div>
                  <div className='text-sm font-semibold'>
                    {newsData[0].date}
                  </div>
                </div>
                <h5 className='mb-2 font-bold tracking-tight'>{newsData[0].name}</h5>
                <p className='text-sm'>Source: {newsData[0].source}</p>
                <p className='text-sm'>Link: {newsData[0].link}</p>
              </div>
            </div>
          </div>
        </div>
        <Search />
      </div>
      <Footer />
    </>
  )
}

export default Homepage;