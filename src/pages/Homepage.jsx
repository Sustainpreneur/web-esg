import React, { useState, useEffect } from 'react'
import Navbar_made from '../component/Navbar';
import Search from '../component/Search/Search';
import Footer from '../component/Footer';
import newsAPI from '../apis/newsAPI';

const Homepage = () => {
  const [newsData, setNewsData] = useState();

  const getThreeLatestNews = async () => {
    try {
      const response = await newsAPI.mockThreeLatestNews();
      setNewsData(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getThreeLatestNews()
  }, []);

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
            {newsData && newsData.map((dataObj, index) => {
              return (
                <div key={index} className='border border-gray-200 rounded-lg shadow w-[400px]'>
                  <img className='rounded-t-lg' src={dataObj.image} alt="" />
                  <div className='p-5'>
                    <div className='mb-2 flex justify-between items-center'>
                      <div className='flex space-x-1 text-sm font-bold'>
                        <div className='text-[#03B50A]'>
                          {dataObj.category}
                        </div>
                      </div>
                      <div className='text-sm font-semibold'>
                        {dataObj.time}
                      </div>
                    </div>
                    <h5 className='mb-2 font-bold tracking-tight'>{dataObj.title}</h5>
                    {/* <p className='text-sm'>Source: {newsData[0].source}</p>
                    <p className='text-sm'>Link: {newsData[0].link}</p> */}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <Search />
      </div>
      <Footer />
    </>
  )
}

export default Homepage;