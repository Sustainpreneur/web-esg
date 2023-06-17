import React, { useEffect, useState } from 'react';
import PriceForTable from '../Table/PriceForTable';
import companyAPI from '../../apis/companyAPI';
import { useNavigate } from 'react-router-dom';
import { AiFillCheckCircle, AiFillMinusCircle } from 'react-icons/ai';

export default function Search() {
  const [company, setCompany] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArray, setFilteredArray] = useState([]);
  const [activeFilter, setActiveFilter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 10;

  const navigate = useNavigate();

  const handleClick = (page) => {
    setCurrentPage(page);
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = company.slice(startIndex, endIndex);

  const getAllCompany = async () => {
    try {
      const response = await companyAPI.mockAllCompany();
      setCompany(response);
      setTotalPages(Math.ceil(response.length / itemsPerPage));
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

    if (activeFilter === 'SET50') {
      filtered = company.filter(item => item.set50 == true);
    } else if (activeFilter === 'SET100') {
      filtered = company.filter(item => item.set100 == true);
    } else if (activeFilter === 'THSI') {
      filtered = company.filter(item => item.setthsi == true);
    } else if (activeFilter === 'THSI INDEX') {
      filtered = company.filter(item => item.setthsi_index == true);
    }

    setFilteredArray(filtered);
    setTotalPages(Math.ceil(filtered.length / itemsPerPage));
  }, [company, searchTerm, activeFilter]);

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  }

  const handleSearch = () => {
    const filtered = company.filter(item => item.industry_group.toLowerCase().includes(filterTerm));
    setFilteredArray(filtered);
  }


  const navigateToDetail = (id) => {
    navigate(`/ESG-Profile/${id}`);
  };

  return (
    <div className='mt-10'>
      <div className='text-xl font-bold mb-4'>ค้นหาบริษัทที่คุณสนใจ</div>
      <form className="flex items-center">
        <label htmlFor="simple-search" className="sr-only">Search</label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
            placeholder="Search" required />
          <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-red-700 rounded-r-lg border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </form>
      <div className='py-5'>
        <div className='text-lg font-semibold'>Filter</div>
        <div className='py-3 grid grid-cols-4 md:flex space-x-1 space-y-1 md:space-x-4 md:space-y-0'>
          <button className='text-[12px] md:text-sm font-semibold md:px-5 md:py-2 rounded-lg border drop-shadow-sm' onClick={() => handleFilter(null)}>All Company</button>
          <button className='text-[12px] md:text-sm font-semibold md:px-5 md:py-2 rounded-lg border drop-shadow-sm' onClick={() => handleFilter('SET50')}>SET 50</button>
          <button className='text-[12px] md:text-sm font-semibold md:px-5 md:py-2 rounded-lg border drop-shadow-sm' onClick={() => handleFilter('SET100')}>SET 100</button>
          <button className='text-[12px] md:text-sm font-semibold md:px-5 md:py-2 rounded-lg border drop-shadow-sm' onClick={() => handleFilter('THSI')}>THSI</button>
          <button className='text-[12px] md:text-sm font-semibold md:px-5 md:py-2 rounded-lg border drop-shadow-sm' onClick={() => handleFilter('THSI INDEX')}>SET THSI INDEX</button>
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
                <th scope='col' className='px-2 md:px-6 py-3'>THSI</th>
                <th scope='col' className='px-2 md:px-6 py-3'>THSI INDEX</th>
                <th scope='col' className='px-2 md:px-6 py-3'>SET</th>
                <th scope='col' className='px-6 py-3'>Price</th>
                <th scope='col' className='px-6 py-3'>Change 1 day</th>
              </tr>
            </thead>
            <tbody>
              {searchTerm !== '' || filteredArray.length > 0 ? (filteredArray.length > 0 ? ( filteredArray.map((dataObj, index) => (
                <React.Fragment key={index}>
                  <tr
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
                      {dataObj.sector ? dataObj.sector : "-"}
                    </th>
                    <th scope='row' className='px-2 md:px-6 py-4'>
                      {dataObj.setthsi ? <AiFillCheckCircle className='text-blue-600' size={20} /> : <AiFillMinusCircle className='text-gray-400' size={20} />}
                    </th>
                    <th scope='row' className='px-2 md:px-6 py-4'>
                      {dataObj.setthsi_index ? <AiFillCheckCircle className='text-blue-600' size={20} /> : <AiFillMinusCircle className='text-gray-400' size={20} />}
                    </th>
                    <th scope='row' className='px-2 md:px-6 py-4 font-light text-gray-900 whitespace-nowrap'>
                      {dataObj.set50 && dataObj.set100 && <p>SET50</p>}
                      {!dataObj.set50 && dataObj.set100 && <p>SET100</p>}
                      {!dataObj.set50 && !dataObj.set100 && <p>{dataObj.market}</p>}
                    </th>
                    <PriceForTable symbol={dataObj.symbol} />
                  </tr>
                </React.Fragment>
              ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">No results found</td>
                </tr>
              )
              ) :
                currentData && currentData.map((dataObj, index) => (
                  <React.Fragment key={index}>
                    <tr
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
                        {dataObj.sector ? dataObj.sector : "-"}
                      </th>
                      <th scope='row' className='px-2 md:px-6 py-4'>
                        {dataObj.setthsi ? <AiFillCheckCircle className='text-blue-600' size={20} /> : <AiFillMinusCircle className='text-gray-400' size={20} />}
                      </th>
                      <th scope='row' className='px-2 md:px-6 py-4'>
                        {dataObj.setthsi_index ? <AiFillCheckCircle className='text-blue-600' size={20} /> : <AiFillMinusCircle className='text-gray-400' size={20} />}
                      </th>
                      <th scope='row' className='px-2 md:px-6 py-4 font-light text-gray-900 whitespace-nowrap'>
                        {dataObj.set50 && dataObj.set100 && <p>SET50</p>}
                        {!dataObj.set50 && dataObj.set100 && <p>SET100</p>}
                        {!dataObj.set50 && !dataObj.set100 && <p>{dataObj.market}</p>}
                      </th>
                      <PriceForTable symbol={dataObj.symbol} />
                    </tr>
                  </React.Fragment>
                ))
              }
            </tbody>
          </table>
          <div className="flex justify-center mt-4">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`mx-2 px-4 py-2 rounded ${currentPage === page ? 'bg-red-700 text-white' : 'bg-gray-300'
                  }`}
                onClick={() => handleClick(page)}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}