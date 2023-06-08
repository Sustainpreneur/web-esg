import React, { useEffect, useState } from 'react'
import Navbar_made from '../component/Navbar';
import companyAPI from '../apis/companyAPI';
import PriceForTable from '../component/Table/PriceForTable';
import { useNavigate } from 'react-router-dom';

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

  const [company, setCompany] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArray, setFilteredArray] = useState([]);
  const [activeFilter, setActiveFilter] = useState(null);
  const navigate = useNavigate();

  const getAllCompany = async () => {
    try {
      const response = await companyAPI.getAllCompany();
      setCompany(response);
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCompany()
  }, []);

  useEffect(() => {
    let filtered = company.filter(item => item.symbol.startsWith(searchTerm.toUpperCase()));

    if (activeFilter !== null) {
      filtered = company.filter(item => item.industry_group === activeFilter);
    }

    setFilteredArray(filtered);
  }, [company, searchTerm, activeFilter]);

  const handleSearch = () => {
    const filtered = company.filter(item => item.industry_group.toLowerCase().includes(filterTerm));
    setFilteredArray(filtered);
  }


  const navigateToDetail = (id) => {
    navigate(`/ESG-Profile/${id}`);
  };


  return (
    <>
      <Navbar_made />
      <div className='container mx-auto px-1 md:px-0 z-10'>
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
        <div className='mt-10'>
          <div className='text-xl font-bold mb-4'>ค้นหาบริษัทที่คุณสนใจ</div>
          <form className="flex items-center">
            <label for="simple-search" class="sr-only">Search</label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
                placeholder="Search" required />
              <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-red-700 rounded-r-lg border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span class="sr-only">Search</span>
              </button>
            </div>
          </form>
          <div className='py-5'>
            <div className='text-lg font-semibold'>Filter</div>
            <div className='py-3 grid grid-cols-4 md:flex space-x-1 space-y-1 md:space-x-4 md:space-y-0'>
              <button className='text-[12px] md:text-sm font-semibold md:px-5 md:py-2 rounded-lg border drop-shadow-sm' onClick={() => setActiveFilter(null)}>All Company</button>
              <button className='text-[12px] md:text-sm font-semibold md:px-5 md:py-2 rounded-lg border drop-shadow-sm' onClick={() => setActiveFilter(' Transportation & Logistics')}>Transportation & Logistics</button>
              <button className='text-[12px] md:text-sm font-semibold md:px-5 md:py-2 rounded-lg border drop-shadow-sm' onClick={() => setActiveFilter('Food and Beverage')}>Food and Beverage</button>
              <button className='text-[12px] md:text-sm font-semibold md:px-5 md:py-2 rounded-lg border drop-shadow-sm' onClick={() => setActiveFilter('Commerce')}>Commerce</button>
              <button className='text-[12px] md:text-sm font-semibold md:px-5 md:py-2 rounded-lg border drop-shadow-sm' onClick={() => setActiveFilter('Banking')}>Banking</button>
              <button className='text-[12px] md:text-sm font-semibold md:px-5 md:py-2 rounded-lg border drop-shadow-sm' onClick={() => setActiveFilter('Information & Communication Technology')}>Information & Communication Technology</button>
              <button className='text-[12px] md:text-sm font-semibold md:px-5 md:py-2 rounded-lg border drop-shadow-sm' onClick={() => setActiveFilter('Energy & Utilities')}>Energy & Utilities</button>
            </div>
          </div>
          <div>
            <div className='text-base md:text-lg font-semibold pb-3'>Organizations</div>
            <div className='relative overflow-x-auto'>
              <table className='w-full text-sm text-left text-gray-500' data={company}>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                  <tr>
                    <th scope='col' className='px-2 md:px-6 py-3'>Symbol</th>
                    <th scope='col' className='px-2 md:px-6 py-3'>Name</th>
                    <th scope='col' className='px-2 md:px-6 py-3'>Sector</th>
                    <th scope='col' className='px-2 md:px-6 py-3'>Industry</th>
                    <th scope='col' className='px-6 py-3'>Price</th>
                    <th scope='col' className='px-6 py-3'>Change 1 day</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredArray && filteredArray.map((dataObj, index) => {
                    return (
                      <React.Fragment>
                        <tr
                          key={index}
                          className='bg-white border-b hover:bg-gray-200 cursor-pointer'
                          onClick={() => { navigateToDetail(dataObj.id); }}
                        >
                          <th scope='row' className='px-2 md:px-6 py-4 text-[12px] font-bold text-gray-900 whitespace-nowrap'>
                            {dataObj.symbol}
                          </th>
                          <th scope='row' className='px-2 md:px-6 py-4 font-bold text-gray-900 whitespace-nowrap'>
                            {dataObj.company_name_th}
                          </th>
                          <th scope='row' className='px-2 md:px-6 py-4 font-light text-gray-900 whitespace-nowrap'>
                            {dataObj.industry_group ? dataObj.industry_group : "-"}
                          </th>
                          <th scope='row' className='px-2 md:px-6 py-4 font-light text-gray-900 whitespace-nowrap'>
                            {dataObj.set_mai_industry_group}
                          </th>
                          <PriceForTable symbol={dataObj.symbol} />
                        </tr>
                      </React.Fragment>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Homepage;